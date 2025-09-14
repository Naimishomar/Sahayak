import express from 'express';
import { registerWorker ,loginWorker } from '../controllers/workers.controller.js';

const router = express.Router();
router.post('/WorkerRegistration',registerWorker)
router.post('/Workerlogin', loginWorker);

export default router;