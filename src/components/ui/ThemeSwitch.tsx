"use client"

import { useTheme } from 'next-themes'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input 
          type="checkbox" 
          id="theme-toggle" 
          className="peer sr-only"
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <label 
          htmlFor="theme-toggle" 
          className="block cursor-pointer w-[70px] h-[40px] bg-[#83d8ff] dark:bg-[#749dd6] rounded-[84px] transition-all duration-1000 ease-in-out
            peer-checked:bg-[#749dd6]"
        >
          <span className="block relative z-[1] top-[2px] left-[2px] w-[36px] h-[36px] bg-[#ffcf96] dark:bg-[#ffe5b5] rounded-[50px] shadow-[0_2px_6px_rgba(0,0,0,0.3)] 
            transition-all duration-1000 ease-in-out rotate-[-45deg] transform-gpu
            peer-checked:translate-x-[30px] peer-checked:rotate-0"
          >
            {/* Craters */}
            <span className="absolute top-[14px] left-[8px] w-[3px] h-[3px] bg-[#e8cda5] rounded-full opacity-0 transition-all duration-1000 ease-in-out dark:opacity-100" />
            <span className="absolute top-[22px] left-[18px] w-[5px] h-[5px] bg-[#e8cda5] rounded-full opacity-0 transition-all duration-1000 ease-in-out dark:opacity-100" />
            <span className="absolute top-[8px] left-[20px] w-[6px] h-[6px] bg-[#e8cda5] rounded-full opacity-0 transition-all duration-1000 ease-in-out dark:opacity-100" />
          </span>
          {/* Stars */}
          <span className="absolute top-[8px] left-[28px] z-0 w-[24px] h-[2px] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu
            dark:w-[2px] dark:h-[2px]" />
          <span className="absolute top-[14px] left-[22px] z-[1] w-[24px] h-[2px] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu
            dark:w-[3px] dark:h-[3px] dark:translate-x-[-4px]" />
          <span className="absolute top-[22px] left-[32px] z-0 w-[24px] h-[2px] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu
            dark:w-[2px] dark:h-[2px] dark:translate-x-[-6px]" />
          
          {/* Small stars that appear in dark mode */}
          <span className="absolute top-[13px] left-[9px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] opacity-0 translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu dark:opacity-100 dark:translate-x-0 dark:delay-600" />
          <span className="absolute top-[26px] left-[14px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] opacity-0 translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu dark:opacity-100 dark:translate-x-0 dark:delay-800" />
          <span className="absolute top-[29px] left-[22px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] opacity-0 translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu dark:opacity-100 dark:translate-x-0 dark:delay-1000" />
        </label>
      </div>
    </div>
  )
} 