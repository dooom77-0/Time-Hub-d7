"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function WorldClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const cities = [
    { name: "مكة المكرمة", timezone: "Asia/Riyadh" },
    { name: "لندن", timezone: "Europe/London" },
    { name: "نيويورك", timezone: "America/New_York" },
    { name: "طوكيو", timezone: "Asia/Tokyo" },
  ];

  return (
    <div className="world-clock text-center flex flex-col items-center justify-center gap-6">
        <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-10">🌍 الوقت العالمي</h1>
        </motion.h1>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="cities grid grid-cols-2 sm:gap-4 sm:text-2xl md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {cities.map((city, index) => (
          <div key={index} className="city-time text-3xl md:text-4xl lg:text-5xl flex flex-col items-center">
            <h3>{city.name}</h3>
            <p className="mt-2">
              {new Intl.DateTimeFormat("en-US", {
                timeZone: city.timezone,
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
              }).format(time)}
            </p>
          </div>
        ))}
      </div>
        </motion.div>
      
    </div>
  );
}
