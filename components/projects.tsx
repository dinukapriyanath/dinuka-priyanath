"use client";
import Slider from "react-slick";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsSlider() {
  const projects = [
    { title: "Creative Branding", desc: "Full brand identity design", img: "/images/project1.jpg" },
    { title: "E-Commerce Website", desc: "Modern & responsive shop", img: "/images/project2.jpg" },
    { title: "Mobile App UI", desc: "Clean and intuitive design", img: "/images/project3.jpg" },
    { title: "Portfolio Website", desc: "Personal brand showcase", img: "/images/project4.jpg" },
    { title: "Marketing Campaign", desc: "Social media & ads", img: "/images/project5.jpg" },
    { title: "AR/VR Experience", desc: "Immersive product demo", img: "/images/project6.jpg" },
    { title: "Restaurant App", desc: "Online ordering system", img: "/images/project7.jpg" },
  ];

  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true, // ensures one card is centered
    centerPadding: "60px", // space on sides
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCenterIndex(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, centerPadding: "40px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "60px" } },
    ],
  };

  return (
    <section className="relative mt-24 mb-10">
      <p className="text-green-400 uppercase tracking-widest mb-2 text-center">Our Projects</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Recent <span className="text-green-500">Work</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-center">
        A curated selection of projects I’ve worked on, blending design and development expertise.
      </p>

      {/* Fade effect left */}
      <div className="absolute top-0 left-0 w-[50vh] h-full bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10 pointer-events-none" />


      {/* Fade effect right */}
      <div className="absolute top-0 right-0 w-[50vh] h-full bg-gradient-to-l from-black/70 via-black/50 to-transparent z-10 pointer-events-none" />

      <Slider {...settings}>
        {projects.map((project, index) => {
          const isCenter = index === centerIndex || 
                           (centerIndex >= projects.length && index === 0); // loop fix

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="px-3 flex justify-center"
            >
              <div
                className={`relative h-96 rounded-xl overflow-hidden group shadow-lg border border-gray-800 transition-transform duration-500 ${
                  isCenter ? "scale-110" : "scale-90 opacity-80"
                }`}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition duration-300"></div>
                <div className="absolute bottom-5 left-5 text-left">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </Slider>
    </section>
  );
}
