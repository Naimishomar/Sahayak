import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/db.js';
import WorkersRoute from './Routes/WorkersRoute.js';
import WorkerRoute from "./Routes/WorkerRoutes.js"
import SensorsLivedata from "./controllers/SensorsLive.js"
import { adminMiddleware } from './middlewares/auth.middleware.js';
import { workersMiddleware } from './middlewares/auth.middleware.js';
import AdminRoutes from "./Routes/AdminRoutes.js";

const port = process.env.PORT || 3000;
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/sensorsLive',SensorsLivedata);
app.use('/admin',WorkersRoute);
app.use("/Admin",AdminRoutes);
app.use('/worker',WorkerRoute);


connectDB().then(()=>{
  app.listen(3000,()=>{
    console.log("App is Running on the port 3000");
  })
})