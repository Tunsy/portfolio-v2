"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GradientBackground from "@/components/gradient-background"
import ExperienceSection from "@/components/experience-section"
import SkillsTabs from "@/components/skills-tab";
import HeroSection from "@/components/hero-section"
import { useMobile } from "@/hooks/use-mobile"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section" 
import ContactSection from "@/components/contact-section"

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const isMobile = useMobile()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "GraphQL",
    "Node.js",
    "Git",
  ]

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-black text-white">
      <GradientBackground />

      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Skills Section */}
      <SkillsTabs/>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection/>

      {/* Contact Section */}
      <ContactSection/>
    </div>
  )
}
