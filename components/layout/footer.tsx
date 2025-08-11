'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 px-4 md:px-20 py-16"
    >
      <div className="max-w-7xl mx-auto rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 p-10 md:p-14 text-white shadow-xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Brand and Description */}
          <div className="max-w-md">
            <h2 className="text-3xl font-semibold mb-2">Dinuka<span className="text-blue-500">.Dev</span></h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Passionate Full Stack Developer crafting seamless, user-centered experiences.
              Specializing in modern UI, animation, and scalable architecture.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-6 font-medium text-sm text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>

          {/* Store Buttons */}
          <div className="flex gap-4">
            <Image src="/google-play-badge.png" alt="Google Play" width={20} height={40} />
            <Image src="/app-store-badge.png" alt="App Store" width={20} height={40} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {year} DinukaDev. All rights reserved.</p>
          <div className="flex gap-5 text-white text-lg">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="https://x.com" target="_blank" className="hover:text-gray-300 transition"><FaXTwitter /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
