import mongoose from "mongoose";

const workerSchema = new mongoose.Schema({
  workerId: {  // custom worker id if you need it
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  aadharCard: {
    type: String,  // changed to String
    required: true,
    unique: true,
    minlength: [12, "AadharNumber should be of 12 digits"],
    maxlength: [12, "AadharNumber should be of 12 digits"],
    match: [/^[0-9]{12}$/, "Invalid Aadhar number"],
  },
  phoneNumber: {
    type: String,  // changed to String
    required: true,
    unique: true,
    minlength: [10, "Phone should be 10 digits"],
    maxlength: [10, "Phone should be 10 digits"],
    match: [/^[0-9]{10}$/, "Invalid phone number"],
  },
  age: {
    type: Number,
    required: true,
    min: [18, "Worker must be at least 18"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female", "Other"], // restrict values
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters"],
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
    required: true,
  },
}, { timestamps: true });

const Worker = mongoose.model("Worker", workerSchema);
export default Worker;
