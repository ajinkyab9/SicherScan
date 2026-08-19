import { Prisma } from "@prisma/client";
import prisma from "../config/db.js";
import dotenv from "dotenv";
//import { response } from "express";
import redisClient from "../config/redisClient.js";
dotenv.config();

const createScanPayload = async (req, res) => {

    try {
      console.log("1 Routing is working, request received Body:", req.body);
      const { userName, codeSnippet, langName } = req.body;

      if (!userName?.trim() || !codeSnippet?.trim() || !langName?.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: userName, codeSnippet and language name are mandatory.",
        });
      }

      if (codeSnippet.length > 100_000) {
        return res
          .status(400)
          .json({ success: false, message: "Code snippet too large" });
      }

      const newCodeScan = await prisma.scan.create({
        data: {
          userName,
          codeSnippet,
          codeLang: langName,
        },
      });

      const redisPayload = {
        id: newCodeScan.id,
        userName: newCodeScan.userName,
        codeSnippet: newCodeScan.codeSnippet,
        codeLang: newCodeScan.langName,
      };

      // NOTE: added error checks, if reddit fails, a rollback option is included
      try {
        console.log("2 About to push to Redis queue");
        await redisClient.lPush("scan_job", JSON.stringify(redisPayload));
        console.log("3 Pushed the payload to Redis queue");
      } catch (redisError) {
        // * below: if in case redis fails, db rollback will be done so that the process isnt stuck
        await prisma.scan.delete({ where: { id: newCodeScan.id } });
        console.error("Redis failed, rolled back DB:", redisError);
        return res.status(500).json({
          success: false,
          message: "Internal queue error. Please try again.",
        });
      }

      // NOTE: returns 202 response of successful operation
      return res.status(202).json({ success: true, data: newCodeScan });
    } catch (error) {
      console.error("Error create the scan payload", error);

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({
          success: false,
          message: "Database operation failed due to invalid data.",
        });
      }

      // NOTE: this is a fallback if in case a server crashes
      return res.status(500).json({
        success: false,
        message: "An internal server error occurred.",
      });
    }
};

const getScanResult = async (req, res) => {
  try {
    const { id } = req.params;

    const uuidValidationRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    if (!uuidValidationRegex.test(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid scan ID format, discarding further operations.",
      });
    }

    const scanRecord = await prisma.scan.findUnique({
      where: { id: id },
      select: {
        id: true,
        status: true,
        userName: true,
        createdAt: true,
        codeLang: true,
        vulnerabilities: {
          select: {
            vulType: true,
            severity: true,
            cvssBaseScore: true,
            description: true,
            describedChanges: true,
            fixedCode: true,
          },
        },
      },
    });

    if (!scanRecord) {
      return res.status(404).json({
        success: false,
        message: "Scan record not found.",
      });
    }
    //NOTE: 200 when everything goes right. we can fetch the results with the get api route
    return res.status(200).json({
      success: true,
      data: scanRecord,
    });
  } catch (error) {
    console.error("Error fetching scan result:", error);
    return res.status(500).json({
      success: false,
      message:
        "An internal server error occurred while fetching the scan result.",
    });
  }
};

export { createScanPayload, getScanResult };