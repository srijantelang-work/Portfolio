"use client"

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import { ProjectsSection } from '@/components/projects/ProjectsSection'
import { ResumeSection } from '@/components/resume/ResumeSection'
import { AnimatedSection } from '@/components/layout/AnimatedSection'
import { Project } from '@/types/project'

interface HomeContentProps {
  projects: Project[]
}

export function HomeContent({ projects }: HomeContentProps) {
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center">
      <Hero onAnimationComplete={() => setShowContent(true)} />
      <AnimatePresence>
        {showContent && (
          <>
            <AnimatedSection id="projects" className="w-full">
              <ProjectsSection projects={projects} />
            </AnimatedSection>
            <AnimatedSection id="resume" className="w-full">
              <ResumeSection />
            </AnimatedSection>
          </>
        )}
      </AnimatePresence>
    </div>
  )
} 