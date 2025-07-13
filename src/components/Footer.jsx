import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ScrollToTop Button
function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Footer Section
export default function Footer() {
  return (
    <footer className="relative py-14 px-4 overflow-hidden mt-auto text-center text-gray-500 dark:text-gray-400 bg-gray-950">
      {/* Animated orb background */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand section */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent mb-3">
              RynVarkh
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-3 text-base">
              Creating, connecting, and sharing. Gaming, community, and a little
              bit of 🌽.
            </p>
            <div className="flex justify-center md:justify-start gap-2 mt-3">
              <span className="w-7 h-7 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue flex items-center justify-center text-white text-base">
                🎮
              </span>
              <span className="w-7 h-7 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white text-base">
                🌽
              </span>
              <span className="w-7 h-7 rounded-full bg-gradient-to-r from-accent-purple to-accent-pink flex items-center justify-center text-white text-base">
                💫
              </span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h4>
            <nav className="space-y-1">
              <a
                href="#social"
                className="block text-gray-500 dark:text-gray-400 hover:text-accent-pink transition-colors text-base"
              >
                Social Media
              </a>
              <a
                href="#games"
                className="block text-gray-500 dark:text-gray-400 hover:text-accent-pink transition-colors text-base"
              >
                Gaming Content
              </a>
              <a
                href="#corn"
                className="block text-gray-500 dark:text-gray-400 hover:text-accent-pink transition-colors text-base"
              >
                Corn Content
              </a>
              <a
                href="#about"
                className="block text-gray-500 dark:text-gray-400 hover:text-accent-pink transition-colors text-base"
              >
                About Me
              </a>
            </nav> */}
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Get In Touch
            </h4>
            <p className="text-gray-500 dark:text-gray-400 mb-2 text-base">
              For collaborations or questions, <br />
            </p>
            <a
              href="mailto:rynvarkh@gmail.com"
              className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue text-white font-semibold hover:scale-105 transition-transform text-base"
            >
              Connect Now
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-6" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 dark:text-gray-500 mb-1 text-sm">
            &copy; {new Date().getFullYear()} RynVarkh. All rights reserved.
          </div>
          <div className="text-xs text-gray-400 dark:text-gray-600">
            Made with <span className="text-accent-pink">💖</span> &{" "}
            <span className="text-yellow-500">🌽</span>
          </div>
        </motion.div>
      </div>
      {/* ScrollToTop Button */}
      <ScrollToTop />
    </footer>
  );
}
