import {NextPage} from 'next';
import Image from 'next/image';
import BgImage from '../../../public/assets/bgresg.png';
import CrInstudiText from '@/components/CrInstudiText';

interface Props {
  children: React.ReactNode;
}

const AuthLayout: NextPage<Props> = ({children}) => {
  return (
    <div className='w-screen h-screen '>
      <CrInstudiText
        mini={true}
        className='md:hidden relative w-[45vw] left-1/2 -translate-x-1/2'
        isBlock={false}
      />
      <svg
        className='translate-y-0.5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'>
        <path
          fill='#5271ff'
          fill-opacity='1'
          d='M0,96L34.3,128C68.6,160,137,224,206,213.3C274.3,203,343,117,411,112C480,107,549,181,617,197.3C685.7,213,754,171,823,176C891.4,181,960,235,1029,250.7C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'></path>
      </svg>
      <div className='bg-gradient-to-b h-[53vh] via-[#8366ff] from-[var(--primary-rgb)] to-[#c986ff]'>
        {children}
      </div>
      <svg
        className='-translate-y-0.5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'>
        <path
          fill='#c986ff'
          fill-opacity='1'
          d='M0,96L34.3,128C68.6,160,137,224,206,213.3C274.3,203,343,117,411,112C480,107,549,181,617,197.3C685.7,213,754,171,823,176C891.4,181,960,235,1029,250.7C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z'></path>
      </svg>
    </div>
  );
};

export default AuthLayout;
