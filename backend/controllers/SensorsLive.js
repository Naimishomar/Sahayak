
//  temp , humidity , Displacement per-Rate , ax , ay , az , gx , gy , gz 

const SensorsLivedata = async (req, res) => {
    try {
        const { temperature_c, humidity_percent, distance_cm, ax, ay, az, gx, gy, gz } = req.body;
        if (temperature_c == null || humidity_percent == null || distance_cm == null || ax==null || ay==null || az==null || gx==null || gy==null || gz==null) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        console.log(temperature_c, humidity_percent, distance_cm, ax, ay, az, gx, gy, gz);
        return res.status(201).json({ message: 
            "SensorsLive created sucessfully", temperature_c, humidity_percent, distance_cm, ax, ay, az, gx, gy, gz });
    }
    catch (error) {
        console.log("Error in SensorsLive:", error);
        return res.status(400).json({ message: "Error in creating the SensorsLive" });
    }
}
export default SensorsLivedata; 