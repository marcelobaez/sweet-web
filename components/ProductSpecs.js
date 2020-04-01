import React from "react";
import QtyControl from "./QtyControl";
import ColorsControl from "./ColorsControl";
import SizeControl from "./SizeControl";
import ButtonIcon from "./ButtonIcon";
import Rating from "./Rating";
import { CartSvg } from "./svg";

const ProductSpecs = ({ title, price, rating, desc, user }) => {
  return (
    <div className='px-6 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mr-auto'>
      <div className='mb-8'>
        <div className='text-gray-900 font-bold text-2xl mb-2 leading-tight mt-2 lg:mt-0 xl:mt-0'>
          {title}
        </div>
        <div className='text-pink-400 text-xl font-bold mb-2 flex items-center'>
          <span className='mr-4'>{`$ ${price}`}</span>
          <Rating rating={rating} />
        </div>
        <p className='text-gray-700 text-base mb-4 leading-tight'>{desc}</p>
        <SizeControl />
        <ColorsControl />
        <QtyControl />
        <hr className='w-full mb-2' />
        {user ? (
          <ButtonIcon className='mt-3 text-center justify-center w-full py-2 px-3 bg-gray-800 text-white font-semibold  border-2 border-gray-800 hover:bg-pink-500 hover:border-pink-500 focus:outline-none focus:border-pink-500 focus:bg-pink-500 inline-flex items-center'>
            <CartSvg className='fill-current w-4 h-4 mr-2' />
            <span className='text-sm'>Agregar al carrito</span>
          </ButtonIcon>
        ) : (
          <>
            <span className='text-sm block mb-2 text-center'>
              <a href='/api/login' className='text-pink-500'>
                Inicia sesión
              </a>
              {` `}para poder comprar
            </span>
            <span className='text-sm block text-center'>
              ¿No tenes una cuenta?{` `}
              <a href='/api/register' className='text-pink-500'>
                Registrate acá
              </a>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSpecs;
