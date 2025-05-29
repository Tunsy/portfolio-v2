"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Github, Linkedin} from "lucide-react"
import Link from "next/link"
import ProfileReveal from "./profile-reveal";

export default function AboutSection() {
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
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <ProfileReveal/>

                    <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold mb-4">Software Engineer & Full Stack Developer</h3>
                        <p className="text-gray-300 mb-6">
                            With almost 5 years of experience building modern web applications across companies like PlayStation, IBM, 
                            and Houzz, I love everything from building exceptional UIs, to 
                            solving complex end-to-end challenges.
                        </p>
                        <p className="text-gray-300 mb-8">
                            Take a look at my resume  <a href="/docs/2025swe.pdf" className="text-purple-400 hover:text-purple-200 transition-colors duration-200">here!</a>
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://github.com/Tunsy" target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="
                                    rounded-full
                                    border-white/20 
                                    bg-black/30 
                                    transition-shadow duration-200
                                    hover:shadow-[0_0_8px_rgba(168,85,247,0.7)] 
                                    hover:bg-purple-600/20
                                    hover:border-purple-400
                                    hover:text-purple-400"
                                >
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </Link>
                            <Link href="https://linkedin.com/in/jonthnngyn" target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="
                                    rounded-full
                                    border-white/20 
                                    bg-black/30 
                                    transition-shadow duration-200
                                    hover:shadow-[0_0_8px_rgba(168,85,247,0.7)] 
                                    hover:bg-purple-600/20
                                    hover:border-purple-400
                                    hover:text-purple-400"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
      </section>
    )
}