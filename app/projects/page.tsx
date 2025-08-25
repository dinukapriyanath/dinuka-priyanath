// app/projects/page.tsx (Next.js 13+)
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="*:">
   {/* Hero Section */}
<section
  className="relative text-center h-[90vh] flex flex-col justify-center px-8 lg:px-0 text-white overflow-hidden"
  style={{
    // Remove backgroundImage since we'll use a video
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Background Video */}
  <video
    className="absolute inset-0 w-fit h-fit object-cover z-0"
    src="/Green Professional Artificial Intelligence Video.mp4" // Replace with your video file path
    autoPlay
    loop
    muted
    playsInline
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>

  {/* Content */}
  <div className="relative z-20 max-w-3xl mx-0 ml-10 text-left" data-aos="fade-up">
    <p className="uppercase tracking-widest text-gray-300 mb-3" data-aos="fade-down" data-aos-delay="200">
      Innovating with Impact
    </p>
    <h1
      className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
      data-aos="fade-right"
      data-aos-delay="400"
    >
      Balanced by <span className="text-green-400">Creativity</span>
    </h1>
    <p
      className="text-lg text-gray-200 mb-8"
      data-aos="fade-left"
      data-aos-delay="600"
    >
      We craft digital solutions that merge innovation, design, and functionality 
      delivering transformative outcomes for businesses worldwide.
    </p>
    <a href="#projects" data-aos="zoom-in" data-aos-delay="800">
      <button className="px-8 py-4 bg-oshan text-white font-semibold rounded-lg hover:bg-green-500 transition">
        Explore Projects
      </button>
    </a>
  </div>
</section>

{/* Project Showcase Section */}

<section id="projects" className="py-20 px-6 md:px-12 lg:px-20 bg-black text-center">
  <h2
    className="text-4xl font-bold mb-12 text-white"
    data-aos="fade-up"
  >
    Featured Projects
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { img: "/Mobile App UI.jpg", title: "Digital Marketing" },
      { img: "/E-Commerce Website.jpg", title: "UI/UX Design" },
      { img: "/Mobile App UI.jpg", title: "Mobile Apps" },
      { img: "/ARVR Experience.jpg", title: "AR/VR Experience" },
      { img: "/Web Dashboard.jpeg", title: "Web Dashboard" },
      { img: "/Brand Identity.jpeg", title: "Brand Identity" },
      { img: "/AI Solution.jpeg", title: "AI Solution" },
      { img: "/E-Learning Platform.jpeg", title: "E-Learning Platform" },
    ].map((project, i) => (
      <div
        key={i}
        className="relative group overflow-hidden rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-oshan/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="text-white text-lg font-semibold">
            {project.title}
          </span>
        </div>
      </div>
    ))}
  </div>
</section>


    {/* Case Study Section */}
<section className="relative py-24 px-6 md:px-16 bg-oshan text-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side - Video Preview */}
    <div 
      className="relative rounded-xl overflow-hidden shadow-lg" 
      data-aos="fade-right"
    >
      <video
      src="/Green Blue Futuristic Artificial Intelligence Video.mp4" // Replace with your video file path
      poster="/E-Commerce Website.jpg" // Fallback image before play
      controls
      className="w-full h-[400px] object-cover"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>
    </div>

    {/* Right Side - Text */}
    <div data-aos="fade-left">
      <h2 className="text-4xl font-extrabold mb-6">Case Study: Transforming Ideas into Impact</h2>
      <p className="mb-6 text-gray-300 leading-relaxed">
        Explore how we took a client’s vision and turned it into a cutting-edge 
        digital solution. From initial brainstorming to final execution, we crafted 
        a user-focused experience that solved real business challenges.
      </p>

      {/* Key Highlights */}
      <ul className="space-y-3 mb-6">
        <li className="flex items-center gap-3">
          <span className="text-green-400 text-xl">✔</span>
          Innovative UI/UX design principles applied
        </li>
        <li className="flex items-center gap-3">
          <span className="text-green-400 text-xl">✔</span>
          Robust performance & scalable architecture
        </li>
        <li className="flex items-center gap-3">
          <span className="text-green-400 text-xl">✔</span>
          Seamless cross-platform integration
        </li>
      </ul>

      <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-green-500 hover:text-white transition">
        Read Full Case Study
      </button>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-20 text-center px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-5xl font-bold">
          Let’s Build Something Amazing
        </h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">
          Have a project in mind? Let’s collaborate and bring your ideas to
          life.
        </p>
        <a href="/contact">
        <button className="mt-8 px-8 py-4 bg-oshan text-white rounded-md font-semibold hover:bg-green-500 transition">
          Contact Us
        </button>
        </a>
      </section>
    </main>
  );
}
