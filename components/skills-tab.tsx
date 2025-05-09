"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SkillBadge from "@/components/skill-badge"
import { cn } from "@/lib/utils"

const skillCategories = {
  "Languages": ["JavaScript", "TypeScript", "Python", "Java", "C#", "PHP"],
  "Frameworks & Libraries": ["React.js", "Next.js", "Node.js", "Redux", "Spring Boot", "Thrift", "GraphQL", "Tailwind CSS", "Framer Motion"],
  "DevOps & Tools": ["Git", "Docker", "Jenkins", "Apache Maven", "JUnit", "Jest"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL", "NoSQL"],
};

export default function SkillsTabs() {
    const categories = Object.keys(skillCategories) as (keyof typeof skillCategories)[];
    const [activeTab, setActiveTab] = useState<keyof typeof skillCategories>(categories[0]);

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
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
              My Skills
            </span>
          </h2>
          <div className="flex overflow-x-auto scrollbar-hide mb-8 pb-2 justify-center">
            <div className="flex justify-center flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={cn(
                    "px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300",
                    activeTab === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                      : "bg-black/30 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                  aria-selected={activeTab === category}
                  role="tab"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Animated Tab Content */}
          <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-3"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 mt-6"
            >
              {skillCategories[activeTab].map((skill, index) => (
                <SkillBadge key={skill} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    );
}