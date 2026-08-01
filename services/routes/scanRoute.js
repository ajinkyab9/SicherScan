import express from 'express';
import createScanPayload from '../controllers/scanController.js';

const scanRouter = express.Router();

scanRouter.post('/', createScanPayload);

export default scanRouter;