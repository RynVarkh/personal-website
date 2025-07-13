import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  MediumIcon,
  DiscordIcon,
  TelegramIcon,
} from "./icons";

const iconMap = {
  github: GithubIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  medium: MediumIcon,
  discord: DiscordIcon,
  telegram: TelegramIcon,
};

export default function SocialLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    import("../data/socialLinks.json").then((mod) =>
      setLinks(mod.default || mod)
    );
  }, []);

  return (
    <section id="social" className="">
      {/* Background accent */}
      <div className="">
        <div className="" />
      </div>
      <div className="">
        {/* <span className="inline-block px-4 py-1 mb-2 rounded-full bg-accent-pink/20 text-accent-pink font-semibold text-xs tracking-wide animate-pulse">
          Join the fam!
        </span>
        <h2 className="text-3xl font-bold mb-2 text-center">
          Find me on every platform
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 text-center">
          Exclusive content, Q&As, and behind-the-scenes—connect with me
          everywhere and never miss an update!
        </p> */}
      </div>
      <div className="">
        {/* {links.map((link, i) => {
          const Icon = iconMap[link.icon] || GithubIcon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-5 bg-gradient-to-br from-accent-blue/30 to-accent-pink/20 dark:from-accent-blue/40 dark:to-accent-pink/30 rounded-2xl shadow hover:shadow-xl transition-shadow group border border-gray-100 dark:border-gray-800 hover:border-accent-blue"
              whileHover={{
                scale: 1.09,
                boxShadow: "0 4px 32px 0 rgba(100,100,255,0.14)",
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Icon className="w-10 h-10 mb-2 text-accent-blue group-hover:text-accent-pink transition-colors" />
              <span className="font-semibold text-base mb-1">{link.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                {link.followers ? `${link.followers} followers` : ""}
              </span>
            </motion.a>
          );
        })} */}
      </div>
    </section>
  );
}
