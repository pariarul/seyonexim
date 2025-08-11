"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Target, Eye, Users, Award, Globe, Leaf, Shield, Heart, Sparkles } from "lucide-react"
import Footer from "./Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const values = [
  {
    icon: Shield,
    title: "Quality Excellence",
    description: "Uncompromising quality standards with rigorous testing and certification processes.",
  },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    description: "Direct partnerships with organic farms promoting environmental responsibility.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving premium markets worldwide with reliable supply chain excellence.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Building lasting relationships through transparency and exceptional service.",
  },
]

const milestones = [
  { year: "1998", title: "Foundation", description: "Started as a family spice trading business in Kochi" },
  { year: "2005", title: "Export License", description: "Obtained international export certification" },
  { year: "2012", title: "ISO Certification", description: "Achieved ISO 22000 food safety standards" },
  { year: "2018", title: "Organic Line", description: "Launched certified organic spice collection" },
  { year: "2023", title: "Global Expansion", description: "Expanded to 50+ countries with modern facility" },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const visionRef = useRef(null)
  const valuesRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-hero-title", { duration: 1.2, y: 100, opacity: 0, ease: "power3.out" })
      gsap.from(".about-hero-subtitle", { duration: 1, y: 50, opacity: 0, ease: "power2.out", delay: 0.3 })
      gsap.from(".vision-mission-card", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: { trigger: visionRef.current, start: "top 70%" },
      })
      gsap.from(".value-card", {
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: valuesRef.current, start: "top 70%" },
      })
      gsap.from(".timeline-item", {
        duration: 0.8,
        x: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: { trigger: timelineRef.current, start: "top 70%" },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-8"
            style={{ border: "1px solid rgba(107, 114, 128, 0.3)" }}
          >
            <Sparkles size={20} color="green" />
            <span className="text-black font-medium">Our Story Since 1998</span>
          </div>

          <h1 className="about-hero-title text-5xl md:text-7xl font-playfair font-bold mb-8">
            <span className="text-green-600">About</span>
            <br />
            <span className="text-black">SpiceVault</span>
          </h1>

          <p className="about-hero-subtitle text-xl md:text-2xl text-black max-w-4xl mx-auto">
            25+ years of excellence in premium spice trading, connecting India's finest spices with global markets
            through quality, sustainability, and trust.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-6">
        <div ref={visionRef} className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="vision-mission-card glass card p-8 card-3d"
              style={{ border: "1px solid rgba(107, 114, 128, 0.3)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Eye size={32} color="white" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-green-600">Our Vision</h2>
              </div>
              <p className="text-lg text-black mb-6">
                To be the world's most trusted partner for premium Indian spices, setting global standards for quality,
                sustainability, and ethical trading practices.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-black">Global leadership in spice quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-black">Sustainable farming partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-black">Innovation in spice processing</span>
                </div>
              </div>
            </div>

            <div
              className="vision-mission-card glass card p-8 card-3d"
              style={{ border: "1px solid rgba(107, 114, 128, 0.3)" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Target size={32} color="white" />
                </div>
                <h2 className="text-3xl font-playfair font-bold text-green-600">Our Mission</h2>
              </div>
              <p className="text-lg text-black mb-6">
                To deliver exceptional quality spices through sustainable sourcing, rigorous quality control, and
                building lasting partnerships worldwide.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-black">Direct farmer partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-black">Rigorous quality assurance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-black">Customer-centric service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-6">Our Core Values</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              The principles that guide our business and relationships with farmers, customers, and communities.
            </p>
          </div>

          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="value-card glass card p-6 text-center card-3d"
                  style={{ border: "1px solid rgba(107, 114, 128, 0.2)" }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl bg-green-600">
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">{value.title}</h3>
                  <p className="text-black">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-6">Our Journey</h2>
            <p className="text-xl text-black">
              25+ years of growth, innovation, and building trust in the global spice market.
            </p>
          </div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="timeline-item relative flex items-start gap-8">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1 glass card p-6" style={{ border: "1px solid rgba(107, 114, 128, 0.2)" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg font-bold text-green-600">{milestone.year}</span>
                      <div className="h-px bg-green-600 flex-1"></div>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{milestone.title}</h3>
                    <p className="text-black">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-6">Our Impact</h2>
            <p className="text-xl text-black">
              Building relationships and creating value across the global spice supply chain.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass card p-6 text-center card-3d" style={{ border: "1px solid rgba(107, 114, 128, 0.2)" }}>
              <Users size={48} color="green" className="mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
              <div className="text-sm text-black">Farmer Partners</div>
            </div>
            <div className="glass card p-6 text-center card-3d" style={{ border: "1px solid rgba(107, 114, 128, 0.2)" }}>
              <Globe size={48} color="green" className="mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-sm text-black">Countries Served</div>
            </div>
            <div className="glass card p-6 text-center card-3d" style={{ border: "1px solid rgba(107, 114, 128, 0.2)" }}>
              <Award size={48} color="green" className="mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
              <div className="text-sm text-black">Certifications</div>
            </div>
            <div className="glass card p-6 text-center card-3d" style={{ border: "1px solid rgba(107, 114, 128, 0.2)" }}>
              <Shield size={48} color="green" className="mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-1">99.9%</div>
              <div className="text-sm text-black">Quality Rate</div>
            </div>
          </div>
        </div>
      </section>
            {/* Contact for Certificates */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass card p-12 border border-gray-300 bg-white">
            <h2 className="text-3xl font-playfair font-bold text-green-600 mb-4">Need Specific Certifications?</h2>
            <p className="text-xl text-black mb-8">
              We can provide additional certifications or documentation to meet your specific market requirements.
            </p>
            <button className="btn bg-green-600 text-white px-8 py-4 text-lg">Contact Our Quality Team</button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
