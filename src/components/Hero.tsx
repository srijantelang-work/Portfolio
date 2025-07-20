"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, TwitterIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const bulletPoints = [
  "I'm a 22 y/o <strong>Full-Stack Developer</strong> from Bhopal, India",
  "Crafting intuitive, responsive web and mobile apps with a focus on clean design and seamless UX.",
  "Experienced in React, Next.js, and Tailwind CSS.",
  "Previously interned at <strong>HotFoot AI</strong>, building AI-powered travel planning interfaces.",
  "Worked as a <strong>Frontend Developer</strong> for Jigoplast, rebuilding the company website.",
  "Currently working on <strong>Callivate</strong>, it is an AI-powered platform that delivers personalized motivational calls to boost daily goal adherence and track user progress.",
  "Passionate about merging app and web development to create future-forward digital experiences.",
  ]

interface HeroProps {
  onAnimationComplete: () => void
}

export default function Hero({ onAnimationComplete }: HeroProps) {
  const [showContent, setShowContent] = useState(false)
  const name = "Srijan Telang"
  const nameArray = name.split("")

  useEffect(() => {
    // Delay showing the rest of the content
    const timer = setTimeout(() => {
      setShowContent(true)
      onAnimationComplete()
    }, 300) // Reduced from 500ms for snappier response

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Profile Picture - Moved before content and removed AnimatePresence */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative w-64 h-80 lg:w-80 lg:h-96">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-primary/50 blur-2xl opacity-20 animate-pulse" />
                  <div className="relative w-full h-full rounded-2xl border-2 border-primary/20 overflow-hidden">
                    <Image
                      src="/profile.jpeg"
                      alt="Profile picture"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      priority
                  loading="eager"
                    />
                  </div>
                </div>
              </motion.div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 flex flex-wrap justify-center lg:justify-start items-center gap-2">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Hi, I&apos;m{' '}
                </motion.span>
                <span className="text-primary inline-flex">
                  {nameArray.map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05, // Reduced from 0.1 to 0.05
                        ease: [0.6, -0.05, 0.01, 0.99]
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <AnimatePresence mode="wait">
                {showContent && (
                  <>
                    {/* Bullet Points */}
                    <motion.ul className="space-y-3 text-muted-foreground mb-8 text-left max-w-2xl mx-auto lg:mx-0">
                      {bulletPoints.map((point, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }} // Reduced delay from 2 to 0.3
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"/>
                          <span 
                            className="text-lg" 
                            dangerouslySetInnerHTML={{ __html: point }}
                          />
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }} // Reduced delay from 2.4 to 0.5
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                      <Link
                        href="#projects"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        View Projects
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href="/Srijan%20Telang.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        Download Resume
                        <Download className="w-4 h-4" />
                      </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }} // Reduced delay from 2.6 to 0.6
                      className="flex gap-4 justify-center lg:justify-start mt-8"
                    >
                      <a
                        href="https://github.com/Srijan272002"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/srijan-telang-902088282/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://x.com/jodhumein"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <TwitterIcon className="w-5 h-5" />
                      </a>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}