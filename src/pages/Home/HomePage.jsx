"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeroSection from "./HeroSection"
import StatsSection from "./StatsSection"
import FeaturedSpices from "./FeaturedSpices"
import ContactSection from "./ContactSection"
import Footer from "../Footer"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HomePage() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const spicesRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", { y: 50, opacity: 0, duration: 1 })
      gsap.from(".stat-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: { trigger: statsRef.current, start: "top 80%" },
      })
      gsap.from(".spice-card", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: { trigger: spicesRef.current, start: "top 70%" },
      })
      gsap.from(".form-container", {
        x: 100,
        opacity: 0,
        scrollTrigger: { trigger: formRef.current, start: "top 70%" },
      })
  
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-yellow-100 text-black">
      <div ref={heroRef}><HeroSection /></div>
      <div ref={statsRef}><StatsSection /></div>
      <div ref={spicesRef}><FeaturedSpices /></div>
      <div ref={formRef}><ContactSection /></div>
      <Footer />
    </div>
  )
}
