import mongoose from "mongoose";

const NotiFicationsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    isRead: {
        type: Boolean,
        require: true,
    },
    receiverType: {
        type: String,
        enum: ["worker", "manager", "all"],
        default: "all"
    },
    CareatedAt: {
        type: Date,
        default: Date.now(),
    }
});

const NotiFications = mongoose.model("NotiFications", NotiFicationsSchema);
export default NotiFications;
