"use client"

import React from "react"

export default function CertificationEnquiry() {
  const phoneNumber = "8508053419" // Replace with your number in international format
  const message = "Hello, I'm interested in certification details"
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <section className="py-12 px-6 bg-green-50 text-center rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
        Need Specific Certifications?
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        We can arrange additional certifications or provide documentation to match your market’s
        standards. Share your requirements with us — we’ll take care of the rest.
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow hover:bg-green-700 transition"
      >
         Chat with Us on WhatsApp
      </a>
    </section>
  )
}
