"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { gsap } from "gsap"
import { Home, Info, Package, Award, Menu, X, Mail, Phone, MapPin, Globe } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home, description: "Premium spices showcase" },
  { name: "About", href: "/about", icon: Info, description: "Our story & mission" },
  { name: "Products", href: "/products", icon: Package, description: "Spices collection" },
  { name: "Certificates", href: "/certificates", icon: Award, description: "Quality standards" },
]

export default function Sidebar() {
  // Initialize open on desktop, closed on mobile
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024
    }
    return false
  })

  const location = useLocation()
  const green = "#00A86B"
  const white = "#FFFFFF"
  const textDark = "#1A1A1A"

  // GSAP toggle animation
  const toggleSidebar = () => {
    setIsOpen(prev => {
      const newState = !prev
      if (newState) {
        gsap.to(".mobile-sidebar", { x: 0, duration: 0.5, ease: "power3.out" })
        gsap.to(".sidebar-overlay", { opacity: 1, duration: 0.3, pointerEvents: "auto" })
      } else {
        gsap.to(".mobile-sidebar", { x: "-100%", duration: 0.5, ease: "power3.in" })
        gsap.to(".sidebar-overlay", { opacity: 0, duration: 0.3, pointerEvents: "none" })
      }
      return newState
    })
  }

  // Keep sidebar state synced with window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
        gsap.set(".mobile-sidebar", { x: 0 })
        gsap.set(".sidebar-overlay", { opacity: 0, pointerEvents: "none" })
      } else {
        setIsOpen(false)
        gsap.set(".mobile-sidebar", { x: "-100%" })
        gsap.set(".sidebar-overlay", { opacity: 0, pointerEvents: "none" })
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize() // run once on mount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-xl"
        style={{ background: white, border: `1px solid ${green}` }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={20} color={green} /> : <Menu size={20} color={green} />}
      </button>

      {/* Logo (shown only when menu closed on mobile) */}
      {!isOpen && (
        <div
          className="fixed top-6 right-6 z-50 p-3 rounded-xl lg:hidden"
          style={{ background: white, border: `1px solid ${green}` }}
        >
          <Link to="/">
            <img src="/logo.png" alt="SpiceVault Logo" className="w-15 h-7 object-contain cursor-pointer" />
          </Link>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside
        className="hidden lg:flex lg:flex-col lg:w-80 lg:fixed lg:inset-y-0 z-40"
        style={{ background: white, borderRight: `1px solid ${green}` }}
      >
        <div className="flex flex-col flex-1 min-h-0 p-6">
          {/* Logo */}
          <div className="sidebar-logo mb-8 flex items-center gap-4">
            <Link to="/">
              <img src="/logo.png" alt="Seyon Exim Logo" className="w-20 h-10 object-contain" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: green }}>Seyon Exim</h1>
              <p className="text-sm" style={{ color: textDark }}>Export Your Dreams, Import Your Success</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-3">
            {navigation.map(item => {
              const isActive = location.pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="sidebar-item group relative flex items-center px-4 py-4 text-sm font-medium rounded-2xl transition-all duration-300"
                  style={{
                    color: isActive ? green : textDark,
                    background: isActive ? "rgba(0, 168, 107, 0.1)" : "transparent",
                    border: `1px solid ${isActive ? green : "transparent"}`,
                  }}
                >
                  <div
                    className="p-2 rounded-xl mr-4"
                    style={{ background: isActive ? green : white, border: `1px solid ${green}` }}
                  >
                    <Icon size={20} color={isActive ? white : green} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div style={{ color: isActive ? green : textDark, fontSize: "0.75rem" }}>
                      {item.description}
                    </div>
                  </div>
                  {isActive && <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: green }}></div>}
                </Link>
              )
            })}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 p-4 rounded-2xl" style={{ background: white, border: `1px solid ${green}`, color: textDark }}>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail size={16} color={green} className="mr-3" />
                <span className="truncate">support@seyonexim.com</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone size={16} color={green} className="mr-3" />
                <span>+91 8508053419 , +91 9363586810 </span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin size={36} color={green} className="mr-3" />
                <span>1/15A Markampatti Road Veriyapur, Oddanchatram , Dindigul , Tamilnadu , PIN 624619</span>
              </div>
              <div className="flex items-center text-sm">
                <Globe size={16} color={green} className="mr-3" />
                <span>5+ Countries</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay (only when open) */}
      {isOpen && (
        <div
          className="sidebar-overlay lg:hidden fixed inset-0 z-30"
          style={{ background: "rgba(0,0,0,0.5)" }}
          onClick={toggleSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className="mobile-sidebar lg:hidden fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-green-200 transform -translate-x-full"
        style={{ background: white, borderRight: `1px solid ${green}` }}
      >
        <div className="flex flex-col flex-1 min-h-0 p-6 pt-20">
          {/* Logo & Title */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <Link to="/" onClick={toggleSidebar}>
              <img src="/logo.png" alt="SpiceVault Logo" className="w-32 h-10 object-contain cursor-pointer" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: green }}>Seyon Exim</h1>
              <p className="text-sm" style={{ color: textDark }}>Export Your Dreams, Import Your Success</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigation.map(item => {
              const isActive = location.pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={toggleSidebar}
                  className="group relative flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300"
                  style={{
                    color: isActive ? green : textDark,
                    background: isActive ? "rgba(0, 168, 107, 0.1)" : "transparent",
                    border: `1px solid ${isActive ? green : "transparent"}`,
                  }}
                >
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ background: isActive ? green : white, border: `1px solid ${green}` }}
                  >
                    <Icon size={16} color={isActive ? white : green} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div style={{ fontSize: "0.75rem", color: isActive ? green : textDark }}>
                      {item.description}
                    </div>
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Contact Info */}
          <div className="mt-6 p-4 rounded-xl" style={{ background: white, border: `1px solid ${green}`, color: textDark }}>
            <div className="space-y-2">
              <div className="flex items-center text-xs">
                <Mail size={12} color={green} className="mr-2" />
                <span className="truncate">support@seyonexim.com</span>
              </div>
              <div className="flex items-center text-xs">
                <Phone size={12} color={green} className="mr-2" />
                <span>+91 8508053419 ,+91 9363586810 </span>
              </div>
              <div className="flex items-center text-xs">
                <MapPin size={22} color={green} className="mr-2" />
                <span>1/15A Markampatti Road Veriyapur, Oddanchatram , Dindigul , TamilNadu , PIN 624619</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
