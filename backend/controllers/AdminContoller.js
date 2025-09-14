

import Worker from "../models/workers.model.js";
import Admin from "../models/admin.model.js";
import { nanoid } from "nanoid";

export const registerAdmin = async(req,res)=>{
    try {
        const {name,email,aadharCard,age,gender,password} = req.body;
        if(!name || !email || !aadharCard || !age || !gender || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const existingAdmin = await Admin.findOne({$or:[{email},{aadharCard}]});
            if(existingAdmin){
                return res.status(400).json({message:"Admin already exists"});}
            const id = nanoid(5); 
            const Hashedpassword = await bcrypt.hash(password, 10);
            const admin = await Admin.create({
                id: id,
                name,
                email,
                aadharCard,
                age,
                gender,
                password: Hashedpassword,
            })
            const token = jwt.sign({id:admin.id}, process.env.JWT_SECRET, {expiresIn:'24h'});
            return res.status(201).json({message:"Admin registered successfully", admin, token});
        }
    } catch (error) {
        console.log("Error in registerAdmin:",error);
        return res.status(400).json({message:"Error in registerAdmin"});
    }}
export const loginAdmin = async(req,res)=>{
    try {
        const {id,password} = req.body;
        if(!id || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const admin = await Admin.findOne({id});
            if(!admin){
                return res.status(400).json({message:"Invalid id"});
            }
            const isMatch = await bcrypt.compare(password, admin.password);
            if(!isMatch){
                return res.status(400).json({message:"Invalid password"});
            }
            const token = jwt.sign({id:admin.id}, process.env.JWT_SECRET, {expiresIn:'24h'});
            return res.status(200).json({message:"Login successful", token});
        }
    } catch (error) {
        console.log("Error in loginAdmin:",error);
        return res.status(400).json({message:"Error in loginAdmin"});
    }}  
export const updateAdmin = async(req,res)=>{
    try {
        const {previousPassword,password} = req.body;
        if(!previousPassword || !password){
            return res.status(400).json({message:"Missing required fields"});
        }
        else{
            const admin = await Admin.findOne({id: req.user.id});
            if(!admin){
                return res.status(400).json({message:"Invalid id"});
            }
            if(await bcrypt.compare(previousPassword, admin.password)){
                const Hashenewdpassword = await bcrypt.hash(password, 10);
                const admin = await Admin.findOneAndUpdate({id: req.user.id},{Hashenewdpassword},{new:true});
                return res.status(200).json({message:"Password updated successfully", admin});
            }
            else{
                return res.status(400).json({message:"Invalid password"});
            }
        }
    } catch (error) {
        console.log("Error in updateAdmin:",error);
        return res.status(400).json({message:"Error in updateAdmin"});
    }
}
export const getWorkers = async (req, res) => {
    try {
        const workers = await Worker.find();
        res.json(workers);
    }
    catch (error) {
        console.error("Error in getworkers: ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
export const addWorker = async (req, res) => {
    try {
        const { name, email, aadharCard, phoneNumber, age, gender, password } = req.body;
        if (!name || !email || !aadharCard || !phoneNumber || !age || !gender || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // when you use create method then it automatically saves the data to the database
        const worker = await Worker.create({
            name,
            email,
            aadharCard,
            phoneNumber,
            age,
            gender,
            password,
        });
        res.status(201).json({ message: "Worker added sucessfully", worker });
    }
    catch (error) {
        console.error("Error in the AddWorker: ", error);
        return res.status(500).json({ messgae: "Internal Server Error" });
    }
}
export const updateWorker = async (req, res) => {
    try {
        const { id } = req.params;
        await Worker.findByIdAndIpdate(id, req.body, { new: true, runvalidators: true }, (err, user) => {
            if (err) {
                console.log("Error in updating the worker:", err);
                return res.status(401).json({ Message: "Error in updating the Wroker" })
            }
            else if (!user) {
                console.log("user Not found");
                return res.status(404).json({ message: "User not found in the Db" })
            }
            else {
                return res.status(200).json({ message: "Worker Updated succsefully", user });
            }
        });
    }
    catch (error) {
        console.error("Error in the updateWorker:", error);
    }
}
export const DeleteWroker = async(req,res)=>{
    try{
          const {id} = req.params;
          const DeleteWorker = await Worker.DeleteOne({id:id})
          if(!DeleteWorker){
            console.log("Worker Not found");
            return res.status(404).json({message:"Worker not found"});
          }
          else{
            console.log("Worker Deleted succesfully");
            return res.status(200).json({message:"Worker Deleted successfully"});
          }    
    }
    catch(error){
        console.error("Error in the DeleteWorker:",error);
        res.status(500).json({message:"Internal Serve Error"})
    }
}
