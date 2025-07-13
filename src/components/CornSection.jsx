import { motion } from "framer-motion";
import onlyfansImg from "../assets/corn/onlyfans.jpg";
import fanslyImg from "../assets/corn/FANSLY.png";
import phImg from "../assets/corn/ph.jpg";
import xvideosImg from "../assets/corn/xvideos.png";
import xhamsterImg from "../assets/corn/xhamster.png";
import epornerImg from "../assets/corn/eporner.png";
import chaturbateImg from "../assets/corn/chaturbate.webp";

export default function CornSection() {
  const cornProfiles = [
    {
      title: "OnlyFans",
      description: "Exclusive updates and content.",
      image: onlyfansImg,
      category: "Subscription",
      profileUrl: "https://onlyfans.com/rynv.arkh",
      username: "RynVarkh",
    },
    {
      title: "Fansly",
      description: "Creative posts and behind-the-scenes.",
      image: fanslyImg,
      category: "Subscription",
      profileUrl: "https://fansly.com/RynVarkh/",
      username: "RynVarkh",
    },
    {
      title: "Porn Hub",
      description: "Profile for sharing creative works.",
      image: phImg,
      category: "Community",
      profileUrl: "https://www.pornhub.org/users/rynvarkh",
      username: "Porn Hub",
    },
    {
      title: "XVIDEOS",
      description: "Personal gallery and uploads.",
      image: xvideosImg,
      category: "Community",
      profileUrl: "https://www.xvideos.com/profiles/rynvarkh",
      username: "RynVarkh",
    },
    {
      title: "xHamster",
      description: "Art and creative profile.",
      image: xhamsterImg,
      category: "Community",
      profileUrl: "https://xhamster.com/users/rynvarkh",
      username: "RynVarkh",
    },
    {
      title: "EPORNER",
      description: "Showcase of creative projects.",
      image: epornerImg,
      category: "Community",
      profileUrl: "https://www.eporner.com/profile/RynVarkh/",
      username: "RynVarkh",
    },
    {
      title: "Chaturbate",
      description: "Live streams and creative sessions.",
      image: chaturbateImg,
      category: "Live",
      profileUrl: "https://chaturbate.com/rynvarkh/",
      username: "RynVarkh",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gray-950">
      {/* Enhanced animated orb background */}
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

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent inline-block">
            My Spicy Side Hustles
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
            Dive into my NSFW universe—explore where I get a little extra
            creative, connect with fans, and keep things steamy across the web’s
            most notorious playgrounds. Curious? Click and see what you’ve been
            missing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cornProfiles.map((content, index) => (
            <motion.div
              key={content.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              }}
              style={{ transition: "box-shadow 0.3s, transform 0.3s" }}
            >
              {/* Content image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-white to-slate-100 dark:from-slate-200 dark:to-slate-400 overflow-hidden">
                <img
                  src={content.image}
                  alt={content.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white">
                    {content.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-yellow-600 transition-colors">
                  {content.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {content.description}
                </p>
                <div className="mt-auto flex items-center justify-end">
                  <a
                    href={content.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
