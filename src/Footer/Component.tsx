import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'

import type { Footer as FooterType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

const iconMap = {
  Instagram: <Instagram />,
  Twitter: <Twitter />,
  Facebook: <Facebook />,
  LinkedIn: <Linkedin />,
  Github: <Github />,
}

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal('footer', 1)()

  const { navItems, socialMediaLinks, contactInfo } = footerData || {}

  return (
    <footer className="mt-auto border-t border-border bg-card text-card-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <p className="text-sm text-muted-foreground">Mede with 🍵 by IPTEK</p>
            <Link className="flex items-center gap-2" href="/">
              <div>
                <Logo priority="high" className="h-10!" loading="lazy" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">HIMATIF UNIMAL</span>
                <span className="text-xs text-muted-foreground">Kabinet Reugam</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {(navItems || []).map(({ link }, i) => {
                return (
                  <CMSLink
                    key={i}
                    {...link}
                    className={{
                      button: 'hover:text-primary font-medium justify-start',
                    }}
                  />
                )
              })}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <div className="prose prose-sm dark:prose-invert">
              <p>{contactInfo}</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Media Sosial</h3>
            <div className="flex gap-4">
              {(socialMediaLinks || []).map((item) => (
                <Link
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {iconMap[item.icon]}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HIMATIF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
