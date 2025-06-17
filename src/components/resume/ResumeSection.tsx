'use client'

import { motion } from 'framer-motion'
import { DownloadIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react'
import { SkillsSection } from '../skills/SkillsSection'

export function ResumeSection() {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const pdfUrl = '/Srijan%20Telang.pdf'
    window.open(pdfUrl, '_blank')
  }

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Hotfoot AI",
      period: "Jan 2025 - June 2025",
      description: "Worked with the founding team to build intuitive UI and improve UX using user feedback.Integrated AI features into the frontend for personalized travel planning. Took ownership of key frontend modules in a fast-paced startup environment.",
      type: "work"
    },
    {
      title: "Web Developer (Freelance)",
      company: "Jigoplast",
      period: "Oct 2024 - Dec 2024",
      description: "As a freelancer, rebuilt Jigoplast company website using HTML, CSS and JavaScript with a focus on responsive design.",
      type: "freelance"
    },
    {
      title: "BTech in CSE with specialization in Data Science and Artificial Intelligence",
      company: "SRM University Delhi NCR",
      period: "2021 - 2025",
      description: "Specialized in Artificial Intelligence and Machine Learning.",
      type: "education"
    }
  ]

  return (
    <section id="resume" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Resume</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              My professional journey and skills
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </button>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 border-l border-primary/20 pl-8 md:ml-0">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                {experience.type === 'work' || experience.type === 'freelance' ? (
                  <BriefcaseIcon className="h-3 w-3 text-primary" />
                ) : (
                  <GraduationCapIcon className="h-3 w-3 text-primary" />
                )}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-primary">{experience.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{experience.company}</span>
                  <span>•</span>
                  <span>{experience.period}</span>
                </div>
                <p className="mt-2 text-muted-foreground">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <SkillsSection />
      </div>
    </section>
  )
} 