import express from 'express';
import {
  createScanPayload,
  getScanResult,
} from "../controllers/scanController.js";

const scanRouter = express.Router();

scanRouter.post("/", createScanPayload);
scanRouter.get("/:id", getScanResult);

export default scanRouter;