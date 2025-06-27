"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Link from "next/link"
import ProjectCard from "@/components/project-card"

export default function ProjectsSection() {
    const projects = [
        {
            title: "Multimodal Food Journaling",
            description: "A research paper on using ML and NLP to track eating habits presented at HealthMedia 2018",
            tags: ["Java", "Android Studio", "Python", "ML"],
            image: "/images/acm.png",
            link: "https://dl.acm.org/doi/10.1145/3264996.3265000",
        },
        {
            title: "PokeARena",
            description: "An AR experience which augments Pokemon into Pokemon trading cards by using Unity, C#, and Vuforia.",
            tags: ["Unity", "C#", "Vuforia"],
            image: "/images/pokearena.jpeg",
            link: "https://github.com/Tunsy/Poke-ARena",
        },
        {
            title: "StreakBuddy",
            description: "An app to keep up habit streaks with your friends",
            tags: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "Supabase"],
            image: "/images/streakbuddy.png",
            link: "https://streakbuddy.app",
        },
    ];

    return (
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
                <Link href="https://github.com/Tunsy" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    <Github className="mr-2 h-4 w-4" />
                    View More on GitHub
                    </Button>
                </Link>
            </div>
            </motion.div>
        </section>
    );
}