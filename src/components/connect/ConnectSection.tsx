"use client"

import { motion } from 'framer-motion'
import { Twitter, Linkedin, Mail, ArrowUpRight, Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function ConnectSection() {
  const [copying, setCopying] = useState(false)

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    const email = 'workforsrijan27@gmail.com'
    
    try {
      await navigator.clipboard.writeText(email)
      setCopying(true)
      toast.success('Email copied to clipboard!')
      setTimeout(() => setCopying(false), 2000)
    } catch {
      toast.error('Failed to copy email')
    }
  }

  const socials = [
    {
      name: 'Email',
      icon: Mail,
      href: '#',
      username: 'workforsrijan27@gmail.com',
      color: 'hover:text-red-400',
      onClick: handleCopyEmail,
      showCopyIcon: true
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://x.com/jodhumein',
      username: '@jodhumein',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/srijan-telang-902088282/',
      username: 'Srijan Telang',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">Let&apos;s Connect</h2>
          <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={social.onClick}
              className={`group flex items-center justify-between rounded-lg border border-primary/10 bg-background/30 backdrop-blur-md backdrop-saturate-150 p-6 transition-all hover:border-primary/30 hover:bg-primary/5 ${social.color}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <social.icon className="h-6 w-6" />
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.username}</p>
                </div>
              </div>
              {social.showCopyIcon ? (
                copying ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )
              ) : (
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
} 