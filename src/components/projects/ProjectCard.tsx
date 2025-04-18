"use client"

import { motion } from 'framer-motion'
import { Project } from '@/types/project'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
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
      className="group relative cursor-pointer overflow-hidden rounded-lg border border-primary/10 bg-background/30 backdrop-blur-md backdrop-saturate-150 p-6 transition-all hover:border-primary/30 hover:bg-primary/5 shadow-lg hover:shadow-primary/20"
    >
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
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
      <p className="text-muted-foreground">{project.description}</p>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
    </motion.div>
  )
} 