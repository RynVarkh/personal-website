import { motion } from "framer-motion";

// Combined and deduplicated tags
const tags = [
  "#gaming",
  "#contentcreator",
  "#community",
  "#streamer",
  "#valorant",
  "#minecraft",
  "#farming",
  "#recipes",
  "#fun",
  "#live",
  "#creative",
  "#vlogger",
  "#creativity",
  "#video",
  "#music",
  "#art",
  "#inspiration",
  "#collab",
  "#shorts",
  "#reels",
];

// Stats section (add or adjust as needed)
const stats = [
  { label: "Since", value: "2025" },
  { label: "Platforms", value: "28" },
  { label: "Community Members", value: "♾️" },
  { label: "Content Videos", value: "10+" },
];

export default function About() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center bg-gray-950">
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

      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent">
            About RynVarkh
          </h2>
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-accent-pink via-accent-blue to-accent-purple rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 leading-relaxed">
              I’m RynVarkh — a content creator blending gaming, community, and a
              dash of “corn” culture (yes, the kind you might not expect).
              Whether it’s epic Valorant plays, Minecraft adventures, or sharing
              fun facts with a wink, I keep things entertaining and real.
            </p>

            <p className="text-lg md:text-xl text-gray-300 dark:text-gray-300 leading-relaxed">
              My content is a mix of skill, humor, and a little cheeky nod to
              internet slang — all while building a welcoming space for 10K+
              community members. If you’re here for the gameplay and the good
              vibes, you’re in the right place.
            </p>

            <div className="bg-gradient-to-r from-accent-pink/10 to-accent-blue/10 p-6 rounded-2xl border border-accent-pink/20">
              <p className="text-accent-pink font-semibold mb-2">
                🌽 Fun Fact:
              </p>
              <p className="text-gray-300 dark:text-gray-300">
                I once spent six hours researching corn varieties for a single
                video — because sometimes you gotta go deep, no matter the
                topic.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label || stat.value}
                  className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-accent-pink mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-100 dark:text-white">
                What I'm About
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-pink/20 to-accent-blue/20 text-accent-pink font-semibold text-sm border border-accent-pink/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.com/users/1340344377683480708"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Join My Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="https://youtube.com/@rynvarkh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-accent-pink text-accent-pink font-semibold text-lg hover:bg-accent-pink hover:text-white transition-all duration-300"
            >
              Watch Gaming Content
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
