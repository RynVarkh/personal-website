import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

export default function SocialMediaSection() {
  const socialPlatforms = [
    {
      name: "Instagram",
      url: "https://instagram.com/rynvarkh",
      description: "Daily stories & behind-the-scenes",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rynvarkh",
      description: "Thoughts, memes & updates",
    },
    {
      name: "Reddit",
      url: "https://reddit.com/u/rynvarkh",
      description: "Community & gaming",
    },
    {
      name: "Discord",
      url: "https://discord.com/users/1340344377683480708",
      description: "Community & gaming",
    },
    {
      name: "Spotify",
      url: "https://open.spotify.com/user/31lrnla67qdsnertwxcublmghgc4?si=DejSD8rDS3CFbp56EiO8eg",
      description: "Music & playlists",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@rynvarkh",
      description: "Gaming content & vlogs",
    },
    {
      name: "Patreon",
      url: "https://www.patreon.com/RynVarkh",
      description: "Support & exclusive content",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv/rynvvarkh",
      description: "Live streams",
    },
    {
      name: "Kick",
      url: "https://kick.com/rynvarkh",
      description: "Live streams",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@rynvarkh",
      description: "Shorts & highlights",
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/rynvarkh/",
      description: "Boards & inspiration",
    },
    {
      name: "Snapchat",
      url: "https://www.snapchat.com/add/rynvarkh",
      description: "Snaps & moments",
    },
    {
      name: "Threads",
      url: "https://www.threads.net/@rynvarkh",
      description: "Threads & updates",
    },
    {
      name: "9GAG",
      url: "https://9gag.com/u/rynvarkh",
      description: "Memes & fun",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rynvarkh",
      description: "Professional updates",
    },
    {
      name: "Tumblr",
      url: "https://www.tumblr.com/blog/rynvarkh",
      description: "Creative posts",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center bg-gray-950">
      {/* Enhanced animated orb background */}
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

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-pink to-accent-blue bg-clip-text text-transparent">
            Connect With Me
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
            Stay in the loop—find me on your favorite platforms for updates,
            insights, and the occasional surprise. Let’s keep the conversation
            going.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-accent-pink transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <div className="relative p-6 text-center flex flex-col items-center">
                <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center shadow-lg bg-white dark:bg-gray-900">
                  <SocialIcon
                    url={platform.url}
                    bgColor="transparent"
                    fgColor="currentColor"
                    style={{ width: 40, height: 40 }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {platform.name}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {platform.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
