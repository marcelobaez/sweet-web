import React from "react";

const CartItem = ({ cover, name, price, description, color, stock }) => {
  return (
    <div className='w-full flex'>
      <div className='w-full sm:w-1/12 md:w-1/12 lg:w-1/12 xl:w-1/12'>
        <img
          className='object-cover w-full'
          src='https://res.cloudinary.com/dbvfkfj4d/image/upload/c_scale,w_1080/v1569955274/Sweethope/IMG_6429_kgyffw.jpg'
        ></img>
      </div>
      <div className='sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-11/12'>
        <div className='w-full pl-3 flex flex-wrap'>
          <div className=' w-full md:w-10/12 lg:w-10/12 xl:w-10/12 flex-none text-gray-900 font-bold text-lg'>
            Saona
          </div>
          <div className='w-full md:w-2/12 lg:w-2/12 xl:w-2/12 sm:text-left md:text-right lg:text-right xl:text-right text-left flex-none text-pink-500 font-semibold text-lg'>
            $ 1650
          </div>
          <div className='w-full flex-none text-gray-600 font-base text-sm pb-4'>
            Conjunto corpiño top alto y bombacha regulable
          </div>
          <div className='w-full flex-none text-xs pb-2 text-gray-900'>
            <span>Color: Negro</span>
          </div>
          <div className='w-full flex-none text-xs text-gray-900'>
            <span>Cantidad: </span>
            <input type='number' step={1} min={0} max={3} defaultValue={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
