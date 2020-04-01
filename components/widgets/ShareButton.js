import { ShareSvg } from "../svg";

const ShareButton = () => {
  return (
    <button
      type='button'
      className='bg-gray-300 p-2 hover:bg-gray-400 text-gray-700 font-bold rounded-full inline-flex items-center'
    >
      <ShareSvg className='fill-current w-3 h-3' />
    </button>
  );
};

export default ShareButton;
