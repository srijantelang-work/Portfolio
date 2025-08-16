"use client"

import { motion, AnimatePresence } from 'framer-motion'
import styles from './DownloadButton.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import SocialButtons from './SocialButtons'

const bulletPoints = [
  "I'm a 22 y/o <strong>Full-Stack Developer</strong> from Bhopal, India",
  "Crafting intuitive, responsive web and mobile apps and AI agents with a focus on clean design and seamless UX.",
  "Previously interned at <strong>HotFoot AI</strong>, building AI-powered travel planning interfaces.",
  "Worked as a <strong>Frontend Developer</strong> for Jigoplast, rebuilding the company website.",
  "Currently working as a <strong>Software Developer</strong> at <strong>Katalyst AI</strong>, building scalable and efficient AI solutions.",
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
                        className="relative cursor-pointer py-4 px-8 text-center inline-flex justify-center text-base uppercase text-black dark:text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-white focus:outline-offset-4 overflow-hidden"
                      >
                        <span className="relative z-20">View Projects</span>
                        <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-black/20 dark:bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
                        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black dark:border-[#D4EDF9] absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
                        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black dark:border-[#D4EDF9] absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
                        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black dark:border-[#D4EDF9] absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
                        <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-black dark:border-[#D4EDF9] absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
                      </Link>
                      <a
                        href="/Srijan%20Telang.pdf"
                        target="_blank"
                        className={styles.button}
                      >
                        <p className={styles.text}>
                          Download 
                        </p>
                        <div className={styles.svg}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16"> 
                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" /> 
                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" /> 
                          </svg>
                        </div>
                        <div className={styles['corner-bottom-left']} />
                        <div className={styles['corner-bottom-right']} />
                      </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                      className="flex justify-center lg:justify-start mt-8"
                    >
                      <SocialButtons />
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