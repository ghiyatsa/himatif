import React from 'react'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { ButtonProps } from '@/components/ui/button'

interface NavigationLinksProps {
  navItems: HeaderType['navItems']
  className?: string
  linkClassName?: string
  appearance?: ButtonProps['variant']
}

export const NavigationLinks: React.FC<NavigationLinksProps> = ({
  navItems,
  className,
  linkClassName,
  appearance,
}) => {
  return (
    <nav className={cn('flex items-center', className)}>
      {(navItems || []).map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance={appearance}
            className={{
              link: cn(linkClassName),
            }}
          />
        )
      })}
    </nav>
  )
}
