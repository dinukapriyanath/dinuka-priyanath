'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypewriterEffect } from '../components/TypewriterEffect';

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white flex flex-col justify-center items-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-pink-500 mb-4">
          Hi, I'm Dinuka Priyanath
        </h1>

        <TypewriterEffect
          texts={[
            "Full Stack Developer.",
            "Crafting Clean Code.",
            "Building Digital Experiences.",
          ]}
        />

        <p className="mt-6 text-lg text-gray-300">
          I specialize in building high-performance, scalable, and intuitive web applications
          using modern technologies like Next.js, Tailwind CSS, Node.js, and MongoDB.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#projects"
            className="group relative inline-block px-6 py-3 font-semibold rounded-lg overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
          >
            <span className="relative z-10">View My Work</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition-transform transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
