"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PomodoroClient() {
    const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="text-4xl font-bold mb-10">Pomodoro Timer</h1>
            </motion.h1>
            <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-6xl font-bold text-shadow-lg mb-10">{formatTime(timeLeft)}</h2>
            </motion.h2>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                <button className={`${isRunning ? "bg-red-500" : "bg-green-500"} ${isRunning ? "hover:bg-red-700" : "hover:bg-green-700"} text-white font-bold py-2 px-4 rounded}`} onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? "Stop" : "Start"}
                </button>

                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => setTimeLeft(25 * 60)}>
                    Reset
                </button>
            </motion.div>
        </div>
    );
 }