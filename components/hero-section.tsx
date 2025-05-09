"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  return (
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="block">👋 Hi, I'm</span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text leading-[1.2] pb-1">
            Jonathan Nguyen
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl mb-8 text-gray-300">Software Engineer</h2>
        <p className="text-lg sm:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
          I love building things and solving problems across the entire stack.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200">
            View My Work
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            Contact Me
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="animate-bounce w-6 h-6" />
      </motion.div>
    </section>
  )
}