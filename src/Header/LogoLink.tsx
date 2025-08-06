import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Media } from '@/components/Media'

interface LogoLinkProps {
  data: Header
}

export const LogoLink: React.FC<LogoLinkProps> = ({ data }) => {
  return (
    <Link href="/" className="flex items-center gap-4">
      <div>
        <Logo loading="eager" priority="high" />
      </div>
      <div>
        {data.logoKabinet && typeof data.logoKabinet === 'object' && (
          <Media
            imgClassName="w-full h-8.5"
            priority
            resource={data.logoKabinet}
            placeholder="empty"
          />
        )}
      </div>
    </Link>
  )
}
