import {NextPage} from 'next';
import {ButtonHTMLAttributes} from 'react';

export interface CrButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  useSvg?: boolean;
  useText?: boolean;
  svgDs?: string[];
  content?: string;
  floatInvert?: boolean;
  svgClassName?: string;
  changeSvg?: boolean;
  secondary?: boolean;
}

const defaultProps = {
  useSvg: true,
  useText: true,
  floatInvert: false,
  changeSvg: false,
  secondary: false,
};

const CrButton: NextPage<CrButtonProps> = (props) => {
  const {
    useSvg,
    useText,
    svgDs,
    content,
    floatInvert,
    svgClassName,
    changeSvg,
    secondary,
    ...rest
  } = props;

  const buttonClass = `rounded-lg border-4 shadow-xl group-hover:shadow-2xl ${
    secondary
      ? 'border-[var(--primary-rgb)] hover:bg-[var(--primary-rgb)]'
      : 'border-[var(--secondary-rgb)] hover:bg-[var(--secondary-rgb)]'
  }
     group-hover:scale-110 transition-all max-h-fit p-2 hover:px-3 box-content 
    ${
      useText && useSvg
        ? ' 2xl:mt-10 w-[60vw] 2xl:w-[30vw] lg:w-[clamp(6rem,12vw,11em)]'
        : useSvg
        ? ' w-[clamp(1rem,3vw,3rem)]'
        : ''
    }`;
  const svgClass = `aspect-square overflow-hidden w-8 ${
    secondary
      ? 'fill-[var(--primary-rgb)] group-hover:fill-[var(--secondary-rgb)]'
      : 'fill-[var(--primary-rgb)]'
  } inline-block  group-hover:w-10  transition-all
  ${
    useSvg && !useText
      ? ' 2xl:w-10 mr-2 2xl:group-hover:w-12'
      : (floatInvert
          ? 'float-left ml-10 md:ml-0 2xl:ml-10 md:float-right 2xl:float-left'
          : 'float-right mr-10 md:mr-0 2xl:mr-10 md:float-left 2xl:float-right') +
        ' 2xl:w-12 2xl:group-hover:w-14'
  } ${svgClassName}`;

  const textClass = `group-hover:text-xl pt-1 2xl:pt-2 duration-300 transition-all ${
    secondary
      ? 'group-hover:text-[var(--secondary-rgb)]'
      : 'group-hover:text-[var(--primary-rgb)]'
  } 
  ${
    changeSvg ? 'group-hover:-translate-x-5' : 'group-hover:translate-x-2'
  }  group-hover:translate-y-0.5 2xl:text-2xl 2xl:group-hover:text-3xl`;

  return (
    <div className='group opacity-80 hover:opacity-100 inline transition-all peer-hover:opacity-100'>
      <button className={buttonClass} {...rest}>
        {useSvg ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={svgClass}
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              className={changeSvg ? 'group-hover:invisible' : ''}
              d={svgDs![0]}
            />
            {svgDs!.length > 1 ? (
              <path
                fillRule='evenodd'
                className={changeSvg ? 'invisible group-hover:visible' : ''}
                d={svgDs![1]}
              />
            ) : null}
          </svg>
        ) : null}
        {useText ? <p className={textClass}>{content}</p> : null}
      </button>
    </div>
  );
};

CrButton.defaultProps = defaultProps;
export default CrButton;
