// BlogSectionWithoutImage.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlogSectionWithoutImage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@rynvarkh"
    )
      .then((res) => res.json())
      .then((data) => {
        const cleanPosts = data.items.map((item) => {
          const cleanedContent = item.content.replace(/<img[^>]*>/g, "");
          return { ...item, content: cleanedContent };
        });
        setPosts(cleanPosts.slice(0, 3));
      });
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gray-950 text-white">
      {/* Orb Background */}
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
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </motion.div>

      <div className="max-w-5xl w-full px-6 z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-purple-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Words, Wit, and Hot Takes
        </motion.h2>
        <motion.p
          className="mb-12 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From unfiltered stories to questionable life advice, my Medium is
          where ideas get spicy and opinions get roasted. Dive in—your brain
          (and funny bone) will thank you.
        </motion.p>

        {posts.length > 0 && (
          <motion.div
            className="mx-auto bg-[#1a1d25]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              {posts[0].title}
            </h3>
            <div
              className="text-gray-400 text-sm leading-relaxed line-clamp-5"
              dangerouslySetInnerHTML={{ __html: posts[0].content }}
            />
            <a
              href={posts[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold"
            >
              Read More →
            </a>
          </motion.div>
        )}

        <a
          href="https://medium.com/@rynvarkh"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          View All Posts
        </a>
      </div>
    </section>
  );
};

export default BlogSectionWithoutImage;
