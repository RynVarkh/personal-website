import { motion } from "framer-motion";
import valorantImg from "../assets/games/valorant.jpg";
import chessImg from "../assets/games/chess.png";
import clashroyalImg from "../assets/games/clashroyal.png";
import clashofclansImg from "../assets/games/clashofclans.jpg";

export default function GamesSection() {
  const games = [
    {
      title: "Valorant",
      description: "Tactical shooter with agents.",
      image: valorantImg,
      status: "Active",
      category: "Shooter",
      profileUrl: "https://tracker.gg/valorant/profile/riot/rynvarkh",
    },
    {
      title: "Chess.com",
      description: "Online chess & puzzles.",
      image: chessImg,
      status: "Daily Player",
      category: "Strategy",
      profileUrl: "https://www.chess.com/member/rynvarkh",
    },
    {
      title: "Clash Royale",
      description: "Real-time card battles.",
      image: clashroyalImg,
      status: "Casual",
      category: "Card Strategy",
      profileUrl: "https://royaleapi.com/player/VUP2898QV",
    },
    {
      title: "Clash of Clans",
      description: "Build villages & raid.",
      image: clashofclansImg,
      status: "Clan Leader",
      category: "Base Builder",
      profileUrl:
        "https://pixelcrux.com/Clash_of_Clans/Profile/App?tag=GC9V09PLY",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
            Games I Play
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto">
            From competitive FPS to casual fun - these are the games I enjoy
            playing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              className="group relative overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/80 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Game image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/50" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-pink text-white">
                    {game.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                    {game.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-accent-pink transition-colors">
                  {game.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {game.description}
                </p>

                <div className="flex items-center justify-end">
                  <a
                    href={game.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-pink to-accent-blue text-white text-sm font-semibold hover:scale-105 transition-transform"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://steamcommunity.com/id/rynvarkh/"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-accent-pink to-accent-blue text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
          >
            Connect on Steam
          </a>
        </motion.div>
      </div>
    </section>
  );
}
