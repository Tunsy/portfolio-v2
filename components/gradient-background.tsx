"use client"

import { motion, type MotionValue } from "framer-motion"
import ParticleBackground from "./particle-background"

interface GradientBackgroundProps {
  scrollYProgress: MotionValue<number>
}

export default function GradientBackground({ scrollYProgress }: GradientBackgroundProps) {
  return (
    <>
      {/* Fixed background with stars */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(white,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:80px_80px]"></div>
      </div>

      {/* Particle animation */}
      <ParticleBackground />

      {/* Animated gradient blobs */}
      <motion.div
        className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full"
        initial={{
          scale: 1,
          opacity: 0.6,
          filter: "blur(100px)",
          backgroundColor: "rgba(59, 130, 246, 0.2)", // Tailwind's blue-500/20
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.8, 0.6],
          filter: ["blur(80px)", "blur(100px)", "blur(80px)"],
          backgroundColor: [
            "rgba(59, 130, 246, 0.2)",
            "rgba(59, 130, 246, 0.3)",
            "rgba(59, 130, 246, 0.2)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full"
        initial={{
          scale: 1,
          opacity: 0.5,
          filter: "blur(100px)",
          backgroundColor: "rgba(168, 85, 247, 0.2)", // Tailwind's purple-500/20
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
          filter: ["blur(90px)", "blur(110px)", "blur(90px)"],
          backgroundColor: [
            "rgba(168, 85, 247, 0.2)",
            "rgba(168, 85, 247, 0.3)",
            "rgba(168, 85, 247, 0.2)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed bottom-[-10%] left-[20%] w-[30%] h-[30%] rounded-full"
        initial={{
          scale: 1,
          opacity: 0.5,
          filter: "blur(100px)",
          backgroundColor: "rgba(236, 72, 153, 0.2)", // Tailwind's pink-500/20
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.75, 0.5],
          filter: ["blur(80px)", "blur(120px)", "blur(80px)"],
          backgroundColor: [
            "rgba(236, 72, 153, 0.2)",
            "rgba(236, 72, 153, 0.3)",
            "rgba(236, 72, 153, 0.2)",
          ],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
    </>
  )
}
