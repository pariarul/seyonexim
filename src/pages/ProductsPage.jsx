"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { X } from "lucide-react"
import {
  Package,
  Filter,
  Award,
  Eye,
  ShoppingCart,
  Mail,
} from "lucide-react"
import Footer from "./Footer"
import jsondata from "../spices.json"
import QualityPromise from "../components/QualityPromise"
import CertificationEnquiry from "../components/CertificationEnquiry"

const allSpices = jsondata
const categories = [
  "All",
  "Aromatic Spices",
  "Seed Spices",
  "Rhizome Spices",
  "Peppercorns",
  "Bark Spices",
]

export default function ProductsPage() {
  const heroRef = useRef(null)
  const productsRef = useRef(null)
  const formRef = useRef(null)

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredSpices, setFilteredSpices] = useState(allSpices)
  const [selectedProduct, setSelectedProduct] = useState(null)
  // State to control product detail modal
  const [detailProduct, setDetailProduct] = useState(null)
  // State to control product detail modal
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  product: selectedProduct,
  phone: "",
  message: ""
});

// useEffect to initialize GSAP
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.from(".products-hero-title", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power3.out",
      })
      gsap.from(".products-hero-subtitle", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power2.out",
        delay: 0.3,
      })
      gsap.from(".filter-controls", {
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
      })
      gsap.from(".product-grid-card", {
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: productsRef.current, start: "top 70%" },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

// Filter spices whenever selectedCategory or allSpices changes
useEffect(() => {
  if (selectedCategory === "All") {
    setFilteredSpices(allSpices);
  } else {
    const filtered = allSpices.filter(spice => spice.category === selectedCategory);
    setFilteredSpices(filtered);
  }
}, [selectedCategory, allSpices]);

// Update formData.product whenever selectedProduct changes
useEffect(() => {
  setFormData(prev => ({ ...prev, product: selectedProduct || "" }));
}, [selectedProduct]);




const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleEnquirySubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.product || !formData.phone || !formData.message) {
    alert("Please fill in all the required fields.");
    return;
  }

  try {
    const response = await fetch("", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
  body: new URLSearchParams(formData).toString(),
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Enquiry sent successfully!");
      setSelectedProduct(null);
      setFormData({
        name: "",
        email: "",
        product: "",
        phone: "",
        message: ""
      });
    } else {
      alert("Failed to send enquiry: " + result.message);
    }
  } catch (error) {
    alert("Error sending enquiry: " + error.message);
  }
};



  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 py-20"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-8 border border-gray-400">
        
            <span className="text-black font-medium">Premium Spice Collection</span>
          </div>

          <h1 className="products-hero-title text-5xl md:text-7xl font-playfair font-bold mb-8 text-green-700">
            <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Premium
            </span>
            <br />
            <span className="text-black">Spices</span>
          </h1>

          <p className="products-hero-subtitle text-xl md:text-2xl text-black max-w-4xl mx-auto">
            Discover our complete range of export-quality spices, sourced directly
            from premium plantations and processed with the highest standards of
            quality and safety.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="filter-controls glass rounded-3xl p-6 border border-gray-300 shadow-md">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`btn rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      selectedCategory === category
                        ? "bg-green-600 text-white shadow-lg"
                        : "border border-green-600 text-green-600 hover:bg-green-100"
                    }`}
                  >
                    <Filter size={16} className="inline-block mr-2" />
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center text-gray-800 font-medium text-sm sm:text-base">
              Showing {filteredSpices.length} of {allSpices.length} premium spices
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div
            ref={productsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredSpices.map((spice) => (
              <div
                key={spice.code}
                className="product-grid-card glass card overflow-hidden border border-gray-300 rounded-lg shadow-sm flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={spice.image || "/placeholder.svg"}
                    alt={spice.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div
                    className="absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    style={{ background: "linear-gradient(135deg, #065f46, #064e3b)" }}
                  >
                    {spice.code}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-green-700">{spice.name}</h3>
                      <p className="text-sm italic text-gray-700">{spice.scientificName}</p>
                    </div>
                    <div className="text-sm text-gray-800 text-right min-w-[80px]">
                      <div className="text-xs font-semibold">Origin</div>
                      <div className="font-medium">{spice.origin}</div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-4 text-sm flex-grow">{spice.description}</p>

                  {spice.price && (
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-green-700">{spice.price}</div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-800 mb-2">CERTIFICATIONS</div>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {spice.certifications?.slice(0, 2).map((cert) => (
                        <span
                          key={cert}
                          className="badge bg-green-600 text-white px-2 py-1 rounded inline-flex items-center gap-1 text-xs"
                        >
                          <Award size={12} />
                          {cert}
                        </span>
                      ))}
                      {spice.certifications?.length > 2 && (
                        <span className="badge border border-gray-400 text-gray-700 px-2 py-1 rounded text-xs">
                          +{spice.certifications.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-800 mb-2">APPLICATIONS</div>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      {spice.applications?.slice(0, 2).map((app) => (
                        <span
                          key={app}
                          className="badge bg-green-600 text-white px-2 py-1 rounded text-xs"
                        >
                          {app}
                        </span>
                      ))}
                      {spice.applications?.length > 2 && (
                        <span className="badge border border-gray-400 text-gray-700 px-2 py-1 rounded text-xs">
                          +{spice.applications.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 justify-center sm:justify-start">
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(spice.name)}
                      className="btn bg-green-600 hover:bg-green-700 text-white flex-1 sm:flex-none sm:px-6 py-2 rounded shadow flex items-center gap-2"
                    >
                      <ShoppingCart size={16} className="inline-block mr-2" />
                      Quote
                    </button>
                    <button
                      type="button"
                      aria-label={`View details of ${spice.name}`}
                      className="btn border border-green-600 text-green-600 hover:bg-green-100 rounded px-4 py-2 shadow"
                      onClick={() => setDetailProduct(spice)}
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredSpices.length === 0 && (
              <div className="text-center py-20 col-span-full">
                <Package size={80} color="green" className="mx-auto mb-6 opacity-50" />
                <h3 className="text-2xl font-semibold text-green-700 mb-3">No spices found</h3>
                <p className="text-gray-900">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enquiry Form Modal */}
{selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    onClick={() => setSelectedProduct(null)} // Close on backdrop click
  >
    <div
      className="bg-white border border-green-200 rounded-xl shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto"
      onClick={(e) => e.stopPropagation()} // Prevent modal close on form click
      ref={formRef}
    >
      <h3 className="text-2xl font-bold text-black mb-6 text-center md:text-left">
        Product Enquiry
      </h3>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleEnquirySubmit}>
         <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="p-3 border border-green-300 rounded-lg w-full"
    value={formData.name}
    onChange={handleInputChange}
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="p-3 border border-green-300 rounded-lg w-full"
    value={formData.email}
    onChange={handleInputChange}
    required
  />
  <input
    type="text"
    name="product"
    value={selectedProduct}
    readOnly
    className="p-3 border border-green-300 rounded-lg w-full bg-gray-200"
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="p-3 border border-green-300 rounded-lg w-full"
    value={formData.phone}
    onChange={handleInputChange}
  />
  <textarea
    name="message"
    placeholder="Your Message"
    className="md:col-span-2 p-3 border border-green-300 rounded-lg w-full"
    rows={4}
    value={formData.message}
    onChange={handleInputChange}
  />
        <div className="md:col-span-2 flex flex-col md:flex-row gap-4 justify-end">
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 flex items-center justify-center gap-2"
          >
            <Mail size={18} /> Send Enquiry
          </button>
          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
            className="px-6 py-3 border border-green-300 rounded-lg hover:bg-green-50 text-black"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}



        {/* Product Details Modal */}

{detailProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    onClick={() => setDetailProduct(null)}
  >
    <div
      className="bg-white border border-green-200 rounded-xl shadow-lg p-6 max-w-4xl w-full max-h-[80vh] overflow-auto
                 flex flex-col md:flex-row gap-6 md:gap-8"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Left side: Images */}
      <div className="flex flex-row md:flex-col gap-4 md:w-1/2 w-full">
        <img
          src={detailProduct.image || "/placeholder.svg"}
          alt={`${detailProduct.name} main`}
          className="w-1/2 md:w-full h-40 md:h-64 object-cover rounded-lg border border-gray-300"
        />
        {detailProduct.image2 && (
          <img
            src={detailProduct.image2}
            alt={`${detailProduct.name} secondary`}
            className="w-1/2 md:w-full h-40 md:h-48 object-cover rounded-lg border border-gray-300"
          />
        )}
      </div>

      {/* Right side: Details */}
      <div className="md:w-1/2 w-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-green-700 border-b-4 border-green-700 pb-1">
            {detailProduct.name}
          </h3>
          <button
            aria-label="Close details"
            onClick={() => setDetailProduct(null)}
            className="text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        <p className="italic text-gray-700 mb-4">{detailProduct.scientificName}</p>

        <p className="mb-4 flex-grow">{detailProduct.description}</p>

        <div className="mb-4">
          <strong>Origin:</strong> {detailProduct.origin}
        </div>

        {detailProduct.price && (
          <div className="mb-4 text-green-700 font-bold text-xl">
            Price: {detailProduct.price}
          </div>
        )}

        {detailProduct.certifications && detailProduct.certifications.length > 0 && (
          <div className="mb-4">
            <strong>Certifications:</strong> {detailProduct.certifications.join(", ")}
          </div>
        )}

        {detailProduct.applications && detailProduct.applications.length > 0 && (
          <div className="mb-4">
            <strong>Applications:</strong> {detailProduct.applications.join(", ")}
          </div>
        )}
      </div>
    </div>
  </div>
)}



      {/* Quality Promise Section and others */}
<QualityPromise />
          {/* Contact for Certificates */}
<CertificationEnquiry />

      {/* Footer */}
      <Footer />
    </div>
  )
}
