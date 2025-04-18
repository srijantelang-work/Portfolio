'use client'

import { motion } from 'framer-motion'
import { DownloadIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react'

export function ResumeSection() {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const pdfUrl = '/resume.pdf'
    window.open(pdfUrl, '_blank')
  }

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Hotfoot AI",
      period: "2025 - Present",
      description: "Working with the founding team to build intuitive UI and improve UX using user feedback.Integrated AI features into the frontend for personalized travel planning. Took ownership of key frontend modules in a fast-paced startup environment.",
      type: "work"
    },
    {
      title: "Web Developer",
      company: "Jigoplast",
      period: "2024 - 2025",
      description: "Rebuilt the company website using React.js and Tailwind CSS with a focus on responsive design. Conducted UI/UX audits, improved SEO and performance, and aligned the redesign with brand goals through close collaboration with stakeholders.",
      type: "work"
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
                {experience.type === 'work' ? (
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
        <div className="mt-16">
          <h3 className="mb-6 text-2xl font-semibold text-foreground">Skills</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border border-primary/20 p-4">
              <h4 className="mb-2 font-medium text-primary">Frontend</h4>
              <p className="text-sm text-muted-foreground">
                React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 p-4">
              <h4 className="mb-2 font-medium text-primary">Backend</h4>
              <p className="text-sm text-muted-foreground">
                Node.js, Express, MongoDB, PostgreSQL, RESTful APIs
              </p>
            </div>
            <div className="rounded-lg border border-primary/20 p-4">
              <h4 className="mb-2 font-medium text-primary">Tools & Others</h4>
              <p className="text-sm text-muted-foreground">
                Git, Docker, AWS, CI/CD, Agile Methodologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 