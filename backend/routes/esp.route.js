import express from 'express';
import { getData } from '../controllers/esp.controller.js';

const router = express.Router();

router.post('/data/sensor', getData);

export default router;