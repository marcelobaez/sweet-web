import React from "react";
import { EmailSvg } from "../svg";

const EmailButton = ({ title }) => {
  return (
    <button
      className='inline-flex items-center shadow bg-pink-700 hover:bg-pink-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4'
      type='button'
    >
      <EmailSvg className='fill-current w-4 h-4' />
      <span className='ml-2 hidden lg:inline-block'>{title}</span>
    </button>
  );
};

export default EmailButton;
