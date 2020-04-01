import React from "react";

const CardCover = ({ imgSrc, title }) => {
  return <img className='object-cover w-full h-72' src={imgSrc} alt={title} />;
};

export default CardCover;
