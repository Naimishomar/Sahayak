import NotiFications from "../models/Notifications.model";

export const notifications = async(req,res)=>{
    try{
        const {title , message , receiverType} = req.body;
        if(!title || !message || !receiverType){
            return res.status(400).json({message:"Missing required feilds"});
        }
        const newNotification = new NotiFications({title , message , receiverType}) ;
        await newNotification.save();
        res.status(200).json({message:"Notifcation created sucessfully"});
    }
    catch(error){
        console.log("Error in notifications:",error);
        return res.status(400).json({message:"Error in creating the notification"});
    }
}
export const getNotifications = async (req, res) => {
  try {
    const { role } = req.user; // assuming you store role in JWT (worker/manager)
    const notifications = await Notification.find({
      $or: [{ receiverType: role }, { receiverType: "all" }]
    }).sort({ createdAt: -1 });

    res.json({ success: true, notifications });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
export const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await Notification.findByIdAndUpdate(id, { isRead: true });
    res.json({ success: true, message: "Notification marked as read" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};