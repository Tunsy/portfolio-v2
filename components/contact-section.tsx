"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactSection() {
    return (
        <section id="contact"className="relative py-24 px-4 sm:px-6 lg:px-8">
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

                <div className="relative rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl
    +                  pointer-events-none z-0"></div>
                    {/* <form className="space-y-6">
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
                    </form> */}

                        <div className="mb-8 pt-8 border-white/10">
                            <div className="flex flex-col justify-center items-center gap-8">
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                                <a href="mailto:jonthnngyn@gmail.com" className="text-gray-300 hover:text-white">
                                jonthnngyn@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-8">
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
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
