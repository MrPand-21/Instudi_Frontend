import '../styles/globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import siteMetadata from '../siteMetadata.js';
import Image from 'next/image';
import Logo from '../../public/static/2.png';
import Link from 'next/link';
import {HiLogin} from 'react-icons/hi';
import {useRef, useState} from 'react';
import logger from '@/utils/logger';
import CrMenuWrapper from '@/components/CrMenuWrapper';
import CrButton from '@/components/CrButton';
import CrInstudiText from '@/components/CrInstudiText';
import CrNavButton from '@/components/usecase/CrNavButton';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  manifest: '/static/site.webmanifest',
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
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang={siteMetadata.language}
      className='overflow-x-hidden scroll-smooth'>
      <body className={inter.className}>
        <div className='w-[100vw] fixed dark:mix-blend-screen mix-blend-multiply backdrop-blur-sm z-50 invisible md:visible	backdrop-filter: brightness(.5); text-[var(--foreground-rgb)] bg-slate-300/10 align-middle text-center h-[10vh] flex flex-row  '>
          <CrInstudiText useText={false} imgClass='shrink' />
          <div className='basis-[32%]'></div>
          <div className='grow flex flex-row-reverse items-center justify-center'>
            <div className='grow flex justify-center items-center'>
              <CrNavButton
                useText={false}
                svgDs={[
                  'M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z',
                  'M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z',
                ]}
                url='/login'
              />
            </div>
            <Link
              className='text-xl antialiased grow underline underline-offset-2 decoration-wavy
            decoration-[var(--secondary-rgb)] font-medium text-[var(--primary-rgb)] hover:font-semibold hover:text-2xl hover:no-underline transition-all '
              href='/'>
              Dersler
            </Link>
            <Link
              className='text-xl antialiased grow underline underline-offset-2 decoration-wavy
            decoration-[var(--secondary-rgb)] font-medium text-[var(--primary-rgb)]  hover:font-semibold hover:text-2xl hover:no-underline transition-all'
              href='/'>
              Podcast
            </Link>
            <Link
              className='text-xl antialiased grow underline underline-offset-2 decoration-wavy
            decoration-[var(--secondary-rgb)] font-medium text-[var(--primary-rgb)]  hover:font-semibold hover:text-2xl hover:no-underline transition-all'
              href='/about'>
              Webinarlar
            </Link>
            <Link
              className='text-xl antialiased grow underline underline-offset-2 decoration-wavy
            decoration-[var(--secondary-rgb)] font-medium text-[var(--primary-rgb)]  hover:font-semibold hover:text-2xl hover:no-underline transition-all'
              href='/contact'>
              Anasayfa
            </Link>
          </div>
          <div className='basis-5'></div>
        </div>
        <div className='z-50 relative'>
          <CrMenuWrapper />
        </div>

        <div className='md:pt-[15vh]'>{children}</div>
      </body>
    </html>
  );
}
