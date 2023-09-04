import {NextPage} from 'next';
import {useField} from 'formik';
import logger from '@/utils/logger';
import {useState} from 'react';

interface Props {
  name: string;
  type: string;
  className?: string;
  label?: string;
}

const CrTextInput: NextPage<Props> = ({name, type, label, className}) => {
  const [dismiss, setDismiss] = useState(false);
  const [field, meta] = useField(name);
  const {onChange, ...rest} = field;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleOnClick() {
    setDismiss(true);
  }

  function handleOnChange(e: any) {
    setDismiss(false);
    onChange(e);
  }

  let error = meta.touched && !!meta.error && !dismiss;
  return (
    <div className={`w-[71.2%] ${className} h-fit`}>
      <div className='relative focus-within:scale-[1.15] transition-all'>
        {label ? (
          <span
            id={`${name}-label`}
            className={`pointer-events-none absolute z-20 mt-1.5 text-amber-500  text-lg antialiased
            ${
              meta.value
                ? '-translate-y-10 left-1/2 -translate-x-1/2 text-xl underline underline-offset-4 decoration-solid decoration-[var(--secondary-rgb)]'
                : 'left-3 focus:-translate-y-10 focus:-translate-x-1/2'
            } transition-all duration-300 ${
              error
                ? '!text-pink-300 dark:!text-red-600 dark:!decoration-red-600 !decoration-pink-300'
                : ''
            }`}>
            {label}
          </span>
        ) : null}
        <input
          type={
            type == 'password' ? (showPassword ? 'text' : 'password') : type
          }
          className={`caret-[var(--background-start-rgb)] ring-2 w-full dark:bg-slate-700 ring-[var(--secondary-rgb)] 
          text-[var(--secondary-rgb)] form-input rounded-md transition-all focus:opacity-100 opacity-80 
          focus:shadow-lg focus:bg-[var(--secondary-rgb)] focus:shadow-[var(--secondary-rgb)] 
          focus:caret-[var(--primary-rgb)] focus:outline-none focus:border-0 border-0 outline-none 
          focus:ring-[var(--secondary-rgb)] focus:text-[var(--primary-rgb)] bg-indigo-600/90 ${
            error
              ? '!bg-pink-300  !ring-0 dark:!text-red-600 !text-pink-500'
              : ''
          }`}
          onChange={(e) => {
            handleOnChange(e);
          }}
          {...rest}
        />
        {type == 'password' ? (
          <span
            onMouseEnter={() => togglePasswordVisibility()}
            onMouseLeave={() => togglePasswordVisibility()}
            className={`absolute right-5 top-5 transition-all -translate-y-1/2 w-[1.4rem] fill-amber-500
            ${error ? '!fill-pink-500' : ''}`}>
            {showPassword ? (
              <svg
                stroke='inherit'
                fill='inherit'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='inherit'
                width='inherit'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z'></path>
              </svg>
            ) : (
              <svg
                stroke='inherit'
                fill='inherit'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='inherit'
                width='inherit'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z'></path>
              </svg>
            )}
          </span>
        ) : null}
        {error ? (
          <div
            className={`
               w-full border-2 border-rose-600 bg-rose-400/70 border-t-0 p-1 relative 
          rounded-md text-amber-400 dark:text-amber-500 text-xs md:text-sm antialiased transition-all duration-500`}>
            {meta.error}
            <span
              className='absolute right-0 top-1/2 -translate-y-1/2 mr-3 aspect-square w-4 cursor-pointer'
              onClick={() => handleOnClick()}>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='inherit'
                width='inherit'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z'></path>
              </svg>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CrTextInput;
