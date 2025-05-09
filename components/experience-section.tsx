"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

// Define the experience data structure
interface Experience {
  id: string
  company: string
  position: string
  dateRange: string
  location: string
  description: string[]
  technologies: string[]
  website?: string
  type: string // Full-time, Contract, etc.
}

// Sample experience data
const experiences: Experience[] = [
  {
    id: "apple",
    company: "Apple",
    position: "Senior Frontend Engineer",
    dateRange: "Jan 2021 - Present",
    location: "Cupertino, CA",
    type: "Full-time",
    description: [
      "Led the development of key features for Apple's internal design system used by over 200 product teams",
      "Architected and implemented a component library that reduced development time by 40%",
      "Collaborated with design and product teams to create intuitive user interfaces",
      "Mentored junior developers and conducted code reviews to maintain high code quality",
      "Optimized application performance resulting in a 30% improvement in load times",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL", "Tailwind CSS", "Jest", "Cypress"],
    website: "https://apple.com",
  },
  {
    id: "google",
    company: "Google",
    position: "Frontend Developer",
    dateRange: "Mar 2018 - Dec 2020",
    location: "Mountain View, CA",
    type: "Full-time",
    description: [
      "Developed responsive web applications for Google Cloud Platform",
      "Built interactive data visualization dashboards using D3.js",
      "Implemented A/B testing framework that increased user engagement by 25%",
      "Contributed to open-source projects and internal tools",
      "Worked in an agile environment with cross-functional teams",
    ],
    technologies: ["Angular", "JavaScript", "D3.js", "Firebase", "Material Design", "RxJS", "Jasmine"],
    website: "https://google.com",
  },
  {
    id: "meta",
    company: "Meta",
    position: "UI Engineer",
    dateRange: "Jun 2016 - Feb 2018",
    location: "Menlo Park, CA",
    type: "Full-time",
    description: [
      "Created responsive and accessible user interfaces for Facebook's ad platform",
      "Developed reusable components and utilities that improved developer productivity",
      "Collaborated with UX researchers to implement user feedback and improve usability",
      "Optimized rendering performance for complex list views and data grids",
      "Participated in hackathons and innovation projects",
    ],
    technologies: ["React", "Redux", "CSS-in-JS", "Flow", "Jest", "Enzyme", "GraphQL"],
    website: "https://meta.com",
  },
  {
    id: "freelance",
    company: "Freelance",
    position: "Frontend Consultant",
    dateRange: "Jan 2015 - May 2016",
    location: "Remote",
    type: "Contract",
    description: [
      "Designed and developed custom websites and web applications for various clients",
      "Created responsive layouts and interactive UI components",
      "Implemented e-commerce solutions and payment integrations",
      "Provided technical consultation and solutions architecture",
      "Managed client relationships and project timelines",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "jQuery", "WordPress", "Shopify", "SASS"],
    website: "",
  },
]

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)

  const activeExperience = experiences.find((exp) => exp.id === activeTab) || experiences[0]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Work Experience
          </span>
        </h2>

        <div className="relative">
          {/* Tab Navigation */}
          <div className="flex overflow-x-auto scrollbar-hide mb-8 pb-2">
            <div className="flex space-x-2 mx-auto">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={cn(
                    "px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300",
                    activeTab === exp.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-black/30 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:bg-white/10",
                  )}
                  aria-selected={activeTab === exp.id}
                  role="tab"
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <div className="relative p-1 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <h3 className="text-2xl font-bold">{activeExperience.position}</h3>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium">
                        {activeExperience.type}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        {activeExperience.dateRange}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        {activeExperience.location}
                      </div>
                      {activeExperience.website && (
                        <a
                          href={activeExperience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 text-gray-400" />
                          Website
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Responsibilities & Achievements</h4>
                    <ul className="space-y-2 text-gray-300">
                      {activeExperience.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeExperience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
