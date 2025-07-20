import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function useThemeHydration() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    theme,
    setTheme,
    mounted,
    isDark: mounted && theme === 'dark'
  }
} 