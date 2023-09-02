import {NextPage} from 'next';
import {Inter} from 'next/font/google';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  className?: string;
  title: string;
  description: string;
  onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const inter = Inter({
  subsets: ['latin'],
});

const CrRegisterSection: NextPage<Props> = ({
  id,
  className,
  title,
  description,
  onMouseEnter,
  onClick,
  ...rest
}) => {
  return (
    <div
      id={id}
      className={`w-full lg:grow z-30 register-section cursor-pointer md:w-auto md:h-full pl-5 grow transition-all opacity-60 group hover:opacity-100 relative ${className}`}
      onMouseEnter={(e) => onMouseEnter(e)}
      onClick={(e) => onClick(e)}>
      <h1
        className={`text-2xl lg:text-center lg:text-4xl font-bold mb-2 section-title bg-gradient-to-r
           from-amber-200 lg:tracking-tighter tracking-tight to-yellow-500 bg-clip-text text-transparent ${inter.className}`}>
        {title}
      </h1>
      <p className='leading-snug lg:text-center lg:leading-relaxed lg:w-[85%] w-[75%] lg:text-sm lg:group-hover:w-[90%] text-xs group-hover:w-[85% lg:group-hover:text-base group-hover:text-sm transition-all'>
        {description}
      </p>

      <span className=' absolute lg:top-full top-1/3 -translate-y-1/2 lg:right-1/2 lg:translate-x-1/2 right-0 fill-[var(--secondary-rgb)] -rotate-45 lg:w-16 w-8 lg:mr-0 mr-5'>
        <svg
          stroke='inherit'
          fill='inherit'
          stroke-width='0'
          viewBox='0 0 512 512'
          height='inherit'
          width='inherit'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M65.28 17.906c-4.534.112-8.9 1.748-11.874 4.938L78.188 47.53c3.6-2.498 6.062-6.59 6.062-12.374 0-11.547-9.8-17.476-18.97-17.25zm50.907 47.25c-5.456.135-10.72 2.086-14.312 5.906l100.094 99.563c6.396-3.838 10.874-10.576 10.874-20.406 0-15.813-11.598-24.957-24.125-26.907 2.274-4.11 3.593-9.1 3.593-15 0-30.203-34.627-40.495-54.063-28.313-2.82-10-12.71-15.074-22.063-14.844zm185.125 4.5c-8.09.2-15.687 5.2-15.687 15.344 0 21.643 34.656 23.643 34.656 1.906 0-11.547-9.798-17.476-18.967-17.25zM38 70.97c-8.036 3.474-14.03 10.785-14.03 22.155 0 25.048 29 33.652 45.06 23.344-.02.356-.03.722-.03 1.093 0 21.643 34.656 23.642 34.656 1.906 0-16.772-20.605-21.663-30.03-13.095L38 70.97zm285.28 50.624c-5.445-.06-11.186 1.354-16.905 4.656-36.6 21.133.49 77.543 36.938 56.5.29-.168.562-.36.843-.53 3.576 10.24 20.815 13.49 24.28.686 2.364-8.723-4.358-15.083-11.436-16.22 6.43-19.766-11.307-44.84-33.72-45.092zM47.69 157.344c-8.09.2-15.72 5.17-15.72 15.312 0 21.642 34.657 23.643 34.657 1.906 0-11.547-9.768-17.444-18.938-17.218zm83.156 5.937c-6.61 4.913-11.063 12.715-11.063 23.532 0 18.466 12.97 29.59 27.532 32.688-.978 3.754-1.53 7.847-1.53 12.313 0 32.11 27.323 48.72 52.937 48.156 3.2 15.24 16.224 24.036 29.936 25.842-.203 1.525-.312 3.114-.312 4.782 0 8.336 2.636 15.158 6.875 20.437-10.43-1.978-21.4-.696-30.345 3.97 2.996-14.892-20.645-22.33-24.72-7.125-2.556 9.508 5.674 16.226 13.376 16.406-4.655 5.905-7.53 13.667-7.53 23.376 0 35.93 39.046 49.723 64.156 38.28-.05.78-.094 1.565-.094 2.377 0 35.293 47.376 43.74 62.72 20.656 6.813 5.087 15.516 7.62 23.968 7.467-1.963 4.567-3.094 9.853-3.094 15.907 0 45.924 63.77 55.7 80.72 22.812 19.862 23.187 63.74 25.98 73.624-10.906 6.62-24.708-8.318-43.653-27.344-51.25 17.534-1.69 33.188-13.284 33.188-35.594 0-19.965-12.55-32.753-27.75-37.812.12-1.355.187-2.748.187-4.188 0-6.354-1.24-11.99-3.374-16.937 6.76-2.78 11.844-8.816 11.844-18.345 0-6.834-2.624-12.166-6.594-15.938.665-.247 1.322-.517 2-.906 13.934-7.994 2.29-31.03-11.625-23-6.915 3.988-7.51 11.67-4.655 17.408-5.89-.726-11.958.447-16.594 3.625-2.23-18.2-17.765-28.094-33.342-28.97.942-2.997 1.468-6.33 1.468-10.03 0-41.226-64.075-45.623-67.312-6.813-11.85-3.468-24.845-3.02-35.75 1.5.933-3.418 1.437-7.176 1.437-11.28 0-42.605-54.43-53.9-76.092-29.5l99.593 99.06c-1.305 1.31-2.334 3.038-2.936 5.283-4.166 15.5 20.3 23.54 24.5 8.03 1.77-6.54-1.58-11.727-6.344-14.406 9.1-10.287 23.79-29.242 31.844-52.093 38.66 53.382 76.884 131.425 73.875 200.97-69.06-4.08-152.798-36.757-206.126-72.314 48.474-22.737 60.437-36.688 60.437-36.688l-94.905-94.406c4.782-2.24 8.28-6.774 8.28-13.687 0-18.36-24.72-22.504-32.405-10.314l-52.656-52.375zm303.219 39.595c-8.09.2-15.688 5.17-15.688 15.313 0 21.643 34.656 23.674 34.656 1.937 0-11.548-9.798-17.476-18.967-17.25zm-328.282 88.78c-7.082.193-14.056 4.065-16.343 12.595-4.212 15.72 13.806 23.61 25.47 17.813.85 23.095 40.252 28.895 47.25 2.78 6.222-23.22-23.28-34.08-38.657-21.906-2.103-7.306-9.983-11.49-17.72-11.28zm85.595 137.5c-4.7.043-9.128 2.557-10.688 8.376-2.88 10.71 7.893 17.846 16.22 16.126.83 27.68 45.468 30.024 45.468 1.75 0-21.135-24.955-27.91-37.906-18.47-2.365-4.844-7.892-7.825-13.095-7.78zm114.656 24.908c-1.76.058-3.627.59-5.53 1.687-13.904 8.014-2.31 30.964 11.625 22.97 11.757-6.747 5.32-24.193-5.344-24.658-.246-.01-.497-.008-.75 0z'></path>
        </svg>
      </span>
    </div>
  );
};

export default CrRegisterSection;
