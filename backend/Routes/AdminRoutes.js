import express from "express";
import { adminMiddleware , workersMiddleware } from "../middlewares/auth.middleware.js";
import { registerAdmin , loginAdmin , updateAdmin } from "../controllers/AdminContoller.js";

const router = express.Router();
router.post('/registerAdmin',registerAdmin);
router.get('/loginAdmin',adminMiddleware , loginAdmin);
router.post('/updateAdmin',adminMiddleware,updateAdmin);
export default router;