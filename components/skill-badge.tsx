"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  delay?: number
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative px-4 py-2 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full">
        <span className="text-sm font-medium">{name}</span>
      </div>
    </motion.div>
  )
}
