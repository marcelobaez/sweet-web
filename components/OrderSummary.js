import React from "react";
import { connect } from "react-redux";

const OrderSummary = () => {
  return (
    <div className='px-5 w-full md:w-1/4 lg:w-1/4 xl:w-1/4'>
      <div className='w-full rounded shadow-lg px-6 py-3 bg-white'>
        <p className='text-normal font-semibold text-gray-900'>
          Resumen del pedido
        </p>
        <hr className='w-full' />
        <div className='flex mb-1'>
          <div className='w-1/2 text-sm text-left font-semibold text-gray-900'>
            Subtotal (1 item)
          </div>
          <div className='w-1/2 text-sm text-right'>$ 1550</div>
        </div>
        <div className='flex mb-8'>
          <div className='w-1/2 text-sm text-left font-base text-gray-900'>
            Envío
          </div>
          <div className='w-1/2 text-sm text-right'>A acordar</div>
        </div>
        <div className='flex mb-4'>
          <div className='w-1/2 text-xl text-left font-semibold text-gray-900'>
            Total
          </div>
          <div className='w-1/2 text-xl text-right text-pink-500'>$ 1550</div>
        </div>
        <hr className='w-full' />
      </div>
    </div>
  );
};

export default connect()(OrderSummary);
