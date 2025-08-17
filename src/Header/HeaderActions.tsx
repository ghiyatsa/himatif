'use client'
import React from 'react'

import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/providers/Theme/ThemeToggle'
import { SearchModal } from '@/search/SearchModal'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { Header as HeaderType } from '@/payload-types'
import { NavigationLinks } from './Nav/NavigationLinks'

export const HeaderActions: React.FC<{ data: HeaderType }> = ({ data }) => {
  return (
    <div className="flex items-center xl:gap-2 gap-1">
      <SearchModal />
      <Separator orientation="vertical" className="h-4! hidden lg:block" />
      <ThemeToggle />
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={'ghost'} size={'icon'} className="lg:hidden flex">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-8 w-[250px] mr-6 my-5 border rounded-lg">
          <SheetHeader className="text-left">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <NavigationLinks
            navItems={data.navItems}
            className="flex-col items-start gap-4 p-6"
            linkClassName="w-full"
            appearance={'ghost'}
          />
        </SheetContent>
      </Sheet>
    </div>
  )
}
