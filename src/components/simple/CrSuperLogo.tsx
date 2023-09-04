'use client';
import {NextPage} from 'next';
import CrInstudiText from '../CrInstudiText';
import {useEffect, useRef} from 'react';

interface Props {}

const logoClass =
  'absolute superlogos left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2';

const CrSuperLogo: NextPage<Props> = ({}) => {
  const logo: React.RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {}, []);

  return (
    <div ref={logo} className='relative w-full h-full'>
      <CrInstudiText
        textClassName='!indent-0 !from-rose-400 !to-red-500'
        mini={true}
        useImg={false}
        isBlock={true}
        className={logoClass}
      />
      <CrInstudiText
        textClassName='!indent-0 !from-emerald-400 !to-cyan-400'
        mini={true}
        useImg={false}
        isBlock={true}
        className={logoClass}
      />
      <CrInstudiText
        textClassName='!indent-0'
        mini={true}
        useImg={false}
        isBlock={true}
        className={logoClass}
      />
    </div>
  );
};

export default CrSuperLogo;
