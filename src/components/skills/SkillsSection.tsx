'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit,
  SiDocker, SiAwslambda, SiGithubactions, SiPython
} from 'react-icons/si'
import { IconType } from 'react-icons'

interface Skill {
  name: string
  icon: IconType
  color: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
    ]
  },
  {
    name: "Databases",
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    ]
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: SiAwslambda, color: '#FF9900' },
      { name: 'CI/CD', icon: SiGithubactions, color: '#2088FF' },
    ]
  },
  {
    name: "Version Control & Tools",
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ]
  }
]

export function SkillsSection() {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }} 
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Skills</h2>
          <p className="mt-4 text-primary md:text-xl">Technologies I work with</p>
        </motion.div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-primary/80 border-b border-primary/20 pb-2">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="group relative">
                      <div className="hexagon-container">
                        <div 
                          className="hexagon bg-background border border-primary/20 hover:border-primary/50 backdrop-blur-sm"
                          style={{
                            '--hover-color': `${skill.color}20`
                          } as React.CSSProperties}
                        >
                          <div className="hexagon-content flex flex-col items-center justify-center gap-2 p-4">
                            <skill.icon 
                              className="w-8 h-8 text-primary group-hover:text-foreground transition-colors"
                              style={{ color: skill.color }}
                            />
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 