import React from "react";
import Layout from "../components/Layout";
import { ErrorSvg } from "../components/svg";
import { useFetchUser } from "../utils/user";

const Success = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div className='w-full py-6 lg:p-6 xl:p-6 justify-center items-center bg-white flex-wrap'>
        <div className='flex w-full justify-center mb-4'>
          <ErrorSvg className='w-24 h-24 fill-current text-red-500' />
        </div>
        <p className='text-2xl text-gray-800 flex w-full justify-center'>
          Error en la compra
        </p>
        <p className='flex w-full justify-center text-gray-600 text-base whitespace-normal'>
          No pudimos procesar su pago. Por favor reintente mas tarde
        </p>
      </div>
    </Layout>
  );
};

export default Success;
