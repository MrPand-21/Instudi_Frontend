import logger from '@/utils/logger';
import Image from 'next/image';
import InstudiApp from '../../public/static/instudiAppPage.png';

export default function Home() {
  return (
    <main className='h-screen w-screen px-10 flex flex-wrap lg:flex-nowrap flex-row'>
      <div className='w-full  pt-[10vh]'>
        <p className='text-6xl md:text-9xl block indent-8 tracking-[-.1em] antialiased font-bold bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
          Instudi
        </p>
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
        <div className='group opacity-80 hover:opacity-100 inline transition-all peer-hover:opacity-100'>
          <button
            className='2xl:mt-10 rounded-lg border-4 shadow-xl group-hover:shadow-2xl border-[var(--secondary-rgb)] 
          hover:bg-[var(--secondary-rgb)] hover:scale-110 transition-all w-[60vw] 2xl:w-[30vw] lg:w-[clamp(6rem,12vw,11em)] 
          max-h-fit p-2 hover:px-3 box-content'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              className='aspect-square w-8 2xl:w-12 fill-[var(--primary-rgb)] inline-block float-right mr-10 md:mr-0 2xl:mr-10 md:float-left 2xl:float-right group-hover:w-10 transition-all'
              viewBox='0 0 16 16'>
              <path
                fillRule='evenodd'
                d='M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z'
              />
              <path
                fillRule='evenodd'
                d='M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z'
              />
            </svg>
            <p
              className='group-hover:text-xl pt-1 transition-all group-hover:text-[var(--primary-rgb)]
            group-hover:translate-x-2 group-hover:translate-y-0.5 2xl:text-2xl'>
              Giriş Yap!
            </p>
          </button>
        </div>
      </div>
      <div className='w-full flex-initial 2xl:basis-9/12'>
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
       lg:right-1/3 2xl:w-28 absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
      <div
        className='top-40 aspect-square sm:right-[36%] sm:top-[10%] sm:w-12 w-8 md:w-[4rem] lg:w-16 right-5 md:right-[20%] md:top-44 
      lg:right-[38.3%] 2xl:w-[5.5rem] lg:top-[18%] absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
    </main>
  );
}
