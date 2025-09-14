import express from "express";
import { getNotifications , markAsRead , notifications } from "../controllers/Notifications";
const router = express.Router();


router.get('/getNotifications',getNotifications);
router.post('/markAsRead',markAsRead);