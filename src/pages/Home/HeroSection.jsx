"use client"
import { useNavigate } from "react-router-dom";
import {  ArrowRight } from "lucide-react"

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-green-600">
      <div className="max-w-6xl mx-auto text-center">
        <div
          className="hero-badge inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 bg-green-800 text-white"
          style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        >
         
          <span className="font-medium">Premium Spice Exporters Since 2025</span>
        </div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-8 text-white">
          <span>Seyon Exim</span>
          <br />
          <span className="text-white">Global Excellence</span>
        </h1>

        <p className="hero-subtitle text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-white">
          Premium export-quality spices from India's finest plantations. ISO certified, sustainably sourced, globally
          trusted.
        </p>

 <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button
        onClick={() => navigate("/products")}
        className="bg-white text-green-700 font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-100 transition"
      >
        Explore Premium Spices
        <ArrowRight size={20} />
      </button>
      <button
        onClick={() => navigate("/about")}
        className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-700 transition"
      >
        Learn More About Us
      </button>
    </div>
      </div>
    </section>
  )
}
