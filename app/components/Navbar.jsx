"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import {motion} from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
            <nav className="text-sm md:text-lg lg:text-xl flex justify-center gap-4 fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 backdrop-blur-md px-6 py-3 rounded-full shadow-lg items-center">
            <Link href="/" className={pathname === "/" ? "bg-gray-300 p-5 rounded-full" : ""}  >الساعة  ⏲️</Link>

            <Link href="/date" className={pathname === "/date" ? "bg-gray-300 p-5 rounded-full" : ""}>التاريخ  📅</Link>

            <Link href="/stopwatch" className={pathname === "/stopwatch" ? "bg-gray-300 p-5 rounded-full" : ""}>ساعة ايقاف ⏱️</Link>

            <Link href="/pomodoro" className={pathname === "/pomodoro" ? "bg-gray-300 p-5 rounded-full" : ""}>بومودورو 🍅</Link>

            <Link href="/glopalTime" className={pathname === "/glopalTime" ? "bg-gray-300 p-5 rounded-full" : ""}>التوقيت العالمي 🌍</Link>
        </nav>
        </motion.div>
        
    );
}