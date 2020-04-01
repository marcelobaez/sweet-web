import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ category, title }) => {
  return (
    <>
      <ol className='px-1 list-reset ml-auto mr-auto w-full md:w-2/3 lg:w-2/3 xl:w-2/3 flex lg:justify-start xl:justify-start justify-center mb-3 text-gray-900'>
        <li>
          <Link href='/'>
            <a className='text-pink-400 font-semibold'>Inicio</a>
          </Link>
        </li>
        <li>
          <span className='mx-2'>/</span>
        </li>
        <li>
          <a className='text-pink-400 font-semibold'>{category}</a>
        </li>
        <li>
          <span className='mx-2'>/</span>
        </li>
        <li>{title}</li>
      </ol>
      <hr className='w-full mb-4' />
    </>
  );
};

export default Breadcrumbs;
