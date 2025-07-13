import "./styles/globals.css";
import Hero from "./components/Hero";

import SocialMediaSection from "./components/SocialMediaSection";
import GamesSection from "./components/GamesSection";
import CornSection from "./components/CornSection";

import SocialLinks from "./components/SocialLinks";

import BlogSection from "./components/BlogSection";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-light dark:bg-primary-dark transition-colors duration-300">
      <Hero />
      <SocialMediaSection />
      <GamesSection />
      <CornSection />

      <SocialLinks />
      <BlogSection />
      <About />
      <Footer />
    </div>
  );
}
