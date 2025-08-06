import React from 'react'

import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/providers/Theme/ThemeToggle'
import { SearchModal } from '@/search/SearchModal'

export const HeaderActions: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <SearchModal />
      <Separator orientation="vertical" className="h-4!" />
      <ThemeToggle />
    </div>
  )
}
