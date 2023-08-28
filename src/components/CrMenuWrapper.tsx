'use client';
import logger from '@/utils/logger';
import {NextPage} from 'next';
import Logo from '../../public/static/2.png';
import {useEffect, useRef, useState} from 'react';
import Image from 'next/image';

interface Props {}

const CrMenuWrapper: NextPage<Props> = ({}) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const phoneMenu: React.RefObject<HTMLDivElement> = useRef(null);

  function handleOnClick(e: any) {
    if (e.target.closest('.menuButton')) setIsMenuClicked(true);
    else if (
      phoneMenu.current?.classList.contains('scale-100') &&
      null == e.target.closest('.phoneMenu')
    )
      setIsMenuClicked(false);
  }

  useEffect(() => {
    document.addEventListener('click', (e) => handleOnClick(e));
    return () => {
      document.removeEventListener('click', (e) => handleOnClick(e));
    };
  }, []);

  return (
    <div>
      <div
        ref={phoneMenu}
        className={`phoneMenu fixed z-50 bg-gradient-to-bl from-violet-600/10 backdrop-blur-sm to-indigo-600/10
         bg-no-repeat bg-top top-0 right-0 transition-all border-s-4 border-[var(--secondary-rgb)] w-[75vw] 
         aspect-square rounded-es-full md:hidden shadow-xl origin-top-right duration-700 grid place-items-center 
         grid-rows-6 grid-cols-5
        ${
          isMenuClicked
            ? ' scale-100 rotate-0 translate-x-0 translate-y-0'
            : ' scale-0 translate-x-1/2 -translate-y-1/2'
        }
        antialiased text-md sm:text-lg underline underline-offset-2 decoration-wavy decoration-[var(--primary-rgb)] font-medium
        text-[var(--foreground-text-rgb)] active:font-semibold active:text-xl active:no-underline transition-all`}>
        <Image
          src={Logo}
          alt='Instudi Logo'
          width={120}
          height={180}
          className='col-start-5 row-start-1 sm:-translate-x-1/2 sm:translate-y-1/2
            border-2 rounded-full border-[var(--secondary-rgb)] mt-3 mr-3 self-start sm:scale-150'
        />
        <div className='col-start-2 col-span-2 '>Anasayfa</div>
        <div className='row-start-2 col-start-2 col-span-2 origin-bottom-left -rotate-[10deg]'>
          Hakkımızda
        </div>
        <div className='row-start-2 col-start-2 row-span-3 col-span-3 origin-bottom-left -rotate-[30deg]'>
          İletişim
        </div>
        <div className='row-start-4 col-start-3 col-span-2 row-span-2 origin-top-left -rotate-[54deg]'>
          Giriş Yap
        </div>
        <div className='row-start-5 row-span-2 col-start-5 origin-top-left rotate-[275deg]'>
          Uygulama
        </div>
      </div>
      <div
        className={`menuButton bg-transparent md:hidden fixed aspect-square h-10 md:h-12 top-10 backdrop-blur-md right-10 stroke-0
        border-[var(--secondary-rgb)] p-2.5 rounded-full border-2 transition-all  opacity-100
        ${isMenuClicked ? ' scale-0' : ' scale-100'}`}>
        <svg
          stroke='currentColor'
          fill='currentColor'
          className={`pointer-events-none fill-[var(--primary-rgb)] 
            `}
          viewBox='0 0 24 24'
          height='inherit'
          width='inherit'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z'></path>
        </svg>
      </div>
    </div>
  );
};

export default CrMenuWrapper;
