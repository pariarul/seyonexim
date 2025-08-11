"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Shield, Leaf, Globe, CheckCircle, Download, Eye, Sparkles } from "lucide-react"
import Footer from "./Footer"
import CertificationEnquiry from "../components/CertificationEnquiry"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const certificates = [
  {
    name: "USDA Organic",
    type: "Organic Certification",
    issuer: "USDA National Organic Program",
    validUntil: "March 2025",
    description: "Certified organic production and handling of agricultural products according to USDA standards.",
    icon: Leaf,
    color: "from-green-400 to-green-600",
    image: "/api/placeholder/400/300",
    scope: ["Organic Production", "No Synthetic Pesticides", "Non-GMO", "Sustainable Farming"],
  },
  {
    name: "Fair Trade Certified",
    type: "Ethical Trading",
    issuer: "Fair Trade USA",
    validUntil: "June 2025",
    description: "Ensures fair wages and working conditions for farmers and workers in our supply chain.",
    icon: Globe,
    color: "from-green-400 to-green-600",
    image: "/api/placeholder/400/300",
    scope: ["Fair Wages", "Worker Rights", "Community Development", "Environmental Protection"],
  },
]

const complianceStandards = [
  {
    name: "FDA Registration",
    description: "Registered with US Food and Drug Administration for food facility operations",
    icon: Shield,
  },
  {
    name: "EU Organic Regulation",
    description: "Compliant with European Union organic production and labeling regulations",
    icon: Leaf,
  },
  {
    name: "FSSAI License",
    description: "Licensed by Food Safety and Standards Authority of India",
    icon: CheckCircle,
  },
]

export default function CertificatesPage() {
  const heroRef = useRef(null)
  const certificatesRef = useRef(null)
  const complianceRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certificates-hero-title", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })

      gsap.from(".certificates-hero-subtitle", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3,
      })

      gsap.from(".certificate-card", {
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: certificatesRef.current,
          start: "top 70%",
        },
      })

      gsap.from(".compliance-item", {
        duration: 0.6,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: complianceRef.current,
          start: "top 70%",
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-8"
            style={{ border: "1px solid rgba(107, 114, 128, 0.3)" }}
          >
            <Sparkles size={20} color="green" />
            <span className="text-black font-medium">Quality Certifications & Standards</span>
          </div>

          <h1 className="certificates-hero-title text-5xl md:text-7xl font-playfair font-bold mb-8 text-green-600">
            Quality
            <br />
            <span className="text-black">Certifications</span>
          </h1>

          <p className="certificates-hero-subtitle text-xl md:text-2xl text-black max-w-4xl mx-auto">
            Our commitment to excellence is validated by internationally recognized certifications and compliance
            standards, ensuring the highest quality and safety for our premium spices.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-6">Our Certifications</h2>
            <p className="text-xl text-black">
              Internationally recognized standards that validate our commitment to quality, safety, and sustainability.
            </p>
          </div>

          <div ref={certificatesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.name}
                  className="certificate-card glass card overflow-hidden card-3d float border border-gray-300"
                >
                  <div className="relative">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                    <div
                      className="absolute top-4 left-4 w-14 h-14 rounded-xl flex items-center justify-center shadow-xl pulse-glow"
                      style={{ background: "linear-gradient(135deg, green, black)" }}
                    >
                      <Icon size={28} color="white" />
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="badge badge-primary bg-green-600 text-white">
                        Valid until {cert.validUntil}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-black mb-1">{cert.name}</h3>
                      <p className="text-sm font-medium text-green-600">{cert.type}</p>
                      <p className="text-xs text-black">Issued by {cert.issuer}</p>
                    </div>

                    <p className="text-black mb-4 text-sm">{cert.description}</p>

                    {/* Scope */}
                    <div className="mb-6">
                      <div className="text-xs font-medium text-black mb-2">CERTIFICATION SCOPE</div>
                      <div className="flex flex-wrap gap-1">
                        {cert.scope.map((item) => (
                          <div key={item} className="badge badge-outline border-green-600 text-green-600">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button className="btn bg-green-600 text-white flex-1">
                        <Eye size={16} />
                        View
                      </button>
                      <button className="btn border-green-600 text-green-600 flex-1">
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-6">Compliance Standards</h2>
            <p className="text-xl text-black">
              Additional regulatory compliance and industry standards we maintain for global market access.
            </p>
          </div>

          <div ref={complianceRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceStandards.map((standard) => {
              const Icon = standard.icon
              return (
                <div
                  key={standard.name}
                  className="compliance-item glass card p-6 card-3d border border-gray-300 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black mb-2">{standard.name}</h3>
                      <p className="text-black text-sm">{standard.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

          {/* Contact for Certificates */}
<CertificationEnquiry />
      <Footer />
    </div>
  )
}
