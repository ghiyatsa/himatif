'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { NavigationLinks } from './NavigationLinks'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  return (
    <NavigationLinks
      navItems={data.navItems}
      className="lg:flex gap-6 hidden"
      linkClassName="duration-200 hover:-translate-y-0.5 hover:text-primary font-medium hover:scale-105"
    />
  )
}
