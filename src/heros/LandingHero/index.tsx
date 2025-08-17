'use client'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import ShinyText from '@/components/ShinyText'
import GradientText from '@/components/GradientText'
import { Button } from '@/components/ui/button'
import DarkVeil from '@/components/DarkVeil'

import { useTheme } from 'next-themes'
import { Page } from '@/payload-types'
import { cn } from '@/utilities/ui'

export const LandingHero: React.FC<Page['hero']> = ({
  landingBadge,
  landingTitle,
  landingSubtitle,
  links,
}) => {
  const { resolvedTheme: theme } = useTheme()
  return (
    <>
      <div className="absolute top-0 w-full h-screen overflow-hidden">
        <DarkVeil hueShift={205} theme={theme} scanlineFrequency={5} speed={1} />
      </div>
      <div className="relative h-[calc(100vh-64px)] flex items-center justify-center">
        <div className="container z-10 relative flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-6 text-center items-center">
            <Link href="#">
              <Button
                variant="star"
                starColor="var(--color-primary)"
                starSpeed="5s"
                className="rounded-full hover:scale-105 hover:-translate-y-0.5 duration-200"
                classNames={{ content: 'bg-surface/50 backdrop-blur rounded-full' }}
              >
                <ShinyText text={landingBadge || ''}></ShinyText>
              </Button>
            </Link>
            <h1 className="max-w-6xl font-semibold text-4xl text-balance lg:leading-[1.1] xl:text-6xl ">
              <GradientText
                colors={[
                  'var(--gradient-text-from)',
                  'var(--gradient-text-to)',
                  'var(--gradient-text-from)',
                  'var(--gradient-text-to)',
                  'var(--gradient-text-from)',
                ]}
                animationSpeed={10}
                className="font-bold"
              >
                {landingTitle}
              </GradientText>
            </h1>
            <p className="text-foreground max-w-3xl text-sm text-balance sm:text-lg">
              {landingSubtitle}
            </p>
          </div>
          {links && links.length > 0 && (
            <ul className="flex justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink
                      {...link}
                      size={'default'}
                      starColor="var(--color-primary)"
                      className={{ button: 'hover:scale-105 hover:-translate-y-0.5 duration-200' }}
                    />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
