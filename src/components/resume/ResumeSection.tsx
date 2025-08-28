'use client'

import { motion } from 'framer-motion'
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react'
import styles from '../DownloadButton.module.css'

export function ResumeSection() {
  const handleDownload = () => {
    // Replace with your actual resume PDF URL
    const pdfUrl = '/resume.pdf'
    window.open(pdfUrl, '_blank')
  }

  const experiences = [
    {
      title: "Founding Software Developer",
      company: "Katalyst AI",
      period: "July 2025 - Currently Employed",
      description: "• Leading software development initiatives as a founding team member\n• Contributing to the company's technical vision and product development\n• Building scalable solutions and driving innovation in AI technology",
      type: "work"
    },
    {
      title: "Full-Stack Developer (Upwork)",
      company: "AI-Powered WhatsApp Appointment Booking System",
      period: "July 2025 - August 2025",
      description: "• Developed a conversational appointment booking flow using WhatsApp Business API and Gemini NLP\n• Enabled users to book, reschedule, or cancel appointments through natural language input\n• Handled real-time message processing, fallback flows, and error handling for edge cases",
      type: "freelance"
    },
    {
      title: "Full-Stack Developer",
      company: "Hotfoot AI",
      period: "Jan 2025 - June 2025",
      description: "• Collaborated with the founding team to build intuitive UI and improve UX based on user feedback\n• Integrated AI features into the frontend for personalized travel planning\n• Owned key frontend modules in a fast-paced startup environment",
      type: "work"
    },
    {
      title: "Frontend Developer",
      company: "Jigoplast",
      period: "Sept 2024 - Dec 2024",
      description: "• Rebuilt the company website using HTML and CSS with a focus on responsive design\n• Conducted UI/UX audits and improved SEO and performance\n• Collaborated with stakeholders to align the redesign with brand goals",
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
            className={styles.button}
          >
            <p className={styles.text}>
              Download Resume
            </p>
            <div className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16"> 
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" /> 
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" /> 
              </svg>
            </div>
            <div className={styles['corner-bottom-left']} />
            <div className={styles['corner-bottom-right']} />
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
                <h3 className="text-lg font-bold text-primary">{experience.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-bold">{experience.company}</span>
                  <span>•</span>
                  <span className="font-bold">{experience.period}</span>
                </div>
                <div className="mt-2 text-muted-foreground">
                  {experience.description.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-1 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 