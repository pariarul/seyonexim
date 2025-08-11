"use client"

import { useState, useRef } from "react"
import { Mail, ShoppingBasket } from "lucide-react"

import jsondata from "../../spices.json"
import CertificationEnquiry from "../../components/CertificationEnquiry"



const allSpices = jsondata

export default function SpiceCatalogue() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const formRef = useRef(null)

  return (
    <div>
      
   
    <section className="py-12 px-4 md:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 font-playfair">
            Our Premium Spice Collection
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mt-4">
            Bringing rich flavor, aroma, and purity to every dish — sourced and processed with utmost care.
          </p>
        </div>

        {/* Products */}
        <div className="grid spice-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allSpices.map((spice) => (
            <div
              key={spice.code}
              className="spice-card border border-green-200 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-white"
            >
              <div className="relative h-56">
                <img
                  src={spice.image2}
                  alt={spice.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-lg text-sm font-bold shadow">
                  {spice.code}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-black">{spice.name}</h3>
                <p className="text-sm text-gray-700">{spice.description}</p>
                <ul className="mt-2 text-xs text-gray-600 list-disc list-inside">
                  {spice.varieties.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedProduct(spice.name)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-all"
                >
                  <ShoppingBasket size={16} /> Enquiry
                </button>
              </div>
            </div>
          ))}
        </div>

{selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    onClick={() => setSelectedProduct(null)} // close on clicking backdrop
  >
    <div
      className="bg-white border border-green-200 rounded-xl shadow-lg p-6 max-w-lg w-full max-h-[90vh] overflow-auto"
      onClick={e => e.stopPropagation()} // prevent modal close on form click
      ref={formRef}
    >
      <h3 className="text-2xl font-bold text-black mb-6 text-center md:text-left">
        Product Enquiry
      </h3>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-green-300 rounded-lg w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-green-300 rounded-lg w-full"
          required
        />
        <input
          type="text"
          value={selectedProduct}
          readOnly
          className="p-3 border border-green-300 rounded-lg w-full bg-gray-200"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-3 border border-green-300 rounded-lg w-full"
        />
        <textarea
          placeholder="Your Message"
          className="md:col-span-2 p-3 border border-green-300 rounded-lg w-full"
          rows={4}
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


      </div>
    </section>
          {/* Contact for Certificates */}
<CertificationEnquiry />
    </div>
  )
}
