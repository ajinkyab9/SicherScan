import express from 'express';
import {
  createScanPayload,
  getScanResult,
} from "../controllers/scanController.js";
import getLanguages from "../controllers/languageController.js";

const scanRouter = express.Router();

scanRouter.post("/", createScanPayload);
scanRouter.get("/languages", getLanguages);
scanRouter.get("/:id", getScanResult);

export default scanRouter;