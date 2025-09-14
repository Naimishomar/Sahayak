import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
function LandingPage() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null
  });
  const { latitude, longitude } = location;
  const apiKey = import.meta.env.VITE_WEATHER_API;
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Get user's location
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: 'Geolocation is not supported by your browser'
      }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      (error) => {
        setLocation((prev) => ({
          ...prev,
          error: error.message
        }));
      }
    );
  }, []);

  // Fetch weather data when latitude and longitude are available
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const getWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          );
          const data = await response.json();
          setWeather(data);
          console.log(data);
        } catch (err) {
          console.error('Error fetching weather data:', err);
        }
      };

      getWeather();
    }
  }, [apiKey, latitude, longitude]);

  return (
    <>
      <div className="hero w-full h-screen relative text-white">
        <img src="https://media.istockphoto.com/id/1442849073/photo/the-earth-space-planet-3d-illustration-background-city-lights-on-planet.jpg?s=612x612&w=0&k=20&c=M4xlet0XFVCB4tLHgI3htTPNoemokpJxpmdUqpVBndU=" alt="" className='w-full h-full object-cover' />
        <div className="absolute bg-black/50 top-0 h-full w-full"></div>
        <div className="absolute top-40 w-full h-full flex flex-col justify-between items-center px-10 gap-10">
          <div className="max-w-5xl flex flex-col">
            <p className="text-center text-2xl">Welcome to Sahayak</p>
            <motion.h1 initial={{opacity:0 , y:20}} animate={{opacity:1, y:0}} transition={{duration:1}} className="text-6xl font-bold text-center">
              Predict, Prepare, and Protect: Rockfall Safety Powered by AI
            </motion.h1>
            <motion.button initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}} className='bg-[#27516A] px-5 py-3 rounded-full min-w-xl mx-auto mt-10 cursor-pointer'>Get Started</motion.button>
          </div>
          {/* <div className="w-[100%] flex flex-col justify-center items-center">
              <div className='bg-black/20 px-5 py-6 h-full rounded-2xl'>
              <h1 className="text-2xl font-bold">
                  {weather?.name || "Loading..."}
              </h1>
              <p>{currentTime.toLocaleString()}</p>
              <h1 className="text-5xl font-bold">
                  {weather?.main?.temp !== undefined
                  ? (weather.main.temp - 273.15).toFixed(2) + "°C"
                  : "Loading..."}
              </h1>
              <p>
                  {weather?.weather && weather.weather.length > 0
                  ? weather.weather[0].main
                  : "Loading..."}
              </p>
              </div>
          </div> */}
        </div>
      </div>
      <div className='w-full h-screen relative'>
        <video
          src="mine.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute"
        ></video>
        <div className="absolute bg-black/50 top-0 h-full w-full"></div>
        <div className="absolute bg-gradient-to-b from-black via-black/70 to-transparent top-0 h-50 w-full"></div>
      </div>
    </>
  );
}

export default LandingPage;
