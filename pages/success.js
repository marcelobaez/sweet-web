import React from "react";
import Layout from "../components/Layout";
import { CheckMarkSvg } from "../components/svg";
import { useFetchUser } from "../utils/user";

const Success = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <div>
        <div className='flex justify-center mb-4'>
          <CheckMarkSvg className='w-24 h-24 fill-current text-green-500' />
        </div>
        <p className='text-2xl text-gray-800 flex w-full justify-center'>
          ¡Gracias por tu compra!
        </p>
        <p className='flex justify-center text-gray-600 text-base whitespace-normal'>
          Nos pondremos en contacto con vos en breve para coordinar la entrega
        </p>
      </div>
    </Layout>
  );
};

export default Success;
