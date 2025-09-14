import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://naimishomar:fyOiokoRW4O2riXT@cluster0.lhyhq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB successfully🚀");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default connectDB;