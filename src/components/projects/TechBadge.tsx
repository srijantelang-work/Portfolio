import { Technology } from '@/types/project'
import { motion } from 'framer-motion'

interface TechBadgeProps {
  tech: Technology
  index: number
}

export function TechBadge({ tech, index }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm"
    >
      {tech.name}
    </motion.span>
  )
} 