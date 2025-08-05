'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import { SearchIcon } from 'lucide-react'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { Separator } from '@/components/ui/separator'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="flex items-center h-16 fixed w-full top-0 bg-background/90 backdrop-blur-md z-20"
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="px-6 flex justify-between w-full h-full items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Logo loading="eager" priority="high" />
            </div>
            <div>
              {data.logoKabinet && typeof data.logoKabinet === 'object' && (
                <Media
                  imgClassName="w-full h-8.5"
                  priority
                  resource={data.logoKabinet}
                  placeholder="empty"
                />
              )}
            </div>
          </Link>
          <HeaderNav data={data} />
        </div>
        <div className="flex items-center gap-2">
          <Link href={'/search'}>
            <Button size={'sm'} className="bg-card mx-3" variant={'surface'}>
              <SearchIcon />
              <span className="hidden lg:inline-flex">Search...</span>
            </Button>
          </Link>
          <Separator orientation="vertical" className="h-4!" />
          <ThemeSelector />
        </div>
      </div>
    </header>
  )
}
