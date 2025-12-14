"use client";
import { motion } from "framer-motion";
import moment from "moment-hijri";

export default function DateClient() {
    moment.locale("en");
    const todayHijri = moment().format("iYYYY/iM/iD"); // السنة/الشهر/اليوم هجري
    const todayGregorian = moment().format("YYYY/M/D"); // ميلادي
    return (
        <div className="text-sm md:text-lg lg:text-xl flex min-h-screen items-center justify-center w-screen flex-col bg-linear-to-r from-blue-300 via-0%0 to-green-300">
            <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-10"> 📅 التاريخ الحالي</h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-shadow-lg my-10">التاريخ الميلادي : {todayGregorian}</h2>
            </motion.div>
            <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            >
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-shadow-lg">التاريخ الهجري : {todayHijri}</h2>
            </motion.h2>
        </div>
    );
}