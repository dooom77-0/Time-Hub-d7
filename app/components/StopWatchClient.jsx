"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function StopWatchClient() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  })

  const formatTime = (time) => {
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
    const milliseconds = String(Math.floor((time / 10) % 100)).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  }
  
  return (
    <div className="text-center min-h-screen w-screen flex flex-col justify-center items-center">
      <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-10">⏱️ ساعة ايقاف بسيطة</h1>
      </motion.h1>
      <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">{formatTime(time)}</h2>
      <div className="flex space-x-4">
        <button onClick={() => setRunning(!running)} className={`${running ? "bg-red-500" : "bg-green-500"} text-white px-6 py-3 rounded font-semibold`}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={() => setTime(0)} className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded">
          Reset
        </button>
      </div>
      </motion.div>
      
    </div>
  )
}
