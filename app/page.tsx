'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';


const Home = () => {
  return (
    <main className="relative text-white overflow-hidden">
      {/* 🔥 Background Video */}

      <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="hero7.mp4" // your video path in public/videos
          autoPlay
          loop
          muted
          playsInline
        ></video>

  

    

      {/* 🎯 Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight mb-6 z-10"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dinuka Priyanath De Silva
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I build elegant full-stack web applications with great design, performance, and user experience.
        </motion.p>

        <motion.div
          className="mt-10 flex gap-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="text-white hover:text-blue-400"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="text-white hover:text-pink-500"
          >
            <FaLinkedin size={28} />
          </a>
        </motion.div>
      </section>






 

      
      

<section
  id="about"
  className="relative py-32 px-6 md:px-20 bg-black/60 backdrop-blur-2xl text-white overflow-hidden"
>
<section
  id="services"
  className="relative mt-24 text-center py-28 px-6 md:px-20 bg-black/90 overflow-hidden"
  style={{
    backgroundImage: 'url("/pexels-silviopelegrin-32298998 (1).jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>

  <div className="relative z-10">
    <p className="text-green-400 uppercase tracking-widest mb-2">Our Services</p>
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      What We <span className="text-green-500">Do</span>
    </h2>
    <p className="text-gray-300 max-w-2xl mx-auto mb-10">
      I deliver beautiful, high-performance web applications. My services span across design systems, full-stack builds, and seamless user experiences.
    </p>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { title: 'Brand Identity', icon: '/file.svg' },
        { title: 'Website Design', icon: '/window.svg' },
        { title: 'UI & UX Design', icon: '/globe.svg' },
        { title: 'Full-Stack Development', icon: '/next.svg' },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="bg-black/70 p-6 rounded-xl border border-gray-700 hover:bg-green-500/20 transition-all duration-300 flex flex-col items-center text-center shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2 text-green-400">{service.title}</h3>
          <p className="text-sm text-gray-300">
            I bring the right blend of creativity and code to bring digital ideas to life.
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>










</section>



      {/* 🛠 Projects */}
      <section id="projects" className="py-28 px-6 md:px-20 bg-black/70 backdrop-blur-lg">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-md border border-white/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
            >
              <h3 className="text-xl font-semibold mb-2">Project {i + 1}</h3>
              <p className="text-gray-300">
                This is a sleek project built with modern tech like Next.js, Tailwind CSS, and Framer Motion.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📩 Contact */}
      <section id="contact" className="py-28 px-6 md:px-20 bg-black/60 backdrop-blur-2xl">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-300 mb-6">
          Have a project or idea? Let's collaborate!
        </p>
        <a
          href="mailto:youremail@example.com"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Send Email
        </a>
      </section>


    
    </main>
  );
};

export default Home;
