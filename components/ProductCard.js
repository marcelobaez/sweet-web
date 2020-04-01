import React from "react";
import Link from "next/link";
import Rating from "./Rating";
import CardCover from "./CardCover";
import { ShareButton, Badge, CardButton } from "./widgets";

const ProductCard = props => {
  const { id, title, categories, rating, price, cover_url } = props;

  return (
    <div className='relative container flex-none w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 mt-2 mx-2 shadow-lg'>
      <Badge title='Nuevo!' />
      <CardCover imgSrc={cover_url} title={title} />
      <div className='p-4 bg-white'>
        <div className='flex items-baseline'>
          <div className='text-gray-600 text-xs font-light flex w-1/2 items-center'>
            {categories.length > 0 ? categories[0].name : null}
          </div>
          <div className='items-center flex w-1/2 justify-end'>
            <ShareButton />
          </div>
        </div>
        <h4 className='mt-1 font-semibold text-sm uppercase leading-tight truncate'>
          {title}
        </h4>
        <div className='mt-2 flex items-center text-sm'>
          <div className='flex items-center w-1/2'>
            <span className='mr-2 text-pink-700 font-semibold'>{`$${price}`}</span>
          </div>
          <div className='justify-end flex items-center w-1/2'>
            <Rating rating={rating} />
            <span className='ml-2 text-gray-600 text-xs'>{`(${12})`}</span>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center'>
          <Link href='/product/[id]' as={`/product/${id}`}>
            <CardButton title='¡Quiero la mia!' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
