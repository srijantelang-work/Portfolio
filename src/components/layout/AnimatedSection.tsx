"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export function AnimatedSection({ children, id, className = '' }: AnimatedSectionProps) {
  return (
    <motion.div 
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
} 