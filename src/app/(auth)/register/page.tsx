'use client';
import CrButton from '@/components/CrButton';
import CrInstudiText from '@/components/CrInstudiText';
import useTheme from '@/utils/hooks/useTheme';
import {Quicksand, Inter} from 'next/font/google';
import {NextPage} from 'next';
import Link from 'next/link';
import {useState} from 'react';
import CrRegisterSection from '@/components/simple/CrRegisterSection';
import {useWindowWidth} from '@/utils/hooks/useWindowWidth';
import SubRegisterPage from './SubRegisterPage';

interface Props {}
const quicksand = Quicksand({
  weight: '500',
  subsets: ['latin'],
});
const inter = Inter({
  subsets: ['latin'],
});

const RegisterPage: NextPage<Props> = ({}) => {
  function handleMobileInterface(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsClicked(true);
  }

  function handleSectionChange(e: any) {
    e.preventDefault();
    setSection(e.target.closest('.register-section').id);
  }

  function handleComputerInterface(e: any) {
    e.preventDefault();
    setIsSectionClicked(true);
  }

  function handleSectionConfirmation(e: any) {
    e.preventDefault();
    setIsSectionClicked(true);
  }

  const [isClicked, setIsClicked] = useState(false);
  const [isSectionConfirmed, setIsSectionClicked] = useState(false);
  const [section, setSection] = useState('');
  const windowWidth = useWindowWidth();
  const isDarkTheme = useTheme();

  return (
    <div
      className={`w-full h-full lg:overflow-hidden overflow-visible ${quicksand.className}`}>
      <div
        className='flex flex-col w-full relative h-[86%] 2xl:h-[75%] items-center 
          before:h-0.5 before:bg-yellow-300 before:absolute before:bottom-0 before:w-[60%] before:left-[20%]'>
        <h1
          className={`login text-3xl ${
            inter.className
          } w-[80%] tracking-tight register font-bold bg-gradient-to-r
           from-amber-200 to-yellow-500 bg-clip-text text-transparent mt-5 md:mt-0 mb-10 text-center ${
             isClicked || isSectionConfirmed
               ? 'duration-[2000ms] transition-all translate-x-[120%] opacity-0'
               : ''
           }`}>
          <CrInstudiText
            useText={false}
            imgClass='mix-blend-multiply lg:mix-blend-screen relative left-1/2 -translate-x-1/2'
            className='hidden md:block '
          />
          Selamlar, önümüzde farklı yollar var! Seni tanıyalım?
        </h1>
        <div
          className={`mt-5 lg:hidden ${
            isClicked
              ? 'duration-700 transition-all translate-y-full scale-0'
              : ''
          }`}>
          <CrButton
            useText={false}
            svgDs={[
              'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z',
            ]}
            secondary={isDarkTheme}
            outerClass={`w-[80%] md:w-[clamp(6rem,12vw,11em)] ${
              isClicked ? '!cursor-wait' : ''
            }`}
            buttonClassName={`${isClicked ? '!cursor-wait' : ''}`}
            svgClassName='!fill-[var(--secondary-rgb)] group-hover:!fill-[var(--primary-rgb)] group-hover:!stroke-[var(--primary-rgb)] !stroke-[var(--secondary-rgb)]'
            onClick={(e) => {
              handleMobileInterface(e);
            }}
          />
        </div>
        <div
          className={`absolute items-center lg:divide-x-4 lg:divide-dashed lg:divide-yellow-500 lg:content-stretch lg:relative lg:flex-row flex flex-col w-full h-full lg:h-[45%] transition-all duration-[2000ms] ${
            isClicked || windowWidth >= 1024
              ? isSectionConfirmed
                ? 'translate-x-full opacity-0 lg:opacity-100'
                : ''
              : 'lg:translate-x-0 -translate-x-full opacity-0 lg:opacity-100'
          } antialiased text-xs text-yellow-500 
          `}>
          <CrRegisterSection
            id='student-section'
            title='Öğrenci'
            description='Herhangi bir ilk öğretim / orta öğretim kurumunda öğrenciysen ve
        eğitimin nabzını tutmak istiyorsan'
            className='lg:before:invisible before:w-1/2 before:h-1/2 before:bottom-0 relative before:left-1/2 before:border-r-4 before:border-b-4 before:border-yellow-500 before:absolute'
            onMouseEnter={(e) => {
              handleSectionChange(e);
            }}
            onClick={(e) => {
              if (windowWidth >= 1024) handleComputerInterface(e);
            }}
          />
          <CrRegisterSection
            id='mentor-section'
            title='Mentör'
            description='Öğretmen veya üniversite öğrencisiysen ya da herhangi bir alanda bilgi paylaşmak istiyorsan'
            className='lg:before:invisible before:w-1 before:opacity-70 before:h-full before:-top-1/2 relative before:left-0 before:bg-yellow-500 before:absolute'
            onMouseEnter={(e) => {
              handleSectionChange(e);
            }}
            onClick={(e) => {
              if (windowWidth >= 1024) handleComputerInterface(e);
            }}
          />
          <CrRegisterSection
            id='institution-section'
            title='Kurum'
            description="Kurumunuzu tanıtmak ve öğrencilerinize Türkiye'nin en büyük eğitim platformunda ulaşmak istiyorsan"
            className='lg:before:invisible lg:after:invisible before:w-1/2 before:h-1/2 before:top-0 pt-2 relative before:left-0 before:border-l-4 before:border-t-4 before:border-yellow-500 before:absolute
            after:w-1 after:h-full after:-top-1/2 after:right-0 after:bg-yellow-500 after:absolute after:opacity-70'
            onMouseEnter={(e) => {
              handleSectionChange(e);
            }}
            onClick={(e) => {
              if (windowWidth >= 1024) handleComputerInterface(e);
            }}
          />
          <div
            className={`absolute top-0 -translate-y-full shadow-xl left-1/2 -translate-x-1/2 ${
              section ? 'visible lg:invisible' : 'invisible'
            }`}>
            <CrButton
              useText={false}
              svgDs={[
                'M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z',
              ]}
              secondary={isDarkTheme}
              outerClass={`w-[80%] md:w-[clamp(6rem,12vw,11em)] `}
              svgClassName='!fill-[var(--secondary-rgb)] group-hover:!fill-[var(--primary-rgb)] group-hover:!stroke-[var(--primary-rgb)] !stroke-[var(--secondary-rgb)]'
              onClick={(e) => {
                handleSectionConfirmation(e);
              }}
            />
          </div>
        </div>
        <div
          className={`absolute transition-all duration-[2000ms] w-full h-full ${
            isSectionConfirmed ? 'opacity-100' : '-translate-x-full opacity-0'
          }`}>
          <CrInstudiText
            useText={false}
            imgClass='mix-blend-multiply lg:mix-blend-screen relative left-1/2 -translate-x-1/2'
            className='hidden lg:block '
          />
          <SubRegisterPage section={section} />
        </div>
      </div>

      <div className='relative text-center w-full h-[14%]'>
        <p className='relative top-1/2 left-1/2 transition-all hover:scale-125 -translate-y-1/2 -translate-x-1/2 text-xs md:text-sm text-yellow-300'>
          Hesabınız Var mı? hemen{' '}
          <Link
            href='/login'
            className='text-yellow-500 before:w-full relative z-10 before:absolute before:-bottom-1  
            before:left-0 before:h-0.5 transition-all duration-300 before:bg-yellow-400 hover:before:h-[130%] 
            before:transition-all before:duration-500 hover:before:content-["Tıkla!"] hover:text-[var(--primary-rgb)] before:z-0'>
            Giriş Yapın!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
