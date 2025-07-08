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
          className="block cursor-pointer w-[90px] h-[50px] bg-[#83d8ff] dark:bg-[#749dd6] rounded-[84px] transition-all duration-1000 ease-in-out
            peer-checked:bg-[#749dd6]"
        >
          <span className="block relative z-[1] top-[3px] left-[3px] w-[44px] h-[44px] bg-[#ffcf96] dark:bg-[#ffe5b5] rounded-[50px] shadow-[0_2px_6px_rgba(0,0,0,0.3)] 
            transition-all duration-1000 ease-in-out rotate-[-45deg] transform-gpu
            peer-checked:translate-x-[40px] peer-checked:rotate-0"
          >
            {/* Craters */}
            <span className="absolute top-[18px] left-[10px] w-[4px] h-[4px] bg-[#e8cda5] rounded-full opacity-0 transition-all duration-1000 ease-in-out dark:opacity-100" />
            <span className="absolute top-[28px] left-[22px] w-[6px] h-[6px] bg-[#e8cda5] rounded-full opacity-0 transition-all duration-1000 ease-in-out dark:opacity-100" />
            <span className="absolute top-[10px] left-[25px] w-[8px] h-[8px] bg-[#e8cda5] rounded-full opacity-0 transition-all duration-1000 ease-in-out dark:opacity-100" />
          </span>
          {/* Stars */}
          <span className="absolute top-[10px] left-[35px] z-0 w-[30px] h-[3px] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu
            dark:w-[2px] dark:h-[2px]" />
          <span className="absolute top-[18px] left-[28px] z-[1] w-[30px] h-[3px] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu
            dark:w-[4px] dark:h-[4px] dark:translate-x-[-5px]" />
          <span className="absolute top-[27px] left-[40px] z-0 w-[30px] h-[3px] bg-white rounded-[50%] transition-all duration-1000 ease-in-out transform-gpu
            dark:w-[2px] dark:h-[2px] dark:translate-x-[-7px]" />
          
          {/* Small stars that appear in dark mode */}
          <span className="absolute top-[16px] left-[11px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] opacity-0 translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu dark:opacity-100 dark:translate-x-0 dark:delay-600" />
          <span className="absolute top-[32px] left-[17px] z-0 w-[3px] h-[3px] bg-white rounded-[50%] opacity-0 translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu dark:opacity-100 dark:translate-x-0 dark:delay-800" />
          <span className="absolute top-[36px] left-[28px] z-0 w-[2px] h-[2px] bg-white rounded-[50%] opacity-0 translate-x-[3px] 
            transition-all duration-1000 ease-in-out transform-gpu dark:opacity-100 dark:translate-x-0 dark:delay-1000" />
        </label>
      </div>
    </div>
  )
} 