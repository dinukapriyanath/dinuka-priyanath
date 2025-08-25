// app/contact/page.tsx (Next.js 13+ with App Router)

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Contact Hero Section */}
      <section
      className="relative bg-[url('/')] bg-cover bg-center h-[60vh] flex items-center justify-center overflow-hidden"
      >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/Neon Blue and Black Futuristic Welcome Back Background Video.mp4" type="video/mp4" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>

      {/* Content */}
      <div
        className="relative z-20 text-center px-6 max-w-3xl"
        data-aos="fade-up"
      >
        {/* Subtitle */}
        <p
        className="uppercase tracking-[6px] text-gray-300 text-sm md:text-base mb-4"
        data-aos="fade-down"
        data-aos-delay="200"
        >
        Get In Touch
        </p>

        {/* Main Title */}
        <h1
        className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
        data-aos="zoom-in"
        data-aos-delay="400"
        >
        Contact Us
        </h1>

        {/* Breadcrumb */}
        <div
        className="mt-4 text-gray-300 text-sm md:text-base flex justify-center items-center gap-2"
        data-aos="fade-up"
        data-aos-delay="600"
        >
        <a href="/" className="hover:text-green-400 transition">Home</a>
        <span>/</span>
        <span className="text-white">Contact</span>
        </div>

        {/* CTA Scroll Down */}
        <div
        className="mt-10 flex justify-center"
        data-aos="fade-up"
        data-aos-delay="800"
        >
        <a
          href="#contact-form"
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition duration-300"
        >
          ↓
        </a>
        </div>
      </div>
      {/* Close the first section tag here */}
      </section>
      {/* Contact Form & Info */}
      <section className="py-20 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left: Contact Form */}
        <div data-aos="fade-right" className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email Address</label>
              <input
                type="email"
                placeholder="example@youremail.com"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                placeholder="Type your message..."
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-lg font-bold text-white shadow-lg transition"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-gray-400">Or connect:</span>
            <a href="https://wa.me/62824032567" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-2xl">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:example@email.com" className="text-blue-400 hover:text-blue-300 text-2xl">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+62824032567" className="text-gray-300 hover:text-white text-2xl">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-8 flex flex-col justify-between" data-aos="fade-left">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              <span className="font-bold text-green-400">Let’s collaborate!</span> Reach out for projects, partnerships, or just to say hi. We respond within 24 hours.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-xl"><i className="fas fa-phone-alt"></i></span>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">+6282 4032 567</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl"><i className="fas fa-envelope"></i></span>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-400">example@email.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl"><i className="fab fa-whatsapp"></i></span>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-gray-400">082-245-7253</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-yellow-400 text-xl"><i className="fas fa-map-marker-alt"></i></span>
                <div>
                  <h3 className="font-bold">Office</h3>
                  <p className="text-gray-400">2443 Oak Ridge Omaha, QA 45065</p>
                </div>
              </div>
            </div>
          </div>
          {/* Google Map */}
          <div
            className="w-full h-64 rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.1064086425!2d-0.3817834284287896!3d51.52873519792851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b33319b1b7b%3A0xdeb6787e67b77e7!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1701629737332"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-[url('/dinukaa.png')] bg-cover bg-center h-[320px] flex items-center justify-center rounded-2xl shadow-2xl mx-4 md:mx-0 my-12"
        data-aos="zoom-in-up"
      >
        <div className="text-center bg-black/60 p-10 rounded-xl" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            We Are Always Ready To Take A Perfect Shot
          </h2>
          <p className="text-gray-200 mb-6 max-w-xl mx-auto">
            Book your session or project with us today and experience creativity at its best.
          </p>
          <a
            href="#contact-form"
            className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-bold hover:from-green-600 hover:to-blue-600 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center border-t border-gray-800">
      <p className="text-gray-500">
        Copyright © 2025 Vigraph | Powered by Vigraph
      </p>
      </footer>
    </div>
  );
}
