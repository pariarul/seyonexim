"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Sparkles, FileText, ShieldCheck, Award, X, ChevronLeft, ChevronRight, Download } from "lucide-react";

import Footer from "../Footer";
import CertificationEnquiry from "../../components/CertificationEnquiry";
import ComplianceStandards from "./ComplianceStandards";
import Jsoncertificates from "../../certificates.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap = { Globe, FileText, ShieldCheck, Award };

export default function CertificatesPage() {
  const heroRef = useRef(null);
  const certificatesRef = useRef(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevCert = () => setCurrentIndex((prev) => (prev === 0 ? Jsoncertificates.length - 1 : prev - 1));
  const nextCert = () => setCurrentIndex((prev) => (prev === Jsoncertificates.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".certificates-hero-title", { duration: 1.2, y: 60, opacity: 0, ease: "power3.out" });
      gsap.from(".certificates-hero-subtitle", { duration: 1, y: 40, opacity: 0, ease: "power2.out", delay: 0.2 });
      gsap.from(".certificate-card", {
        duration: 0.8,
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: certificatesRef.current, start: "top 80%" }
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-white via-green-50 to-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-md rounded-full mb-8 border border-green-200 shadow">
          
            <span className="text-black font-medium">Quality Certifications & Standards</span>
          </div>
          <h1 className="certificates-hero-title text-5xl md:text-7xl font-playfair font-bold mb-8 text-green-600">
            Quality <br /> <span className="text-black">Certifications</span>
          </h1>
          <p className="certificates-hero-subtitle text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our commitment to excellence is validated by internationally recognized certifications and compliance
            standards, ensuring the highest quality and safety for our premium spices.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="px-4 sm:px-6 py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-4">
              Our Certifications
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Internationally recognized standards that validate our commitment to quality, safety, and sustainability.
            </p>
          </div>

          <div ref={certificatesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Jsoncertificates.map((cert, index) => {
              const Icon = iconMap[cert.icon] || Globe;
              return (
                <div
                  key={cert.name}
                  className="certificate-card bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  {/* Thumbnail */}
                  <div className="relative cursor-pointer group">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-3 left-3 w-12 h-12 rounded-xl flex items-center justify-center shadow-xl z-10"
                      style={{ background: "linear-gradient(135deg, #16a34a, #14532d)" }}
                    >
                      <Icon size={24} color="white" />
                    </div>
                    {cert.validUntil !== "Not Applicable" && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="px-3 py-1 text-xs bg-green-600/90 text-white rounded-full shadow">
                          Valid until {cert.validUntil}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-sm font-medium text-green-700">{cert.type}</p>
                    <p className="text-xs text-gray-500 mb-3">Issued by {cert.issuer}</p>
                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">{cert.description}</p>

                    {/* Scope */}
                    <div>
                      <div className="text-xs font-semibold text-gray-800 mb-2">CERTIFICATION SCOPE</div>
                      <div className="flex flex-wrap gap-2">
                        {cert.scope.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 border border-green-600 text-green-600 text-xs rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-col sm:flex-row gap-3 px-5 pb-5">
                    <button
                      onClick={() => openModal(index)}
                      className="w-full sm:flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      View
                    </button>
                    <a
                      href={cert.pdf}
                      download
                      className="w-full sm:flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-center"
                    >
                      Download
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-xl max-w-3xl w-full mx-4">
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <img
              src={Jsoncertificates[currentIndex].image}
              alt={Jsoncertificates[currentIndex].name}
              className="w-full max-h-[70vh] object-contain mb-4"
            />

            {/* Navigation */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={prevCert}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextCert}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Download in modal */}
            <a
              href={Jsoncertificates[currentIndex].pdf}
              download
              className="w-full inline-flex justify-center items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download size={18} className="mr-2" /> Download PDF
            </a>
          </div>
        </div>
      )}

      <ComplianceStandards />
      <CertificationEnquiry />
      <Footer />
    </div>
  );
}
