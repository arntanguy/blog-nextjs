'use client';

import React from 'react'
import { useTheme } from "next-themes";
import { SunIcon as SunIconOutline, MoonIcon as MoonIconOutline} from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col justify-center ml-3">
      <button
      name="light-switch"
      className="light-switch"
      onClick={() => {
        console.log("clicked");
        if (theme === 'dark') {
          return setTheme('light')
        }
        return setTheme('dark')
      }}
    >
        <SunIconOutline className="hidden dark:block w-6 h-6 text-gray-500 hover:text-gray-800" />
        <MoonIconOutline className="dark:hidden w-6 h-6 text-gray-500 hover:text-gray-200" />
      </button>
      </div>
  )
}
