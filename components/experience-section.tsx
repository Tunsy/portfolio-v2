"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ExternalLink, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Define the experience data structure
interface Experience {
  id: string
  company: string
  position: string
  dateRange: string
  location: string
  description: string[]
  technologies: string[]
  website: string
}

const experiences: Experience[] = [
  {
    id: "houzz",
    company: "Houzz",
    position: "Software Engineer - Revenue/Growth",
    dateRange: "Oct 2021 - July 2023",
    location: "Palo Alto, CA",
    description: [
      "Boosted Monthly Recurring Revenue by over $200,000 by leveraging cookie-based tracking to identify pro types (e.g. designers, contractors) and dynamically tailoring page content to their needs, increasing conversion rates",
      "Optimized checkout flow by working with designers and PMs to implement critical features, including building front-end components and back-end integrations for PayPal/Apple Pay and guest checkout",
      "Increased free-trial starts by over 40% and improved customer acquisition through data-driven A/B testing on different layouts and content on high-traffic pages including the landing page (10,000,000+ monthly visits)",
      "Collaborated cross-functionally with the Onboarding team to experiment with various feature configurations and tiered software packages, optimizing pricing and offerings to maximize revenue and improve conversion rates",
      "Led the development of an internal testing tool that automated test account creation, environment setup, and cookie management, reducing QA setup time by hours per week and improving developer efficiencys",
    ],
    technologies: ["React.js", "JavaScript", "TypeScript", "Redux", "Python", "GraphQL", "PHP", "Thrift", "Jest"],
    website: "https://houzz.com/pro",
  },
  {
    id: "ibm",
    company: "IBM",
    position: "Software Engineer - Db2 Modernization",
    dateRange: "May 2019 - Oct 2021",
    location: "San Jose, CA",
    description: [
      "Worked on full‑stack development in React.js, Java, and Spring Boot to modernize various IBM Db2 software used by DBAs and enterprises globally like Walmart and Wells",
      "Collaborated with engineers, designers, and product owners to deliver dashboards, monitoring tools, and database management interfaces that generate millions in revenue",
      "Enhanced QA efficiency by integrating Jenkins, Docker, JUnit, and Jest into our CI pipeline—cutting manual testing time by 10+ hours per week",
      "Mentored multiple cohorts of interns, ramping them to productive developers and full‑time hires",
    ],
    technologies: ["React.js", "JavaScript", "Redux", "Java", "Spring Boot", "JUnit", "Docker", "Jenkins", "Node.js", "Jest"],
    website: "https://www.ibm.com/db2",
  },
  {
    id: "playstation",
    company: "Sony PlayStation",
    position: "Software Engineer - PlayStation Plus",
    dateRange: "Jun 2018 - Dec 2018",
    location: "Aliso Viejo, CA",
    description: [
      "Built Spring Boot REST APIs for PlayStation Plus (Formerly PS Now), handling streaming and server allocation",
      "Wrote scripts to facilitate game distribution and streaming across thousands of servers",
      "Ported legacy monolithic services into standalone microservices",
      "Ensured production‑grade quality with comprehensive JUnit test coverage",
    ],
    technologies: ["Java", "Spring Boot", "Python", "JUnit", "Jest"],
    website: "https://www.playstation.com/en-us/ps-plus/",
  },
  {
    id: "cox",
    company: "Cox Automotive",
    position: "Software Engineer Intern - Kelley Blue Book",
    dateRange: "Jun 2017 - Dec 2017",
    location: "Irvine, CA",
    description: [
      "Learned how to write high quality, industry level code and used C# and Microsoft SQL to create and optimize various services and stored procedures for ads services team.",
      "Upgraded and optimized a program that downloads phone leads data to the database every day by reducing the runtime from ~3 hours to ~45 minutes, and upgrading the technologies",
      "Ported over APIs to web in preparation for migrating to AWS for improved reliability and scalability",
    ],
    technologies: ["C#", "Python", "MySQL"],
    website: "https://www.kbb.com/",
  },
]

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)

  const activeExperience = experiences.find((exp) => exp.id === activeTab) || experiences[0]

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
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
                  <Link href={activeExperience.website}>
                    <Button variant="outline" 
                            className="
                            mt-6
                            border-white/20 
                            bg-black/30 
                            transition-shadow duration-200
                            hover:shadow-[0_0_8px_rgba(168,85,247,0.7)] 
                            hover:bg-purple-600/20
                            hover:border-purple-400
                            hover:text-purple-400"
                         >
                      Check it out!
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
