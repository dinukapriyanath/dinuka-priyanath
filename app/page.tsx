'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import ProjectsSlider from '@/components/projects';
import Scene3D from '@/components/Scene3d';
import CTASection from '@/components/CTASection';

const STACK = [
  "TypeScript", "Next.js", "React", "Node.js", "Express",
  "PHP", "MySQL", "Firebase", "MongoDB", "Tailwind CSS",
];

const ABOUT_FACTS = [
  { label: "Based in", value: "Colombo, Sri Lanka" },
  { label: "Focus", value: "Full-Stack Development" },
  { label: "Currently", value: "Software Eng. Undergraduate" },
  { label: "Open to", value: "Internships & freelance work" },
];

const SERVICES = [
  {
    title: "Full-Stack Development",
    desc: "End-to-end web apps — from database schema to the pixels you click on.",
    cmd: "build --stack full",
  },
  {
    title: "Frontend Engineering",
    desc: "Fast, accessible interfaces in React and Next.js with clean, reusable components.",
    cmd: "build --frontend",
  },
  {
    title: "API & Backend",
    desc: "REST APIs, auth, and data modeling that hold up under real usage.",
    cmd: "build --backend",
  },
  {
    title: "UI / UX Design",
    desc: "Interfaces designed to feel obvious — clear hierarchy, no guesswork.",
    cmd: "design --ux",
  },
];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourprofile", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-500 mb-3">
      {children}
    </p>
  );
}

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.fromTo(
        ".hero-bg",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

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
        );

      gsap.fromTo(
        ".hero-de",
        { opacity: 1, scale: 1 },
        {
          opacity: 1,
          scale: 1.5,
          duration: 0.6,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        }
      );
    }, heroRef);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
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
    <main className="">
      {/* 🌌 Full 3D Scene — persistent background */}
      <Scene3D className="fixed inset-0 -z-10 pointer-events-none" />

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden"
      >
        <div className="hero-bg absolute inset-0 opacity-70" />

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-green-500 mb-6 z-10 relative">
          Full-Stack Developer
        </p>

        <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight mb-6 z-10 relative">
          Dinuka Priyanath <span className="hero-de text-green-500">De</span> Silva
        </h1>

        <p className="hero-sub text-lg md:text-xl text-gray-400 max-w-2xl z-10 relative">
          I build elegant full-stack web applications with great design,
          performance, and user experience.
        </p>

        <div className="hero-buttons mt-10 flex items-center gap-6 z-10 relative">
          <a
            href="/projects"
            className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-green-500 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-green-400 font-medium transition"
          >
            Get in touch →
          </a>
          <div className="flex items-center gap-4 pl-4 border-l border-white/15">
            <a href="https://github.com/yourusername" target="_blank" className="text-white/70 hover:text-green-400 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-white/70 hover:text-green-400 transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 font-mono text-[11px] text-white/30 tracking-widest"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll ↓
        </motion.div>
      </section>

      {/* ================= TECH STACK STRIP ================= */}
      <section className="relative border-y border-white/10 bg-white/[0.02] backdrop-blur-sm py-6 overflow-hidden">
        <div className="flex gap-10 whitespace-nowrap animate-[marquee-scroll_28s_linear_infinite] font-mono text-sm text-white/40">
          {[...STACK, ...STACK, ...STACK].map((tech, i) => (
            <span key={i} className="flex items-center gap-10 shrink-0">
              {tech}
              <span className="text-green-500/50">/</span>
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-33.333%); }
          }
        `}</style>
      </section>

      {/* ================= CTA ================= */}
      <CTASection />

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="relative py-28 px-6 md:px-20">
        <Eyebrow>$ ls ./projects</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Selected <span className="text-green-500">Work</span>
        </h2>
        <ProjectsSlider />
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative py-28 px-6 md:px-20 bg-black/40 backdrop-blur-2xl overflow-hidden"
      >
        <div className="max-w-5xl mx-auto">
          <Eyebrow>$ whoami</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="text-green-500">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-12">
            Software Engineering undergraduate with a strong interest in
            full-stack development, system design, and building things that
            actually get used. I care about clean interfaces as much as
            clean code — and I like shipping over perfecting.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden">
            {ABOUT_FACTS.map((f) => (
              <div key={f.label} className="bg-black p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-green-500/70 mb-2">
                  {f.label}
                </p>
                <p className="text-white font-medium">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative py-28 px-6 md:px-20 overflow-hidden"
      >
        <Eyebrow>$ cat services.json</Eyebrow>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What I <span className="text-green-500">Do</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/[0.02] p-7 rounded-xl border border-white/10 hover:border-green-500/40 hover:bg-white/[0.04] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs text-green-500/60 mb-4">
                $ {service.cmd}
              </p>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative py-28 px-6 md:px-20 bg-gradient-to-b from-black via-white/[0.03] to-black"
      >
        <div className="max-w-3xl mx-auto">
          <Eyebrow>$ ./contact --send</Eyebrow>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in <span className="text-green-500">Touch</span>
          </motion.h2>
          <p className="text-gray-400 mb-12">
            Have a project or idea? Let&apos;s build something together.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-green-500/70 mb-1">
                  Email
                </p>
                <a
                  href="mailto:youremail@example.com"
                  className="text-white hover:text-green-400 transition"
                >
                  youremail@example.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-green-500/70 mb-1">
                  Location
                </p>
                <p className="text-white">Colombo, Sri Lanka</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-green-500/70 mb-3">
                  Social
                </p>
                <div className="flex gap-4">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      aria-label={label}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-green-400 hover:border-green-500/40 transition"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="space-y-4 bg-white/[0.03] p-6 rounded-2xl border border-white/10"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition"
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-md transition"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="relative py-8 px-6 md:px-20 border-t border-white/10 text-center font-mono text-xs text-white/30">
        © {new Date().getFullYear()} Dinuka.Dev — built with Next.js
      </footer>
    </main>
  );
};

export default Home;