import React from "react";

const Footer = () => {
  return (
    <footer className='w-full bg-gray-900 p-6 flex-shrink-0'>
      <div className='sm:flex mb-4 justify-center'>
        <div className='sm:w-1/3 h-auto px-4 justify-center'>
          <img
            src='/static/img/LogoMakr_5dhsVI.png'
            className='h-8'
            alt='footer logo'
          />
          <div className='w-full text-xs text-gray-500 text-left'>
            <span className='mb-1 mt-2 block'>
              Av. Libertad 5255 - Corrientes, Capital - 3400
            </span>
            <span className='mb-1 block'>
              +(54) 376-154626314 / +(54) 376-154211883
            </span>
            <span className='mb-4 block'>ventas@sweethope.com.ar</span>
          </div>
        </div>
        <div className='sm:w-1/3 h-auto px-4 items-center'>
          <a
            href='/us'
            className='text-white mb-2 font-semibold uppercase flex'
          >
            Recursos
          </a>
          <a className='flex items-center hover:text-white text-gray-500 text-xs'>
            <span>Catálogos</span>
          </a>
        </div>
        <div className='sm:w-1/3 h-auto sm:mt-0 mt-4 px-4 items-center'>
          <a
            href='/contact'
            className='text-white mb-2 uppercase font-semibold flex'
          >
            Seguinos
          </a>
          <a
            href='https://www.instagram.com/sweet_hopee'
            rel='noopener'
            target='_blank'
            className='flex items-center hover:text-white text-gray-500 text-xs'
          >
            <svg
              className='h-3 w-3'
              viewBox='0 0 512 512'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                className='fill-current text-gray-500'
                d='M75 512h362c41.36 0 75-33.64 75-75V75c0-41.36-33.64-75-75-75H75C33.64 0 0 33.64 0 75v362c0 41.36 33.64 75 75 75zM30 75c0-24.81 20.19-45 45-45h362c24.81 0 45 20.19 45 45v362c0 24.81-20.19 45-45 45H75c-24.81 0-45-20.19-45-45zm0 0'
              />
              <path
                className='fill-current text-gray-500'
                d='M256 391c74.44 0 135-60.56 135-135s-60.56-135-135-135-135 60.56-135 135 60.56 135 135 135zm0-240c57.9 0 105 47.1 105 105s-47.1 105-105 105-105-47.1-105-105 47.1-105 105-105zm0 0M406 151c24.81 0 45-20.19 45-45s-20.19-45-45-45-45 20.19-45 45 20.19 45 45 45zm0-60c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0'
              />
            </svg>
            <span className='ml-3'>Instagram</span>
          </a>
          <a
            target='_blank'
            rel='noopener'
            href='https://www.facebook.com/Sweet-Hope-700970489990789/'
            className='flex items-center hover:text-white text-gray-500 text-xs'
          >
            <svg
              className='h-3 w-3'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 26 26'
            >
              <path
                className='fill-current text-gray-500'
                d='M21.13 0H4.88A4.87 4.87 0 0 0 0 4.88v16.25C0 23.82 2.18 26 4.88 26h16.25c2.69 0 4.87-2.18 4.87-4.88V4.88C26 2.19 23.82 0 21.12 0zm-.67 14h-2.43v9h-4.06v-9h-1.58v-3.03h1.58V9.04C13.97 6.5 15.02 5 18 5h3.02v3.02h-1.76c-1.16 0-1.23.44-1.23 1.25v1.7h2.75L20.46 14z'
              />
            </svg>
            <span className='ml-3'>Facebook</span>
          </a>
        </div>
      </div>
      <div className='w-full text-xs text-gray-500 text-center mt-4'>
        <span>© 2019 Sweet Hope. Todos los derechos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
