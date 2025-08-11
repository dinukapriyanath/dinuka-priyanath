'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden px-6 md:px-20 py-20">
      {/* 👤 Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/dinuka.jpg"
            alt="Dinuka Priyanath"
            width={300}
            height={300}
            className="rounded-full grayscale hover:grayscale-0 duration-500"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-green-400 uppercase tracking-widest mb-2">About Personal</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I’m <span className="text-green-500">Dinuka Priyanath</span>
          </h1>
          <p className="text-gray-300 max-w-xl">
            I’m a passionate full-stack developer from Sri Lanka. I create smooth, user-centered experiences by combining modern UI design with performant code.
          </p>

          <div className="flex space-x-4 mt-6 text-xl text-white">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </motion.div>
      </section>

      {/* 🧩 Services */}
      <section className="mt-24 text-center">
        <p className="text-green-400 uppercase tracking-widest mb-2">Our Services</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          What We <span className="text-green-500">Do</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          I deliver beautiful, high-performance web applications. My services span across design systems, full-stack builds, and seamless user experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Brand Identity' },
            { title: 'Website Design' },
            { title: 'UI & UX Design' },
            { title: 'Full-Stack Development' },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:bg-green-600/10 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-400">{service.title}</h3>
              <p className="text-sm text-gray-400">
                I bring the right blend of creativity and code to bring digital ideas to life.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 👥 Team (Optional) */}
      <section className="mt-24 text-center">
        <p className="text-green-400 uppercase tracking-widest mb-2">Our Team</p>
        <h2 className="text-4xl font-bold mb-6">
          Meet Expert <span className="text-green-500">Team</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            { name: 'Dinuka Priyanath', role: 'Lead Developer', image: '/dinuka.jpg' },
            { name: 'Jane Doe', role: 'UI Designer', image: '/dinuka.jpg' },
            { name: 'John Smith', role: 'Backend Dev', image: '/dinuka.jpg' },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-[#111] p-6 rounded-lg text-left hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold text-green-400">{member.name}</h4>
              <p className="text-sm text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
