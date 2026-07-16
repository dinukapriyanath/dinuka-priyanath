'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const BADGES = ["Available for work", "Based in Colombo", "Reply within 24h"];

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slow parallax drift + subtle zoom on the background image as you scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);

  return (
    <section
      ref={ref}
      className="relative h-[640px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imgY, scale: imgScale }}
      >
        <img
          src="/dinuka-cover.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Premium layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-green-500/10 blur-[120px] rounded-full" />

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-white/70 uppercase">
            Open to new projects
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Let&apos;s build something{" "}
          <span className="text-green-500">exceptional</span>
        </motion.h2>

        <motion.p
          className="mt-5 text-lg text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From idea to production — clean code, considered design, and
          interfaces people actually enjoy using.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-8"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="relative z-10">Start a project</span>
            <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" size={14} />
            <span className="absolute inset-0 bg-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-white/40 uppercase tracking-widest">
            {BADGES.map((b, i) => (
              <span key={b} className="flex items-center gap-6">
                {b}
                {i < BADGES.length - 1 && (
                  <span className="hidden sm:inline text-white/15">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}