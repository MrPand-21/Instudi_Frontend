import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import siteMetadata from '../siteMetadata.js'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  manifest: "/static/site.webmanifest",
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'tr',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
  alternates: {
    canonical: './',
    languages: {
      'en-US': `${siteMetadata.siteUrl}/en`,
      'de-DE': `${siteMetadata.siteUrl}/de`,
    },
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={siteMetadata.language}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
