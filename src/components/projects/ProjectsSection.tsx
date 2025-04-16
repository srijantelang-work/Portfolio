"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Projects</h2>
          <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl">
            A showcase of my work, including web applications, mobile apps, and AI integrations.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 