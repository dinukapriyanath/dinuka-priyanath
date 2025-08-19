'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import ProjectsSlider from '@/components/projects';


const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ✨ Background gradient fade-in
      gsap.fromTo(
        ".hero-bg",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      // 🚀 Staggered text + button animations
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1.2 }
      )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ".hero-buttons > *",
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 0.8 },
          "-=0.6"
        )


       gsap.fromTo(
          ".hero-de",
          { opacity: 1, scale: 1 }, // start
          {
            opacity: 1,
            scale: 1.5,              // scale up
            duration: 0.6,
            ease: "power2.out",
            yoyo: true,              // go back to start
            repeat: 1                // only bounce once
          }
        );


    }, heroRef);

    // 🎮 Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // tilt range
      const y = (e.clientY / innerHeight - 0.5) * 30;

      gsap.to(".hero-title", { x: x * 0.6, y: y * 0.6, duration: 0.6 });
      gsap.to(".hero-sub", { x: x * 0.3, y: y * 0.3, duration: 0.6 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);








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
      <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* 🔮 Animated Gradient Background */}
      <div className="hero-bg absolute inset-0 opacity-70" />

      {/* Content */}
      <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight mb-6 z-10 relative">
        Dinuka Priyanath <span className="hero-de text-green-500">De</span> Silva
      </h1>

      <p className="hero-sub text-lg md:text-xl text-gray-200 max-w-2xl z-10 relative">
        I build elegant full-stack web applications with great design,
        performance, and user experience.
      </p>

      <div className="hero-buttons mt-10 flex gap-4 z-10 relative">
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
      </div>
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

  <ProjectsSlider />






   {/* 📩 Contact */}
<section
  id="contact"
  className="relative py-28 px-6 md:px-20 bg-gradient-to-br from-black via-gray-900 to-black text-white"
>
  <motion.h2
    className="text-4xl font-bold mb-4 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Get in Touch
  </motion.h2>
  <p className="text-gray-400 mb-10 text-center">
    Have a project or idea? Let's collaborate and build something amazing 🚀
  </p>

  <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
    {/* Left Side - Contact Info */}
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
        <a
          href="mailto:youremail@example.com"
          className="text-gray-300 hover:text-white transition"
        >
          youremail@example.com
        </a>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">🌍 Location</h3>
        <p className="text-gray-300">Colombo, Sri Lanka</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">🔗 Social</h3>
        <div className="flex space-x-5">
          <a href="#" className="hover:text-blue-400 transition">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" className="hover:text-pink-400 transition">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <i className="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <motion.form
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-4 bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-md"
    >
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-md bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-md bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-md bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      ></textarea>
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-md transition"
      >
        Send Message
      </button>
    </motion.form>
  </div>
</section>



    
    </main>
  );
};

export default Home;
