import express from 'express';
import {
  createScanPayload,
  getScanResult,
} from "../controllers/scanController.js";
import getLanguages from "../controllers/languageController.js";
import getHistoricalRecords from "../controllers/historyController.js";

const scanRouter = express.Router();

scanRouter.post("/", createScanPayload);
scanRouter.get("/languages", getLanguages);
scanRouter.get("/scanHistory", getHistoricalRecords);
scanRouter.get("/:id", getScanResult);

export default scanRouter;