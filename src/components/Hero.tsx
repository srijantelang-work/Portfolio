"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const bulletPoints = [
  "22 years old, from Bhopal, Madhya Pradesh",
  "Full stack developer with expertise in building responsive, user-friendly web applications",
  "Interning at HotFoot AI, focusing on integrating AI features into intuitive UIs for personalized travel planning",
  "Hands-on experience with React, Next.js, and Tailwind CSS",
  "Enthusiastic about both app and web development, aiming to merge them in projects",
  "Passionate about gaming, exploring new movies and series, and traveling to unique destinations"
]

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
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
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Hi 👋, I&apos;m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                  Srijan Telang
                </span>
              </h1>

              {/* Bullet Points */}
              <motion.ul className="space-y-3 text-muted-foreground mb-8 text-left max-w-2xl mx-auto lg:mx-0">
                {bulletPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"/>
                    <span className="text-lg">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
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
                  href="/resume.pdf"
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
                transition={{ delay: 0.6, duration: 0.5 }}
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}