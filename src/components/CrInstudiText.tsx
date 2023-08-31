import {NextPage} from 'next';
import Logo from '../../public/static/2.png';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  useImg?: boolean;
  useText?: boolean;
  isBlock?: boolean;
  imgClass?: string;
  className?: string;
  mini?: boolean;
}

const initialProps = {
  useImg: true,
  useText: true,
  isBlock: true,
  imgClass: '',
  className: '',
  mini: false,
};

const CrInstudiText: NextPage<Props> = ({
  useImg,
  useText,
  imgClass,
  isBlock,
  className,
  mini,
}) => {
  const textClass = `${mini ? 'text-4xl' : 'text-6xl'}  md:text-9xl ${
    isBlock ? 'block indent-8' : 'inline grow'
  }  tracking-[-.1em] antialiased font-bold 
    bg-gradient-to-br from-violet-600 to-indigo-600 bg-clip-text text-transparent`;

  return (
    <div
      className={
        (isBlock ? '' : 'flex-row flex items-center justify-evenly ') +
        className
      }>
      {useImg ? (
        <Link href={'/'} className='inline'>
          <Image
            src={Logo}
            alt='Instudi Logo'
            width={100}
            height={150}
            className={`2xl:hidden ${imgClass}`}
          />
          <Image
            src={Logo}
            alt='Instudi Logo'
            width={85}
            height={150}
            className={`hidden 2xl:inline-block ${imgClass}`}
          />
        </Link>
      ) : null}
      {useText ? <p className={textClass}>Instudi</p> : null}
    </div>
  );
};
CrInstudiText.defaultProps = initialProps;
export default CrInstudiText;
