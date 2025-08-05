'use client'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'

export const LandingHero: React.FC<Page['hero']> = ({ links, badge, title, subTitle }) => {
  return (
    <div className="relative h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="container z-10 relative flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-4 text-center items-center">
          <Link href="#" className="bg-surface py-1 px-3 rounded-full text-sm w-max">
            {badge}
          </Link>
          <h1 className="leading-tighter max-w-4xl text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter">
            {title}
          </h1>
          <p className="text-foreground max-w-3xl text-base text-balance sm:text-lg">{subTitle}</p>
        </div>
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex md:justify-center gap-4">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} size={'sm'} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
