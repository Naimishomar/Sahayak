import mongoose from "mongoose";
const ReportScheme = new mongoose.Schema({
    Mine:String,
    Week:String,
    Summary:String,
    CreatedAt:{
        type:Date,
        default:Date.now(),
    }
})
const Report = mongoose.model("Reports",ReportScheme);
export default Report;