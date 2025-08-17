import { Figtree } from 'next/font/google'
import type { Metadata } from 'next'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { getServerSideURL } from '@/utilities/getURL'
const figtree = Figtree({
  subsets: ['latin'],
  variable: '--figtre',
})
import './globals.css'
import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { Providers } from '@/providers'
import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(figtree.className, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
