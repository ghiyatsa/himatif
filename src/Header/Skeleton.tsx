'use client'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

export const HeaderSkeleton: React.FC = () => {
  return (
    <header className="flex items-center h-16 fixed w-full top-0 bg-background/90 backdrop-blur-md z-20">
      <div className="px-6 flex justify-between w-full h-full items-center">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-24" />
          <div className="hidden md:flex items-center gap-4">
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-6 w-20" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
      </div>
    </header>
  )
}
