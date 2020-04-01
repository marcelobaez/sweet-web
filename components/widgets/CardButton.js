import React from "react";
import { FireSvg } from "../svg";

const CardButton = React.forwardRef(({ onClick, href, title }, ref) => (
  <button
    onClick={onClick}
    ref={ref}
    type='button'
    className='w-full justify-center rounded-sm py-1 px-2 text-sm bg-pink-500 text-white font-semibold border-2 border-pink-500 hover:bg-pink-600 hover:border-pink-600 focus:outline-none focus:border-pink-600 focus:bg-pink-600 inline-flex items-center'
  >
    <FireSvg className='fill-current w-4 h-4 mr-2' />
    <span className='w-auto text-center'>{title}</span>
  </button>
));

export default CardButton;
