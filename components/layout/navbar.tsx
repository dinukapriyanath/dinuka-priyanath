'use client';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10 shadow-md"
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold tracking-tight">
          Dinuka<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Icons */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white transition-transform hover:scale-110"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="hover:text-white transition-transform hover:scale-110"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu (Coming Soon) */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 px-6 pb-4 pt-2 space-y-3 text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
