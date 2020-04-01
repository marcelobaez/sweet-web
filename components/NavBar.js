import React from "react";

const NavBar = () => {
  return (
    <section className='flex flex-wrap justify-center'>
      <nav className='bg-white p-6 shadow-md w-full'>
        <div className='-mb-px flex justify-center'>
          <a
            className='no-underline text-pink-500 border-b-2 border-pink-500 uppercase tracking-wide font-thin text-sm py-3 mr-8'
            href='#'
          >
            Lenceria
          </a>
          <a
            className='no-underline text-gray-600 border-b-2 border-transparent uppercase tracking-wide font-thin text-sm py-3 mr-8'
            href='#'
          >
            Bikinis
          </a>
          <a
            className='no-underline text-gray-600 border-b-2 border-transparent uppercase tracking-wide font-thin text-sm py-3'
            href='#'
          >
            Accesorios
          </a>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
