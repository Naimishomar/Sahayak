export const getData = async()=>{
    try {
        const data = req.body;  // Get the data sent from ESP
        console.log("Received sensor data:", data);

        // Here you can save data to a database or process it further
        res.status(200).json({ message: "Data received successfully" });       
    } catch (error) {
        
    }
}