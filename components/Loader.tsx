"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const LINES = [
  "$ init portfolio.config",
  "$ pulling assets... ok",
  "$ compiling experience.tsx",
  "$ mounting <Dinuka.Dev />",
];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  // Typewriter effect, line by line
  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }
    const current = LINES[lineIndex];

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(t);
    }

    const next = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 220);
    return () => clearTimeout(next);
  }, [lineIndex, charIndex]);

  // Exit once typing finishes + a short hold
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [done]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-full max-w-md font-mono text-sm md:text-base">
            {/* window chrome */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="ml-3 text-white/30 text-xs tracking-widest uppercase">
                dinuka.dev
              </span>
            </div>

            <div className="border border-white/10 rounded-lg bg-white/[0.02] p-5 min-h-[168px]">
              {LINES.slice(0, lineIndex).map((line, i) => (
                <div key={i} className="text-green-500/70 leading-relaxed">
                  {line}
                  <span className="text-white/30"> ✓</span>
                </div>
              ))}

              {!done && lineIndex < LINES.length && (
                <div className="text-green-400 leading-relaxed">
                  {LINES[lineIndex].slice(0, charIndex)}
                  <motion.span
                    className="inline-block w-[7px] h-[1em] bg-green-400 ml-[2px] translate-y-[1px]"
                    animate={{ opacity: [1, 1, 0, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      times: [0, 0.5, 0.5, 1],
                    }}
                  />
                </div>
              )}

              <AnimatePresence>
                {done && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 pt-3 border-t border-white/10 text-white text-lg font-semibold tracking-wide"
                  >
                    Welcome<span className="text-green-500">.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* progress dots */}
            <div className="flex gap-1.5 mt-4 justify-center">
              {LINES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i < lineIndex
                      ? "w-6 bg-green-500"
                      : i === lineIndex
                      ? "w-6 bg-green-500/40"
                      : "w-1.5 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
