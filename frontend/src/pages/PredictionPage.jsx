import React, { useState , useRef} from 'react';
import axios from 'axios';
// Helper component for a single sensor reading
const SensorCard = ({ label, value, unit }) => (
  <div className="border p-4 rounded-lg text-center shadow-md">
    <div className="text-sm text-black">{label}</div>
    <div className="text-md font-semibold text-black">
      {typeof value === 'number' ? value.toFixed(2) : '--'}
      <span className="text-lg text-black ml-1">{unit}</span>
    </div>
  </div>
);

// Main App Component
export default function PredictionPage() {
  const [sensorData, setSensorData] = useState([]);
  const [annPrediction, setAnnPrediction] = useState({ label: 'N/A', probability: 0 });
  const [augmentedImage, setAugmentedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [status, setStatus] = useState('Connecting to server...');
  const fileInputRef = useRef(null);
  
const findMeasurements = async () => {
    try {
      const response = await axios.get('http://192.168.38.40:8000/sensorsLive');
      const n = response.data.length;
      setSensorData(response.data[n-1]);
    } catch (error) {
      console.log("Error in findMeasurements:", error);
    }
  };

  setTimeout(() => {
    findMeasurements();
  }, 50);


  const getLabelColor = (label) => {
    switch (label) {
      case 'stable': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'imminent_failure': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="text-black min-h-screen font-sans p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* --- Live Sensor Data Section --- */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-cyan-400 pl-3">Live Sensor Feed</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <SensorCard label="Temp" value={sensorData.temperature_c} unit="°C" />
            <SensorCard label="Humidity" value={sensorData.humidity_percent} unit="%" />
            <SensorCard label="Distance" value={sensorData.distance_cm} unit="cm" />
            <SensorCard label="Accel X" value={sensorData.ax} unit="g" />
            <SensorCard label="Accel Y" value={sensorData.ay} unit="g" />
            <SensorCard label="Accel Z" value={sensorData.az} unit="g" />
            <SensorCard label="Gyro X" value={sensorData.gx} unit="dps" />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* --- Image Analysis Section --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-cyan-400 pl-3">Visual Analysis (YOLO)</h2>
            <div className="border p-6 rounded-lg shadow-xl">
              <input type="file" accept="image/*" className="hidden" ref={fileInputRef} />
              <button
                onClick={() => fileInputRef.current.click()}
                disabled={isProcessing}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-600"
              >
                {isProcessing ? 'Processing...' : 'Upload Image for Analysis'}
              </button>
              <div className="mt-4 bg-gray-900 rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-gray-600">
                {augmentedImage ? (
                  <img src={augmentedImage} alt="Augmented analysis result" className="max-h-full max-w-full rounded-md" />
                ) : (
                  <p className="text-gray-500">Awaiting image upload...</p>
                )}
              </div>
            </div>
          </section>

          {/* --- Prediction Results Section --- */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-cyan-400 pl-3">Prediction Results (ANN)</h2>
            <div className="border p-6 rounded-lg shadow-xl flex flex-col justify-center">
              <div className="text-center text-black">
                <p className="text-lg text-black">Predicted State</p>
                <p className={`text-6xl font-bold uppercase text-black tracking-widest my-4 ${getLabelColor(annPrediction.label)}`}>
                  {annPrediction.label}
                </p>
              </div>
              <div className="w-full bg-black text-white rounded-full h-8 mt-4 pl-6 overflow-hidden border-2 border-gray-600">
                <div
                  className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-full flex items-center justify-center text-white font-bold"
                  style={{ width: `${annPrediction.probability * 100}%` }}
                >
                  {(annPrediction.probability * 100).toFixed(1)}%
                </div>
              </div>
              <p className="text-center mt-2 text-gray-400">Rockfall Probability</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
