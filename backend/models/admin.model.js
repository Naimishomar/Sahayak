import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  aadharCard: {
    type: Number,
    required: true,
    unique: true,
    minLength: [12, "Should be of length 12"],
    maxLength: [12, "Should be of length 12"],
  },
  phoneNumber:{
    type: Number,
    required: false, 
    unique: true,
    minLength: [10, "Should be of length 10"],
    maxLength: [10, "Should be of length 10"],
  },
  age:{
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  workers:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Workers",
    required: false,
  },
  workersPaid:{
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Workers",
    required: false,
  },
  mine:{
    type: Number,
    ref: "Mines",
    required: false,
  },
  organisation:{
    type: String,
    required: false,
  }
});

const Admin =  mongoose.model("Admin", adminSchema);
export default Admin;