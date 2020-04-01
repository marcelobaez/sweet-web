import React from "react";

const Badge = ({ title }) => {
  return (
    <span className='absolute bg-pink-400 text-white mt-1 ml-1 text-xs py-1 px-2 inline-block font-normal tracking-wide'>
      {title}
    </span>
  );
};

export default Badge;
