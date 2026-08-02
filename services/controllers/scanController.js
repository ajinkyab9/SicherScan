import { Prisma } from "@prisma/client";
import prisma from "../config/db.js";
import dotenv from "dotenv";
//import { response } from "express";
dotenv.config();

async function triggerScannerEngine(scanId, codeSnippet) {
  const pythonEngineUrl = process.env.PYTHON_ENGINE_URL;
  try {
    const engineResponse = await fetch(pythonEngineUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ scanId, codeSnippet }),
    });

    const scannedPayloadResult = await engineResponse.json();

    const updatePayloadStatus = await prisma.scan.update({
      where: { id: scanId },
      data: { status: "COMPLETED", codeSnippet: "codeSnippet" },
    });
  } catch (error) {
    const failedPayloadScan = await prisma.scan.update({
      where: { id: scanId },
      data: { status: "FAILED" },
    });
    console.error("Background engine failed:", error);
  }
}

const createScanPayload = async (req, res) => {

    try {
      // extraction and validation of data from req.body

      const { userName, codeSnippet } = req.body;

      if (!userName || !codeSnippet) {
        return res.status(400).json({
          success: false,
          message:
            "Missing required fields: userName and codeSnippet are mandatory.",
        });
      }

      // prisma db operations
      const newCodeScan = await prisma.scan.create({
        data: {
          userName: userName,
          codeSnippet: codeSnippet,
        },
      });

      //triggering the background engine
      triggerScannerEngine(newCodeScan.id, codeSnippet);

      //returning success response
      res.status(202).json({ success: true, data: newCodeScan });
    } catch (error) {
      console.error("Error create the scan payload", error);

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2025") {
          return res.status(404).json({
            success: false,
            message: "Scan record not found in the database.",
          });
        }

        return res.status(400).json({
          success: false,
          message: "Database operation failed due to invalid data.",
        });
      }

      // fallback to tackle unexpected server crash
      res.status(500).json({
        success: false,
        message: "An internal server error occurred.",
      });
    }
};

export default createScanPayload;