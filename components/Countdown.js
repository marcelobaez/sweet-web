import React from "react";
import ReactCountdown, { zeroPad } from "react-countdown-now";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return null;
  } else {
    return (
      <div className='absolute w-full bottom-0 text-white mb-2 flex justify-center'>
        <div className='rounded-lg bg-pink-400 py-1 mx-2 inline-flex flex-wrap justify-center'>
          <span className='text-center text-5xl w-16 font-bold'>
            {zeroPad(days)}
          </span>
          <div className='text-xl font-light text-center w-full'>Dias</div>
        </div>
        <div className='rounded-lg bg-pink-400 py-1 mx-2 inline-flex flex-wrap justify-center'>
          <span className='text-center text-5xl w-16 font-bold'>
            {zeroPad(hours)}
          </span>
          <div className='text-xl font-light text-center w-full'>Hs</div>
        </div>
        <div className='rounded-lg bg-pink-400 py-1 mx-2 inline-flex flex-wrap justify-center'>
          <span className='text-center text-5xl w-16 font-bold'>
            {zeroPad(minutes)}
          </span>
          <div className='text-xl font-light text-center w-full'>Min</div>
        </div>
        <div className='rounded-lg bg-pink-400 py-1 mx-2 inline-flex flex-wrap justify-center'>
          <span className='text-center text-5xl w-16 font-bold'>
            {zeroPad(seconds)}
          </span>
          <div className='text-xl font-light text-center w-full'>Seg</div>
        </div>
      </div>
    );
  }
};

const Countdown = () => {
  return (
    <section className='flex justify-center'>
      <div className='relative w-full h-full flex justify-center'>
        <img
          className='object-cover w-full h-132'
          src='/static/img/splash.jpg'
          alt='pool girl'
        />
        <div className='absolute top-0 flex justify-center mt-2 px-2'>
          <div className='font-normal text-5xl text-center p-3 test-font leading-tight'>
            <span className='text-pink-500'>Muy pronto! </span>
            <span className='text-gray-100'>Lanzamiento de bikinis</span>
          </div>
        </div>
        <ReactCountdown zeroPadTime={2} date='2019-10-12' renderer={renderer} />
      </div>
      <style jsx>
        {`
          .test-font {
            font-family: "Pacifico", cursive;
          }
        `}
      </style>
    </section>
  );
};

export default Countdown;
