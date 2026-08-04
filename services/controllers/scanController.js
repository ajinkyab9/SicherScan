import { Prisma } from "@prisma/client";
import prisma from "../config/db.js";
import dotenv from "dotenv";
//import { response } from "express";
import redisClient from "../config/redisClient.js";
dotenv.config();

const createScanPayload = async (req, res) => {

    try {
      const { userName, codeSnippet } = req.body;

      if (!userName?.trim() || !codeSnippet?.trim()) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: userName and codeSnippet are mandatory.",
        });
      }

      if (codeSnippet.length > 100_000) {
        return res
          .status(400)
          .json({ success: false, message: "Code snippet too large" });
      }

      // prisma db operations
      const newCodeScan = await prisma.scan.create({
        data: {
          userName,
          codeSnippet,
        },
      });

      const redisPayload = {
        id: newCodeScan.id,
        userName: newCodeScan.userName,
        codeSnippet: newCodeScan.codeSnippet,
      };

      try {
        await redisClient.lPush("scan_job", JSON.stringify(redisPayload));
      } catch (err) {
        await prisma.scan.delete({
          where: { id: newCodeScan.id },
        });
        throw err;
      }
      //returning success response
      return res.status(202).json({ success: true, data: newCodeScan });
    } catch (error) {
      console.error("Error create the scan payload", error);

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return res.status(400).json({
          success: false,
          message: "Database operation failed due to invalid data.",
        });
      }

      // fallback to tackle unexpected server crash
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