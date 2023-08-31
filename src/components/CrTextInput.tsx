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
    <div className={`w-[67vw] ${className}`}>
      {label ? (
        <label className='block text-[var(--secondary-rgb)] font-medium mb-2 text-xl antialiased'>
          {label}
        </label>
      ) : null}
      <input
        type={type}
        placeholder={`${label}...`}
        className='caret-[var(--background-start-rgb)] placeholder:antialiased text-xl w-full bg-[var(--foreground-rgb)] outline-none border-2 
        border-[var(--secondary-rgb)] text-[var(--secondary-rgb)] form-input rounded-lg transition-all focus:scale-125 focus:opacity-100 
        opacity-80 focus:shadow-xl focus:bg-[var(--secondary-rgb)] focus:placeholder:text-[var(--primary-rgb)]
        focus:shadow-[var(--secondary-rgb)] focus:placeholder:text-xl focus:caret-[var(--primary-rgb)]
        focus:outline-none focus:border-[var(--secondary-rgb)] focus:text-[var(--primary-rgb)] placeholder:italic placeholder:text-slate-400'
        {...field}
      />
      {meta.touched && !!meta.error ? <></> : null}
    </div>
  );
};

export default CrTextInput;
