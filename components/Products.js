import React from "react";

const Products = ({ children, title }) => {
  return (
    <section className='flex flex-wrap p-6 justify-center'>
      <div className='flex w-full mb-2 justify-center'>
        <h1 className='text-gray-800 font-thin text-3xl uppercase inline-block'>
          {title}
        </h1>
      </div>
      <div className='flex w-1/4 h-1 mb-2 justify-center px-4'>
        <div className='w-full border-b-2 border-gray-700' />
      </div>
      <div className='flex flex-wrap justify-center'>{children}</div>
    </section>
  );
};

export default Products;
