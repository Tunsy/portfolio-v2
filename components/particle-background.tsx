"use client"

import { useRef, useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

interface ParticleBackgroundProps {
  interactive?: boolean
}

export default function ParticleBackground({ interactive = true }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const isMobile = useMobile()

  // Colors that match the site's gradient theme
  const colors = [
    "rgba(59, 130, 246, 0.5)", // blue
    "rgba(139, 92, 246, 0.5)", // purple
    "rgba(236, 72, 153, 0.5)", // pink
    "rgba(255, 255, 255, 0.5)", // white
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return



    // Initialize particles
    const initParticles = () => {
      const particleCount = isMobile ? 50 : 100
      particlesRef.current = []

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.1,
        })
      }
    }

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0
        if (particle.x < 0) particle.x = canvas.width
        if (particle.y > canvas.height) particle.y = 0
        if (particle.y < 0) particle.y = canvas.height

        // Mouse interaction
        if (interactive && isHovering) {
          const dx = particle.x - mousePosition.x
          const dy = particle.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            particle.speedX += dx * force * 0.01
            particle.speedY += dy * force * 0.01

            // Limit speed
            const maxSpeed = 2
            const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY)
            if (speed > maxSpeed) {
              particle.speedX = (particle.speedX / speed) * maxSpeed
              particle.speedY = (particle.speedY / speed) * maxSpeed
            }
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()

        // Connect nearby particles with lines
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j]
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (100 - distance) / 1000
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    initParticles()
    animate()

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    // Touch event handlers for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        setIsHovering(true)
      }
    }

    const handleTouchEnd = () => {
      setIsHovering(false)
    }

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseenter", handleMouseEnter)
      window.addEventListener("mouseleave", handleMouseLeave)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      window.removeEventListener("resize", handleResize)

      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseenter", handleMouseEnter)
        window.removeEventListener("mouseleave", handleMouseLeave)
        window.removeEventListener("touchmove", handleTouchMove)
        window.removeEventListener("touchend", handleTouchEnd)
      }

      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [isMobile, interactive])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />
}
