"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Copyright } from "lucide-react"

export default function Footer() {
  // Define color constants
  const green = "#065f46" // dark green used in your theme
  const textDark = "#111827" // typical dark text color

  return (
    <footer className="bg-white border-t border-black text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Info */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <div className="relative">
              <img
                src="/logo.png" // public/logo.png path
                alt="Seyon Exim Logo"
                className="w-24 h-12 object-contain"
              />
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                style={{ backgroundColor: green }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: green }}>
                Seyon Exim
              </h1>
              <p className="text-sm" style={{ color: textDark }}>
                Export Your Dreams, Import Your Success
              </p>
            </div>
          </div>

          <p className="mb-4 text-gray-800">
            Premium export-quality spices from India’s finest plantations.  
            Sustainably sourced, ISO certified, trusted worldwide.
          </p>

          <div className="flex gap-4">
            {[{ Icon: Facebook, href: "#" }, { Icon: Instagram, href: "#" }, { Icon: Linkedin, href: "#" }].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 border border-black rounded-lg hover:bg-green-600 hover:text-white transition"
                aria-label={`Visit our ${Icon.displayName || "social"} page`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold text-green-700 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {["Home", "About Us", "Products", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-green-700 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold text-green-700 mb-4">Contact</h4>
          <ul className="space-y-4 text-gray-800">
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-green-700 flex-shrink-0" />
              <a href="mailto:hello@spicevault.com" className="hover:underline">support@seyonexim.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-green-700 flex-shrink-0" />
              <a href="tel:+919876543210" className="hover:underline">+91 9363586810</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={20} className="text-green-700 flex-shrink-0" />
              1/15A Markampatti Road Veriyapur, Oddanchatram , Dindigul , Tamil nadu - 624619
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-4 text-center text-sm flex items-center justify-center gap-2"
        style={{ backgroundColor: "#00A86B", color: "#FFFFFF" }} // emerald green bg, white text
      >
        <Copyright size={16} />
        <span>{new Date().getFullYear()} SpiceVault. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
