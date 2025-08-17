'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import { LogoLink } from './LogoLink'
import { HeaderActions } from './HeaderActions'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'
import { Separator } from '@/components/ui/separator'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          'fixed z-20 w-full flex justify-center transition-all duration-500',
          isHomePage ? 'top-4' : 'top-0',
        )}
      >
        <motion.header
          layout={'size'}
          transition={{ type: 'spring', stiffness: 500, damping: 40 }}
          className={cn(
            'flex items-center h-14 md:h-16 bg-background/90 dark:bg-background/20 backdrop-blur border-border',
            isHomePage
              ? 'rounded-full border w-11/12 md:w-10/12 lg:w-9/12 md:px-4'
              : 'w-full border-b',
          )}
        >
          <div className="container flex justify-between w-full h-full items-center">
            <LogoLink data={data} />
            <div className="flex items-center gap-4">
              <HeaderNav data={data} />
              <Separator orientation="vertical" className="h-4! hidden lg:block" />
              <HeaderActions data={data} />
            </div>
          </div>
        </motion.header>
      </motion.div>
    </AnimatePresence>
  )
}
