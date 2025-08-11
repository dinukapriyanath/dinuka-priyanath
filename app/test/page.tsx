// pages/about.tsx
import React from "react";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="hero.mp4" // your video path in public/videos
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-green-500">Us</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            We are passionate creators, driven to deliver excellence through
            innovation, collaboration, and dedication.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Our journey began with a vision to redefine experiences and create
          solutions that inspire. Over the years, we have built a team of
          passionate individuals committed to delivering excellence in every
          project we take on.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          To empower people and businesses through innovative technology,
          creativity, and sustainable practices.
        </p>
      </section>
    </main>
  );
}
