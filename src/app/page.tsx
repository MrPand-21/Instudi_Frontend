import logger from '@/utils/logger'
import Image from 'next/image'
import InstudiApp from "../../public/static/instudiAppPage.png"

export default function Home() {
  return (
    <main className="h-screen w-screen px-10 flex flex-row">
      <div className="w-full  pt-[10vh]">
        <p className="text-9xl block indent-8 tracking-[-.1em] antialiased font-bold bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent">Instudi</p>
        <div className='whitespace-pre-line mt-10 text-2xl inline-block antialiased peer tracking-tight group
        leading-loose mb-10'>

          <div className='text-[var(--secondary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>Öğrencilerin eğitim materyalleri bulabileceği ve paylaşabileceği bir platform.</div>
          <div className='text-[var(--primary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>Eğitimcilerin bilgilerini paylaşabileceği bir platform.</div>
          <div className='text-[var(--secondary-rgb)] opacity-80 font-medium
          group-hover:opacity-50 group-hover:blur-sm'>Kuruluşların kendilerini gösterebilecekleri ve kurs açabilecekleri bir platform.</div>
          <div className='text-[var(--primary-rgb)] peer opacity-80 font-medium
          group-hover:opacity-100 group-hover:scale-110 group-hover:font-semibold transition-all'>Öğrenmek isteyen herkes için bir <span className=''>platform.</span></div>

        </div>
        <div className='group opacity-80 hover:opacity-100 inline transition-all peer-hover:opacity-100'>
          <button className='rounded-lg border-4 shadow-xl group-hover:shadow-2xl border-[var(--secondary-rgb)] hover:bg-[var(--secondary-rgb)] hover:scale-110 transition-all  w-[clamp(6rem,12vw,11em)] max-h-fit p-2 hover:px-3 box-content'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="aspect-square w-8 fill-[var(--primary-rgb)] inline-block float-left group-hover:w-10 transition-all" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
            <p className='group-hover:text-xl pt-1 transition-all group-hover:text-[var(--primary-rgb)] group-hover:translate-x-2 group-hover:translate-y-0.5 duration-300'>
              Giriş Yap!
            </p>
          </button>
        </div>
      </div>
      <div className='w-full flex-initial'>
        <Image alt='Instudi' src={InstudiApp} className='min-w-[30em]' width={1720} height={1850}>
        </Image></div>

      <div className='md:visible -translate-x-1/2 invisible skew-y-6 aspect-square w-24 absolute rounded-2xl origin-top-left rotate-45 bg-[var(--primary-rgb)]'></div>
      <div className='md:visible bottom-10 invisible aspect-square w-20 left-1/2 absolute rounded-ee-none rounded-full origin-top-left  bg-[var(--primary-rgb)]'></div>
      <div className='md:visible top-24 invisible aspect-square w-20 right-1/3 absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
      <div className='md:visible top-40 invisible aspect-square w-16 right-[38%] absolute origin-top-left  bg-[var(--secondary-rgb)]'></div>
    </main>
  )
}
