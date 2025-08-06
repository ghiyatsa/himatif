'use client'
import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import ShinyText from '@/components/ShinyText'
import GradientText from '@/components/GradientText'
import { Button } from '@/components/ui/button'
import DarkVeil from '@/components/DarkVeil'

export const LandingHero: React.FC<Page['hero']> = ({ links, badge, title, subTitle }) => {
  return (
    <div className="relative h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="absolute inset-0">
        <DarkVeil hueShift={200} />
      </div>
      <div className="container z-10 relative flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-4 text-center items-center">
          <Link href="#">
            <Button
              variant="star"
              starColor="var(--color-primary)"
              starSpeed="5s"
              className="rounded-full hover:scale-105 hover:-translate-y-0.5 duration-200"
              classNames={{ content: 'bg-surface/50 backdrop-blur' }}
            >
              <ShinyText text={badge || ''}></ShinyText>
            </Button>
          </Link>
          <h1 className="leading-tighter max-w-4xl font-semibold text-3xl tracking-tight text-balance lg:leading-[1.1] xl:text-5xl xl:tracking-tighter">
            <GradientText
              colors={['#fff940', '#f7a10b', '#fff940', '#f7a10b', '#fff940']}
              animationSpeed={10}
              className="font-bold"
            >
              {title}
            </GradientText>
          </h1>
          <p className="text-foreground max-w-3xl text-sm text-balance sm:text-lg">{subTitle}</p>
        </div>
        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex md:justify-center gap-4">
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} size={'default'} starColor="var(--color-primary)" />
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
