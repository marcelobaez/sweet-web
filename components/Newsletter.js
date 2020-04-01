import React from "react";
import { EmailButton } from "./widgets";

const Newsletter = () => {
  return (
    <section className='w-full bg-pink-400 p-8'>
      <div className='flex flex-wrap'>
        <div className='w-full text-center lg:text-right xl:text-right sm:w-full md:w-full lg:w-1/2 xl:w-1/2 sm:mb-4 md:mb-4 lg:mb-0 xl:mb-0 mb-4'>
          <label
            htmlFor='suscribe'
            className='text-white text-2xl font-bold align-baseline'
          >
            Suscribite y obtené muchos descuentos!
          </label>
        </div>
        <div className='w-full justify-center lg:px-2 xl:px-2 sm:w-full md:w-full lg:w-1/2 xl:w-1/2 sm:justify-center md:justify-center lg:justify-start xl:justify-start flex'>
          <input
            id='suscribe'
            className='bg-gray-200 text-gray-700 py-2 px-2 border-2 w-9/12 lg:w-6/12 md:w-6/12 focus:bg-white focus:outline-none focus:border-pink-500 appearance-none'
            placeholder='Tu email'
          ></input>
          <EmailButton title='Registrarme' />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
