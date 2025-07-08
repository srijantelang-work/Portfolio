"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/types/project'
import { GithubIcon, ExternalLinkIcon, FolderIcon } from 'lucide-react'
import { TechBadge } from './TechBadge'
import { useState } from 'react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    // Prioritize live URL, fallback to GitHub URL
    const url = project.liveUrl || project.githubUrl
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={handleClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative cursor-pointer overflow-hidden rounded-lg border border-primary/10 bg-background/30 backdrop-blur-md backdrop-saturate-150 p-6 transition-all hover:border-primary/30 hover:bg-primary/5 shadow-lg hover:shadow-primary/20"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{
              rotateX: isHovered ? 180 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="text-primary"
          >
            <FolderIcon className="h-5 w-5" />
          </motion.div>
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
        </div>
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <GithubIcon className="h-5 w-5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLinkIcon className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4">{project.description}</p>

      {/* Tech Stack */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap gap-2 mt-4 overflow-hidden"
          >
            {project.technologies.map((tech, index) => (
              <TechBadge key={tech.name} tech={tech} index={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
    </motion.div>
  )
} 