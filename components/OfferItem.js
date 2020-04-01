import React from "react";

const OfferItem = ({ cover, title, condition }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 mb-4 h-108 px-2 relative'>
      <img className='object-cover w-full h-full' src={cover} />
      <div
        style={{
          transform: "translate(-50%, -50%)"
        }}
        className='top-1/2 left-1/2 absolute text-white bg-pink-100 opacity-75 p-4'
      >
        <p className='text-3xl text-gray-800 font-bold uppercase text-center leading-tight mb-4'>
          {title}
        </p>
        <p className='text-base text-gray-700 text-center leading-tight mb-4'>
          {condition}
        </p>
        <div className='justify-center flex'>
          <a className='text-gray-900 text-center text-xs underline cursor-pointer hover:text-red-400'>
            Ver oferta >
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferItem;
