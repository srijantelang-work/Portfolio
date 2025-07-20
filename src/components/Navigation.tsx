"use client"

import { useState } from 'react'
import { useThemeHydration } from '@/hooks/useThemeHydration'
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react'

const Navigation = () => {
  const { setTheme, mounted, isDark } = useThemeHydration()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        {/* Desktop Navigation */}
        <button onClick={() => scrollToSection('home')} className="mr-6 flex items-center space-x-2">
          <span className="text-lg font-bold text-primary">Portfolio</span>
        </button>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('resume')}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resume
          </button>
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto mr-4 h-9 w-9 rounded-lg p-2 hover:bg-primary/10 md:hidden"
        >
          {isMenuOpen ? (
            <XIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          className="h-9 w-9 rounded-lg p-2 hover:bg-primary/10"
          aria-label="Toggle theme"
        >
          {mounted && isDark ? (
            <SunIcon className="h-5 w-5 text-primary" />
          ) : (
            <MoonIcon className="h-5 w-5 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-primary/20 bg-background/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('resume')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation 