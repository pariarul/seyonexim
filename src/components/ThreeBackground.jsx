"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"

export default function ThreeBackground() {
  const mountRef = useRef(null)
  const particlesRef = useRef()
  const cameraRef = useRef()
  const rendererRef = useRef()
  const spiceShapesRef = useRef([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene
    const scene = new THREE.Scene()

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Particles geometry and material
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 2000
    const posArray = new Float32Array(particlesCount * 3)
    const colorArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20
      posArray[i + 1] = (Math.random() - 0.5) * 20
      posArray[i + 2] = (Math.random() - 0.5) * 20

      const gray = 0.3 + Math.random() * 0.4
      colorArray[i] = gray
      colorArray[i + 1] = gray
      colorArray[i + 2] = gray
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    )
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorArray, 3)
    )

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    particlesRef.current = particlesMesh
    scene.add(particlesMesh)

    // Spice shapes
    const spiceShapes = []
    for (let i = 0; i < 20; i++) {
      const geometry =
        Math.random() > 0.5
          ? new THREE.SphereGeometry(0.1, 8, 8)
          : new THREE.BoxGeometry(0.15, 0.15, 0.15)

      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(0.08 + Math.random() * 0.1, 0.8, 0.6),
        transparent: true,
        opacity: 0.3,
      })

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      )

      spiceShapes.push(mesh)
      scene.add(mesh)
    }
    spiceShapesRef.current = spiceShapes

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005
        particlesRef.current.rotation.y += 0.001
      }

      spiceShapesRef.current.forEach((shape, index) => {
        shape.rotation.x += 0.01 + index * 0.001
        shape.rotation.y += 0.01 + index * 0.001
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001
      })

      renderer.render(scene, camera)
    }
    animate()

    // Handle resizing
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // Smooth scroll effect (parallax)
    let scrollTarget = 0
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      scrollTarget = scrollY * 0.0015 // Scroll sensitivity
      gsap.to(camera.position, {
        z: 5 + scrollTarget,
        duration: 0.8,
        ease: "power2.out",
      })
    }
    window.addEventListener("scroll", handleScroll)

    // Mouse movement: disable on touch devices for better mobile experience
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0

    const handleMouseMove = (event) => {
      if (isTouchDevice) return // disable on touch devices

      const mouseX = (event.clientX / window.innerWidth) * 2 - 1
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1
      if (particlesRef.current) {
        gsap.to(particlesRef.current.rotation, {
          x: mouseY * 0.1,
          y: mouseX * 0.1,
          duration: 0.8,
          ease: "power2.out",
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10 opacity-30"
      style={{ pointerEvents: "none" }}
    />
  )
}
