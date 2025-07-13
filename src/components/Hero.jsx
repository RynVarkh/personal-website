import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import profileImg from "../../assets/profile.jpg";

export default function Hero() {
  const [hideScrollIndicator, setHideScrollIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideScrollIndicator(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-16 text-center overflow-hidden bg-gray-950">
      {/* Enhanced animated background */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Multiple gradient orbs */}
        <div className="absolute top-[-10%] left-1/2 w-[90vw] h-[90vw] bg-gradient-to-tr from-accent-pink/30 via-accent-blue/20 to-accent-purple/30 rounded-full blur-3xl -translate-x-1/2 animate-pulse" />
        <div
          className="absolute bottom-[-5%] right-1/4 w-[60vw] h-[60vw] bg-gradient-to-br from-accent-purple/25 to-accent-blue/25 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-r from-accent-pink/20 to-accent-blue/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </motion.div>

      {/* Theme toggle */}
      <div className="absolute top-8 right-8 z-20">
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Profile image with enhanced styling */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 bg-gradient-to-r from-accent-pink via-accent-blue to-accent-purple rounded-full p-1 animate-spin"
              style={{ animationDuration: "10s" }}
            />
            <img
              src={profileImg}
              alt="RynVarkh"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Name with enhanced typography */}
        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl font-poppins font-black bg-gradient-to-r from-accent-pink via-accent-blue to-accent-purple bg-clip-text text-transparent mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          RynVarkh
        </motion.h1>

        {/* Subtitle with better styling */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 mb-4 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Creator & Builder
        </motion.p>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Here’s where you can find me across the digital universe — from gaming
          realms to creative corners. No pressure, no hype, just a clear map to
          my social hangouts and content spots. Explore, browse, or just say hi
          if you feel like it.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://youtube.com/@rynvarkh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Watch My Latest Video</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="https://instagram.com/rynvarkh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-accent-pink text-accent-pink font-semibold text-lg hover:bg-accent-pink hover:text-white transition-all duration-300"
          >
            Follow on Instagram
          </a>
        </motion.div>

        {/* Scroll indicator */}
        {!hideScrollIndicator && (
          <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="w-8 h-14 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center items-start bg-gradient-to-b from-white/10 to-gray-300/0 dark:from-gray-800/30 dark:to-gray-900/0 shadow-lg">
              <motion.div
                className="w-2 h-4 bg-accent-pink rounded-full mt-2"
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
