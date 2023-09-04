import '../styles/globals.css';
import type {Metadata} from 'next';
import {Inter, Quicksand} from 'next/font/google';
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
import CrSuperLogo from '@/components/simple/CrSuperLogo';

const inter = Inter({subsets: ['latin']});
const quicksand = Quicksand({subsets: ['latin']});

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
        <div className='w-[100vw] fixed dark:mix-blend-screen mix-blend-multiply backdrop-blur-sm z-50 invisible md:visible text-[var(--foreground-rgb)] bg-slate-300/10 align-middle text-center h-[10vh] flex flex-row  '>
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
        <footer className='w-full lg:mt-8 h-[80vh] lg:h-[30vh] relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='flex lg:flex-col flex-row order-2 flex-wrap lg:flex-nowrap lg:order-1 h-full basis-2/5 lg:basis-1/4 justify-around items-center'>
            <div className='h-fit w-full basis-[30%] lg:pt-5 opacity-80 dark:opacity-80'>
              <CrSuperLogo />
            </div>
            <div className='shrink h-fit relative flex flex-row align-middle items-center justify-evenly divide-x divide-yellow-500'>
              <div className='w-6 mx-1 inline-block aspect-square fill-[var(--secondary-rgb)]'>
                <svg
                  stroke='inherit'
                  fill='inherit'
                  strokeWidth='0'
                  viewBox='0 0 256 256'
                  height='inherit'
                  width='inherit'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z'></path>
                </svg>
              </div>
              <div className='w-5 inline-block aspect-square fill-[var(--secondary-rgb)]'>
                <svg
                  stroke='inherit'
                  fill='inherit'
                  strokeWidth='0'
                  role='img'
                  viewBox='0 0 24 24'
                  height='inherit'
                  width='inherit'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title></title>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'></path>
                </svg>
              </div>
            </div>
            <p className='text-xs text-[var(--foreground-text-rgb)] antialiased opacity-70 lg:basis-1/4 basis-full w-[70%] lg:w-[80%] text-center'>
              Bu site, cookies(çerezler)'leri, cookie(çerez) politikası altında
              kullanmaktadır. Depolama şartlarını ya da tarayıcınızdaki
              cookies(çerezler)'lere erişimi özelleştirebilirsiniz.
            </p>
            <p className='text-sm text-opacity-70 antialiased text-[var(-foreground-rgb)]'>
              &copy; {new Date().getFullYear()} Instudi
            </p>
          </div>
          <div
            className={`grid h-[80%] p-5 text-center lg:order-2 justify-stretch grow lg:grid-cols-4 grid-cols-2 grid-rows-8  gap-x-10 gap-y-2 ${quicksand.className}`}>
            <h1 className='text-[var(--foreground-rgb)] lg:row-span-2'>
              Sayfalar
            </h1>
            <h1 className='text-[var(--foreground-rgb)] lg:row-span-2'>
              Topluluk ve Hakkımızda
            </h1>
            <h1 className='text-[var(--foreground-rgb)] col-start-1 row-start-5 lg:col-start-auto lg:row-start-auto lg:row-span-2'>
              İletişim
            </h1>
            <h1 className='text-[var(--foreground-rgb)] col-start-2 row-start-5 lg:col-start-auto lg:row-start-auto lg:row-span-2'>
              Legal
            </h1>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-1 row-start-2 lg:row-start-3 lg:row-span-2'>
              Webinarlar
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-1 row-start-3 lg:row-start-5 lg:row-span-2'>
              Dersler
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-1 row-start-4 lg:row-start-7 lg:row-span-2'>
              Podcast
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-2 row-start-2 lg:row-start-3 lg:row-span-2'>
              Topluluk
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-2 row-start-3 lg:row-start-5 lg:row-span-2'>
              Linkedin
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-2 row-start-4 lg:row-start-7 lg:row-span-2'>
              Instagram
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-1 row-start-6 lg:col-start-3 lg:row-start-3 lg:row-span-2'>
              support@instudi.com
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-1 row-start-7 lg:col-start-3 lg:row-start-5 lg:row-span-2'>
              (+90) 555 422 98 67
            </p>
            <p className='text-sm opacity-40 text-[var(--foreground-rgb)] col-start-1 row-start-8 lg:col-start-3 lg:row-start-7 lg:row-span-2 '>
              Türkiye, İstanbul
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-2 row-start-6 lg:col-start-4 lg:row-start-3 lg:row-span-2'>
              Kullanıcı Sözleşmesi
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-2 row-start-7 lg:col-start-4 lg:row-start-5 lg:row-span-2'>
              Çerezler Tercihleri
            </p>
            <p className='text-sm cursor-pointer opacity-40 text-[var(--foreground-rgb)] hover:opacity-80 col-start-2 row-start-8 lg:col-start-4 lg:row-start-7 lg:row-span-2'>
              Yardım Merkezi
            </p>
          </div>
          <div
            className='opacity-10 absolute w-full h-full -z-50 dark:bg-gradient-to-br dark:from-blue-600 dark:to-violet-600
          bg-gradient-to-r from-slate-400 to-slate-600 '></div>
        </footer>
      </body>
    </html>
  );
}
