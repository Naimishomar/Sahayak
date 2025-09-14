import express from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/admin.model.js';

export const workersMiddleware = async(req,res,next)=>{
    try {
        const token = req.headers.authorization[0] || req.cookies.token;
        if(!token){
            return res.status(401).json({message:"No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({message:"Invalid token"});
        }
        const worker = await worker.findOne({id:decoded.id});
        if(!worker){
            return res.status(401).json({message:"Invalid token"});
        }
        req.user = {id: worker.id};
        next();
    } catch (error) {
        console.log("Error in authMiddleware:",error);
        return res.status(400).json({message:"Error in authMiddleware"});
    }
}
export const adminMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }
    else if (req.cookies?.token) {
      token = req.cookies.token;
    }
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findOne({ id: decoded.id });
    if (!admin) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = { id: admin.id, email: admin.email };
    next();
  } catch (error) {
    console.error("Error in adminMiddleware:", error);
    return res.status(400).json({ message: "Error in adminMiddleware" });
  }
};
