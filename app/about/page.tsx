"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function AdvancedAboutHero() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 95 },
  ];

  // Fun facts counters
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let projInterval = setInterval(() => {
      setProjects((prev) => (prev < 45 ? prev + 1 : prev));
    }, 50);
    let clientInterval = setInterval(() => {
      setClients((prev) => (prev < 20 ? prev + 1 : prev));
    }, 80);

    return () => {
      clearInterval(projInterval);
      clearInterval(clientInterval);
    };
  }, []);

  return (
    <main>
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Video with Fallback Image */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero01.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-green-900/30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left - Interactive Profile */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative group"
          data-aos="fade-right"
        >
          <div className="p-2 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full shadow-xl">
            <Image
              src="/dinuka.jpg"
              alt="Dinuka Priyanath"
              width={280}
              height={280}
              className="rounded-full border-4 border-black shadow-2xl group-hover:shadow-green-500/50 transition duration-500"
            />
          </div>

          {/* Fun Stats */}
          <div className="flex justify-around mt-6 text-center text-green-400 font-semibold">
            <div>
              <p className="text-3xl">{projects}+</p>
              <p className="text-sm">Projects</p>
            </div>
            <div>
              <p className="text-3xl">{clients}+</p>
              <p className="text-sm">Clients</p>
            </div>
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
          data-aos="fade-left"
        >
          {/* Heading */}
          <p className="text-green-400 uppercase tracking-widest mb-3">
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Dinuka Priyanath
            </span>
          </h1>
          <p className="text-gray-300 max-w-xl mb-6">
            A passionate <span className="text-green-400">Full-Stack Developer</span>{" "}
            from Sri Lanka. I create scalable apps & websites with{" "}
            <span className="text-blue-400">modern design</span> and{" "}
            <span className="text-green-500">cutting-edge performance</span>.
          </p>

          {/* Skills Progress Bars */}
          <div className="mb-6 space-y-3">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-green-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-lg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-6">
            <a href="/projects">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-black rounded-md font-bold hover:opacity-80 transition">
                View My Work
              </button>
            </a>
            <a href="/contact">
              <button className="px-6 py-3 border border-green-500 text-green-400 rounded-md font-bold hover:bg-green-500 hover:text-black transition">
                Contact Me
              </button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-8 text-2xl text-gray-300">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition" title="Facebook" />
            <FaTwitter className="hover:text-cyan-400 cursor-pointer transition" title="Twitter" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" title="Instagram" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer transition" title="LinkedIn" />
          </div>
        </motion.div>
      </div>
    </section>
    
{/* 🧩 Services */}
<section className="mt-24 text-center relative">
  <p className="text-green-400 uppercase tracking-widest mb-2">Our Services</p>
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    What We <span className="text-green-500">Do</span>
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto mb-10">
    I deliver high-performance digital products with stunning UI/UX and scalable code. 
    From strategy to deployment — I make it seamless and impactful.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
    {[
      { title: 'Brand Identity', icon: '🎨' },
      { title: 'Website Design', icon: '💻' },
      { title: 'UI & UX Design', icon: '🖌️' },
      { title: 'Full-Stack Development', icon: '⚡' },
    ].map((service, index) => (
      <motion.div
        key={index}
        className="relative bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 rounded-xl border border-gray-800 
                  hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] 
                  transition-all duration-500 group"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-green-400">{service.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">
          Innovative solutions that merge creativity and code to craft digital experiences.
        </p>
      </motion.div>
    ))}
  </div>
</section>


{/* 👥 Team */}
<section className="mt-28 text-center">
  <p className="text-green-400 uppercase tracking-widest mb-2">Our Team</p>
  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Meet The <span className="text-green-500">Experts</span>
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto mb-12">
    A passionate team of designers & developers dedicated to building futuristic digital products.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      { name: 'Dinuka Priyanath', role: 'Lead Developer', image: '/dinuka.jpg' },
      { name: 'Jane Doe', role: 'UI/UX Designer', image: '/dinuka.jpg' },
      { name: 'John Smith', role: 'Backend Engineer', image: '/dinuka.jpg' },
    ].map((member, index) => (
      <motion.div
        key={index}
        className="group bg-gradient-to-b from-[#111] to-[#0a0a0a] p-8 rounded-xl border border-gray-800 
                  hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(0,255,0,0.2)] transition-all duration-500"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        <div className="relative w-24 h-24 mx-auto mb-6">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="rounded-full object-cover border-2 border-green-400 group-hover:scale-105 transition"
          />
        </div>
        <h4 className="text-xl font-semibold text-green-400">{member.name}</h4>
        <p className="text-sm text-gray-400">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>

    </main>
  );
}
