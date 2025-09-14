import express from "express";
import { getWorkers , addWorker , DeleteWroker , updateWorker } from "../controllers/AdminContoller.js";

const router = express.Router();
router.get('/getworkers',getWorkers);
router.post('/addworkers',addWorker);
router.delete('/deletewoker/:Workerid',DeleteWroker);
router.put("/updateworker/:Wrokerid",updateWorker);

export default router;