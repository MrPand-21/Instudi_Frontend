import logger from '@/utils/logger';
import Image from 'next/image';
import InstudiApp from '../../public/static/instudiAppPage.png';
import CrButton from '@/components/CrButton';
import CrInstudiText from '@/components/CrInstudiText';
import CrNavButton from '@/components/usecase/CrNavButton';

export default function Home() {
  return (
    <main className='h-screen w-screen px-10 flex flex-wrap lg:flex-nowrap flex-row'>
      <div className='w-full  pt-[10vh]'>
        <CrInstudiText useImg={false} />
        <div
          className='whitespace-pre-line mt-10 text-lg md:text-2xl 2xl:text-3xl inline-block antialiased peer tracking-tight group
        leading-loose mb-10'>
          <div
            className='text-[var(--secondary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>
            Öğrencilerin eğitim materyalleri bulabileceği ve paylaşabileceği bir
            platform.
          </div>
          <div
            className='text-[var(--primary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>
            Eğitimcilerin bilgilerini paylaşabileceği bir platform.
          </div>
          <div
            className='text-[var(--secondary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>
            Kuruluşların kendilerini gösterebilecekleri ve kurs açabilecekleri
            bir platform.
          </div>
          <div
            className='text-[var(--primary-rgb)] peer opacity-80 font-medium
          group-hover:opacity-100 group-hover:scale-110 group-hover:font-semibold transition-all'>
            Öğrenmek isteyen herkes için bir <span className=''>platform.</span>
          </div>
        </div>
        <CrNavButton
          svgDs={[
            'M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z',
            'M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z',
          ]}
          content='Giriş Yap!'
          url='/login'
        />
      </div>
      <div className='w-full flex-initial 2xl:basis-7/12'>
        <Image
          alt='Instudi'
          src={InstudiApp}
          className='hidden lg:inline min-w-[30em]'
          width={1720}
          height={1850}></Image>
      </div>

      <div className='-translate-x-1/2 skew-y-6 aspect-square w-24 absolute rounded-2xl origin-top-left rotate-45 bg-[var(--primary-rgb)]'></div>
      <div
        className='bottom-2 right-2 aspect-square w-10 2xl:bottom-[8%] sm:w-16 md:w-24 lg:w-20 lg:bottom-10 md:bottom-16
      md:left-auto lg:left-1/2 md:right-[8%] 2xl:left-[55%] 2xl:w-28 absolute rounded-ee-none rounded-full origin-top-left
      bg-[var(--primary-rgb)] '></div>
      <div
        className='top-32 lg:top-[12%] sm:right-[28%] sm:top-[5%] sm:w-16 aspect-square w-10 md:w-[5rem] lg:w-20 -right-2 md:right-[15%]
       lg:right-1/3 2xl:w-24 absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
      <div
        className='top-40 aspect-square sm:right-[36%] sm:top-[10%] sm:w-12 w-8 md:w-[4rem] lg:w-16 right-5 md:right-[20%] md:top-44 
      lg:right-[38.3%] 2xl:w-20 lg:top-[18%] absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
    </main>
  );
}
