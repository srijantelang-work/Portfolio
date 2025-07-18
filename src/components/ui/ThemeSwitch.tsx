"use client"

import { useTheme } from 'next-themes'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input 
          type="checkbox" 
          id="theme-toggle" 
          className="peer sr-only"
          checked={isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />
        <label 
          htmlFor="theme-toggle" 
          className={`block cursor-pointer w-[70px] h-[40px] rounded-[84px] transition-all duration-1000 ease-in-out ${
            isDark ? 'bg-[#749dd6]' : 'bg-[#83d8ff]'
          }`}
        >
          <span className={`block relative z-[1] top-[2px] left-[2px] w-[36px] h-[36px] rounded-[50px] shadow-[0_2px_6px_rgba(0,0,0,0.3)] 
            transition-all duration-1000 ease-in-out transform-gpu ${
              isDark 
                ? 'bg-[#ffe5b5] translate-x-[30px] rotate-0' 
                : 'bg-[#ffcf96] translate-x-0 rotate-[-45deg]'
            }`}
          >
            {/* Craters - only visible in dark mode */}
            <span className={`absolute top-[14px] left-[8px] w-[3px] h-[3px] bg-[#e8cda5] rounded-full transition-all duration-1000 ease-in-out ${
              isDark ? 'opacity-100' : 'opacity-0'
            }`} />
            <span className={`absolute top-[22px] left-[18px] w-[5px] h-[5px] bg-[#e8cda5] rounded-full transition-all duration-1000 ease-in-out ${
              isDark ? 'opacity-100' : 'opacity-0'
            }`} />
            <span className={`absolute top-[8px] left-[20px] w-[6px] h-[6px] bg-[#e8cda5] rounded-full transition-all duration-1000 ease-in-out ${
              isDark ? 'opacity-100' : 'opacity-0'
            }`} />
          </span>
          
          {/* Sun rays - only visible in light mode */}
          <span className={`absolute top-[8px] left-[28px] z-0 bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu ${
            isDark ? 'w-[2px] h-[2px]' : 'w-[24px] h-[2px]'
          }`} />
          <span className={`absolute top-[14px] left-[22px] z-[1] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu ${
            isDark ? 'w-[3px] h-[3px] translate-x-[-4px]' : 'w-[24px] h-[2px]'
          }`} />
          <span className={`absolute top-[22px] left-[32px] z-0 bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu ${
            isDark ? 'w-[2px] h-[2px] translate-x-[-6px]' : 'w-[24px] h-[2px]'
          }`} />
          
          {/* Small stars - only visible in dark mode */}
          <span className={`absolute top-[13px] left-[9px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu ${
              isDark ? 'opacity-100 translate-x-0 delay-600' : 'opacity-0'
            }`} />
          <span className={`absolute top-[26px] left-[14px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu ${
              isDark ? 'opacity-100 translate-x-0 delay-800' : 'opacity-0'
            }`} />
          <span className={`absolute top-[29px] left-[22px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu ${
              isDark ? 'opacity-100 translate-x-0 delay-1000' : 'opacity-0'
            }`} />
        </label>
      </div>
    </div>
  )
} 