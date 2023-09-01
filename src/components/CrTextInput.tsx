import {NextPage} from 'next';
import {useField} from 'formik';

interface Props {
  name: string;
  type: string;
  className?: string;
  label?: string;
}

const CrTextInput: NextPage<Props> = ({name, type, label, className}) => {
  const [field, meta] = useField(name);
  let error = meta.touched && !!meta.error;
  return (
    <div className={`w-[67vw] ${className} h-fit`}>
      <div className='relative focus-within:scale-[1.15] transition-all'>
        {label ? (
          <span
            id={`${name}-label`}
            className={`absolute z-20 mt-1.5 text-amber-500  text-lg antialiased
            ${
              meta.value
                ? '-translate-y-10 left-1/2 -translate-x-1/2 text-xl underline underline-offset-4 decoration-solid decoration-[var(--secondary-rgb)]'
                : 'left-3 focus:-translate-y-10 focus:-translate-x-1/2'
            } transition-all duration-300`}>
            {label}
          </span>
        ) : null}
        <input
          type={type}
          className='caret-[var(--background-start-rgb)] ring-2 w-full dark:bg-slate-700 ring-[var(--secondary-rgb)] 
          text-[var(--secondary-rgb)] form-input rounded-md transition-all focus:opacity-100 opacity-80 
          focus:shadow-lg focus:bg-[var(--secondary-rgb)] focus:shadow-[var(--secondary-rgb)] 
          focus:caret-[var(--primary-rgb)] focus:outline-none focus:border-0 border-0 outline-none 
          focus:ring-[var(--secondary-rgb)] focus:text-[var(--primary-rgb)] bg-indigo-600/90'
          {...field}
        />
        {meta.touched && !!meta.error ? (
          <div
            className={`
               w-full border-2 border-rose-600 bg-rose-400/70 border-t-0 p-1 
          rounded-md text-amber-400 dark:text-amber-500  text-sm antialiased transition-all duration-500`}>
            {meta.error}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CrTextInput;
