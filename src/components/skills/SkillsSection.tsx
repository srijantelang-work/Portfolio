'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit,
  SiDocker, SiAwslambda, SiGithubactions
} from 'react-icons/si'
import { IconType } from 'react-icons'

interface Skill {
  name: string
  icon: IconType
  category: 'frontend' | 'backend' | 'tools'
  color: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: SiReact, category: 'frontend', color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend', color: '#000000' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend', color: '#3178C6' },
  { name: 'Tailwind', icon: SiTailwindcss, category: 'frontend', color: '#06B6D4' },
  { name: 'HTML5', icon: SiHtml5, category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, category: 'frontend', color: '#1572B6' },
  
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'backend', color: '#339933' },
  { name: 'Express', icon: SiExpress, category: 'backend', color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, category: 'backend', color: '#47A248' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'backend', color: '#4169E1' },
  
  // Tools
  { name: 'Git', icon: SiGit, category: 'tools', color: '#F05032' },
  { name: 'Docker', icon: SiDocker, category: 'tools', color: '#2496ED' },
  { name: 'AWS', icon: SiAwslambda, category: 'tools', color: '#FF9900' },
  { name: 'CI/CD', icon: SiGithubactions, category: 'tools', color: '#2088FF' }
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
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Skills</h2>
          <p className="mt-4 text-primary md:text-xl">Technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
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
      </div>
    </section>
  )
} 