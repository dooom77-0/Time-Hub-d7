"use client";
import Clock from "react-clock"
import "react-clock/dist/Clock.css"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function ClockClient() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        >
            <div className=" text-sm md:text-lg lg:text-6xl flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">الساعة الحالية</h1>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-shadow-lg">{time.toLocaleTimeString("en-US", { hour12: true })}</h1>

            <h2>
                <Clock value={time} size={200} className="my-15 sm:scale-100 md:scale-130 lg:scale-130" />
            </h2>
        </div>
        </motion.div>
        
    );
}