'use client'
import React from 'react'

import type { Theme } from './types'

import { useTheme } from '..'
import { themeLocalStorageKey } from './types'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    setTheme((preference as Theme) ?? 'system')
  }, [])

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      <SunIcon className="h-5 w-5 hidden dark:block" />
      <MoonIcon className="h-5 w-5 dark:hidden" />
    </Button>
  )
}
