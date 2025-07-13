import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MEDIUM_FEED = "https://medium.com/feed/@rynvarkh";
const MEDIUM_URL = "https://medium.com/@rynvarkh";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    // Use rss2json.com for Medium RSS feed
    const cacheBuster = `?cb=${Date.now()}`;
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        MEDIUM_FEED + cacheBuster
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && data.items && data.items.length > 0) {
          setPosts(data.items.slice(0, 6));
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex items-center bg-gray-950">
      {/* Animated orb background (matching all other sections) */}
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

      <motion.section
        className="w-full max-w-6xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-400 to-fuchsia-600 bg-clip-text text-transparent inline-block">
            Words, Wit, and Hot Takes
          </h2>
          <p className="text-gray-300 dark:text-gray-200 mb-4 text-base md:text-lg max-w-md">
            From unfiltered stories to questionable life advice, my Medium is
            where ideas get spicy and opinions get roasted. Dive in—your brain
            (and funny bone) will thank you.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {loading && (
            <div className="text-gray-400 mb-4">Loading latest posts...</div>
          )}
          {!loading && error && posts.length === 0 && (
            <div className="text-red-400 mb-4">
              Could not load Medium posts.{" "}
              <a href={MEDIUM_URL} className="underline">
                Visit my Medium
              </a>
            </div>
          )}
          {!loading && !error && posts.length === 0 && (
            <div className="text-gray-400 mb-4">
              No posts found.{" "}
              <a href={MEDIUM_URL} className="underline">
                Visit my Medium
              </a>
            </div>
          )}
          {/* Blog cards */}
          {posts.map((post) => (
            <a
              key={post.guid || post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl bg-white/90 dark:bg-gray-800/80 shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:scale-105 w-72 h-72"
            >
              {/* Short Image Banner */}
              <div className="relative h-28 bg-gradient-to-br from-white to-slate-100 dark:from-slate-200 dark:to-slate-400 overflow-hidden rounded-t-2xl">
                {post.thumbnail && (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/30" />
              </div>
              {/* Card Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <p
                  className="text-xs text-gray-600 dark:text-gray-400 mb-4 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <div className="mt-auto flex justify-end">
                  <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-purple-500 via-pink-400 to-fuchsia-600 bg-clip-text text-transparent inline-block cursor-pointer hover:underline transition">
                    Read More &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <a
          href={MEDIUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-black text-white font-semibold shadow hover:scale-105 transition-transform"
        >
          View More
        </a>
      </motion.section>
    </section>
  );
}
