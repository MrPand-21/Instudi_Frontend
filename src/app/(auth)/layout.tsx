import {NextPage} from 'next';
import Image from 'next/image';
import BgImage from '../../../public/assets/bgresg.png';
import CrInstudiText from '@/components/CrInstudiText';

interface Props {
  children: React.ReactNode;
}

const AuthLayout: NextPage<Props> = ({children}) => {
  return (
    <div className={`w-screen h-screen`}>
      <CrInstudiText
        mini={true}
        className='md:hidden relative z-30 w-[45vw] left-1/2 -translate-x-1/2'
        isBlock={false}
      />
      <div className='-translate-y-[8.4%] md:-translate-y-[17%] overflow-hidden'>
        <svg
          className='translate-y-2.5 md:translate-y-4 scale-110 rotate-[2.5deg] pointer-events-none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'>
          <path
            fill='#5271ff'
            fillOpacity='1'
            d='M0,96L34.3,128C68.6,160,137,224,206,213.3C274.3,203,343,117,411,112C480,107,549,181,617,197.3C685.7,213,754,171,823,176C891.4,181,960,235,1029,250.7C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
        </svg>
        <div className='bg-gradient-to-b h-[70vh] via-[#8366ff] from-[var(--primary-rgb)] to-[#c986ff]'>
          <div
            className='md:w-[50vw] w-[86vw] left-[7vw] md:left-[25vw] md:pt-[1%] pt-[5%] h-[80%] md:h-[100%] top-[10%] md:top-[0%] relative 
            shadow-xl z-20 rounded-xl dark:bg-slate-800/90 bg-indigo-600/70'>
            {children}
          </div>
        </div>
        <svg
          className='-translate-y-0.5 '
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'>
          <path
            fill='#c986ff'
            fillOpacity='1'
            d='M0,96L34.3,128C68.6,160,137,224,206,213.3C274.3,203,343,117,411,112C480,107,549,181,617,197.3C685.7,213,754,171,823,176C891.4,181,960,235,1029,250.7C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'></path>
        </svg>
        <div className='svgs'>
          <svg
            className='absolute top-[70%] -left-[3%] md:top-1/2 md:left-[2%] w-[27%] rotate-12 z-0 aspect-square'
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            <defs>
              {' '}
              <linearGradient id='sw-gradient' x1='0' x2='1' y1='1' y2='0'>
                {' '}
                <stop
                  id='stop1'
                  stopColor='rgba(248, 117, 55, 1)'
                  offset='0%'></stop>{' '}
                <stop
                  id='stop2'
                  stopColor='rgba(251, 168, 31, 1)'
                  offset='100%'></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
            <path
              fill='url(#sw-gradient)'
              d='M27.3,-26.2C34,-20.6,37.1,-10.3,35.5,-1.6C33.8,7,27.4,14,20.7,21.3C14,28.5,7,36,-0.7,36.7C-8.5,37.4,-17,31.4,-21.7,24.2C-26.4,17,-27.4,8.5,-28.4,-1.1C-29.5,-10.6,-30.7,-21.3,-26,-26.9C-21.3,-32.5,-10.6,-33.1,-0.2,-33C10.3,-32.8,20.6,-31.9,27.3,-26.2Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
              strokeWidth='0'
              style={{transition: 'all 0.3s ease 0s'}}></path>{' '}
          </svg>
          <svg
            className='absolute top-[18.3%] -left-[7%] md:top-[27%]  md:-left-[12%] w-[22%] rotate-6 z-0 aspect-square'
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            {' '}
            <defs>
              {' '}
              <linearGradient id='sw-gradient-2' x1='0' x2='1' y1='1' y2='0'>
                {' '}
                <stop
                  id='stop1'
                  stopColor='rgba(82, 113, 255, 1)'
                  offset='0%'></stop>{' '}
                <stop
                  id='stop2'
                  stopColor='rgba(127, 178, 228, 0.7)'
                  offset='100%'></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
            <path
              fill='url(#sw-gradient-2)'
              d='M18.6,-21.6C26.5,-19.9,37,-17.7,38.1,-12.7C39.2,-7.8,30.9,-0.2,26,6.5C21.1,13.2,19.6,19,15.8,22.2C12,25.3,6,25.9,-0.8,26.9C-7.5,27.9,-15,29.5,-17.7,26C-20.4,22.4,-18.1,13.8,-21.8,6.2C-25.5,-1.4,-35,-7.9,-36.9,-15.1C-38.8,-22.3,-33.2,-30.1,-25.8,-31.9C-18.4,-33.7,-9.2,-29.6,-1.9,-26.9C5.4,-24.3,10.7,-23.2,18.6,-21.6Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
              strokeWidth='0'
              style={{transition: 'all 0.3s ease 0s'}}
              stroke='url(#sw-gradient)'></path>{' '}
          </svg>
          <svg
            className='invisible md:visible absolute top-[12%] right-[17%] w-[21%] rotate-3 z-0 aspect-square'
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            {' '}
            <defs>
              {' '}
              <linearGradient id='sw-gradient-3' x1='0' x2='1' y1='1' y2='0'>
                {' '}
                <stop
                  id='stop1'
                  stopColor='rgba(255, 0.799, 0.799, 1)'
                  offset='0%'></stop>{' '}
                <stop
                  id='stop2'
                  stopColor='rgba(232.926, 195.43, 9.936, 1)'
                  offset='100%'></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
            <path
              fill='url(#sw-gradient-3)'
              d='M24.1,-28.5C31.2,-22.8,36.8,-15.1,39,-6.3C41.2,2.5,39.9,12.4,35.4,20.5C30.8,28.6,22.9,34.9,14.7,36.1C6.4,37.4,-2.2,33.5,-10.4,29.9C-18.6,26.3,-26.4,23.1,-28.9,17.4C-31.4,11.7,-28.6,3.6,-26.1,-3.6C-23.7,-10.8,-21.7,-17.1,-17.4,-23.3C-13.1,-29.5,-6.6,-35.6,1,-36.8C8.5,-38,17,-34.2,24.1,-28.5Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
              strokeWidth='0'
              style={{transition: 'all 0.3s ease 0s'}}
              stroke='url(#sw-gradient-3)'></path>{' '}
          </svg>
          <svg
            className='absolute bottom-[6%] md:bottom-[20%] right-[0%] w-[22%] rotate-180 z-0 aspect-square'
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            {' '}
            <defs>
              {' '}
              <linearGradient id='sw-gradient-4' x1='0' x2='1' y1='1' y2='0'>
                {' '}
                <stop
                  id='stop1'
                  stopColor='rgba(26.419, 174, 0, 1)'
                  offset='0%'></stop>{' '}
                <stop
                  id='stop2'
                  stopColor='rgba(59, 215, 178.006, 1)'
                  offset='100%'></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
            <path
              fill='url(#sw-gradient-4)'
              d='M20.5,-32.3C27.5,-31.6,34.6,-27.8,33.2,-21.9C31.8,-16,21.9,-8,17.4,-2.6C12.8,2.8,13.7,5.6,15.4,12.1C17.2,18.5,19.8,28.6,17.3,31.1C14.9,33.7,7.5,28.6,3.3,23C-0.9,17.3,-1.8,11,-5.2,9C-8.5,7,-14.3,9.3,-17.8,8.5C-21.4,7.7,-22.7,3.9,-21.9,0.5C-21.1,-2.9,-18.2,-5.9,-18.2,-12.8C-18.2,-19.7,-21.1,-30.6,-18.5,-33.8C-16,-37.1,-8,-32.6,-0.6,-31.6C6.8,-30.6,13.6,-32.9,20.5,-32.3Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
              strokeWidth='0'
              style={{transition: 'all 0.3s ease 0s'}}
              stroke='url(#sw-gradient)'></path>{' '}
          </svg>
          <svg
            className='absolute top-[12%] md:top-[24%] -right-[10%] w-[28.4%] rotate-6 z-0 aspect-square'
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            {' '}
            <defs>
              {' '}
              <linearGradient id='sw-gradient-5' x1='0' x2='1' y1='1' y2='0'>
                {' '}
                <stop
                  id='stop1'
                  stopColor='rgba(0, 21, 174, 1) '
                  offset='0%'></stop>{' '}
                <stop
                  id='stop2'
                  stopColor='rgba(119, 59, 215, 1) '
                  offset='100%'></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
            <path
              fill='url(#sw-gradient-5)'
              d='M17.7,-24.7C23.2,-20.3,28.1,-15.5,30.1,-9.7C32.1,-3.9,31.2,3,29.6,10.2C28.1,17.5,26,25.2,20.9,31.5C15.9,37.8,8,42.7,3.2,38.3C-1.6,33.9,-3.1,20.2,-7.2,13.6C-11.3,7,-17.9,7.5,-22.6,4.6C-27.3,1.8,-30,-4.4,-28.3,-9C-26.5,-13.5,-20.3,-16.4,-14.8,-20.8C-9.3,-25.3,-4.7,-31.3,0.7,-32.2C6.1,-33.2,12.2,-29.2,17.7,-24.7Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
              strokeWidth='0'
              style={{transition: 'all 0.3s ease 0s'}}
              stroke='url(#sw-gradient)'></path>{' '}
          </svg>
          <svg
            className='md:visible invisible absolute md:top-[12%] md:left-[2%] w-[25%] z-0 aspect-square'
            id='sw-js-blob-svg'
            viewBox='0 0 100 100'
            xmlns='http://www.w3.org/2000/svg'>
            {' '}
            <defs>
              {' '}
              <linearGradient id='sw-gradient-7' x1='0' x2='1' y1='1' y2='0'>
                {' '}
                <stop
                  id='stop1'
                  stopColor='rgba(86.023, 178.283, 64.982, 1)'
                  offset='0%'></stop>{' '}
                <stop
                  id='stop2'
                  stopColor='rgba(7.998, 238.264, 255, 1)'
                  offset='100%'></stop>{' '}
              </linearGradient>{' '}
            </defs>{' '}
            <path
              fill='url(#sw-gradient-7)'
              d='M20.4,-21C27.9,-22.6,36.4,-18.6,34.5,-13.8C32.5,-8.9,20.1,-3.2,17.1,5.4C14.1,14.1,20.6,25.6,19.3,26.6C18,27.6,9,17.9,1,16.5C-6.9,15,-13.8,21.8,-16.1,21.2C-18.4,20.5,-16,12.5,-15.1,6.9C-14.2,1.3,-14.7,-1.8,-16.8,-8.6C-18.9,-15.4,-22.6,-25.8,-20.1,-25.7C-17.5,-25.7,-8.8,-15.2,-1.2,-13.6C6.5,-12,12.9,-19.3,20.4,-21Z'
              width='100%'
              height='100%'
              transform='translate(50 50)'
              strokeWidth='0'
              style={{transition: 'all 0.3s ease 0s'}}
              stroke='url(#sw-gradient-7)'></path>{' '}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
