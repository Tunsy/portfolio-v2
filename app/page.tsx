"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProjectCard from "@/components/project-card"
import GradientBackground from "@/components/gradient-background"
import ExperienceSection from "@/components/experience-section"
import SkillsTabs from "@/components/skills-tab";
import HeroSection from "@/components/hero-section"
import { useMobile } from "@/hooks/use-mobile"
import AboutSection from "@/components/about-section"

export default function Portfolio() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const isMobile = useMobile()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with cart functionality and payment processing",
      tags: ["React", "Next.js", "Stripe", "Tailwind CSS"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Dashboard UI",
      description: "An analytics dashboard with interactive charts and data visualization",
      tags: ["TypeScript", "D3.js", "Framer Motion", "Tailwind CSS"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
    {
      title: "Social Media App",
      description: "A responsive social platform with real-time messaging and notifications",
      tags: ["React", "Firebase", "Tailwind CSS", "Socket.io"],
      image: "/placeholder.svg?height=600&width=800",
      link: "#",
    },
  ]

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
      <GradientBackground scrollYProgress={backgroundY} />

      {/* Hero Section */}
      <HeroSection/>

      {/* About Section */}
      <AboutSection/>

      {/* Skills Section */}
      <SkillsTabs/>

      {/* Experience Section */}
      <ExperienceSection />





      {/* Projects Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
              Get In Touch
            </span>
          </h2>

          <div className="relative p-8 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 py-6">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white">
                      hello@example.com
                    </a>
                  </div>
                  <div className="flex space-x-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/20 bg-black/30 hover:bg-white/10"
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/20 bg-black/30 hover:bg-white/10"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-white/20 bg-black/30 hover:bg-white/10"
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex items-center text-gray-400 text-sm">
              <Code className="h-4 w-4 mr-1" />
              Built with Next.js & Framer Motion
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
