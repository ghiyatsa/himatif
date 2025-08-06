'use client'
import React from 'react'

import type { Header } from '@/payload-types'

import { HeaderNav } from './Nav'
import { LogoLink } from './LogoLink'
import { HeaderActions } from './HeaderActions'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="flex items-center h-16 fixed w-full top-0 bg-background/50 backdrop-blur z-20">
      <div className="px-6 flex justify-between w-full h-full items-center">
        <div className="flex items-center gap-4">
          <LogoLink data={data} />
          <HeaderNav data={data} />
        </div>
        <HeaderActions />
      </div>
    </header>
  )
}
