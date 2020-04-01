import React from "react";
import Divider from "../components/Divider";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import useApi from "../utils/use-api";
import Layout from "../components/Layout";
import { useFetchUser } from "../utils/user";

const Checkout = () => {
  const { user, loading } = useFetchUser();
  const { response, error, isLoading } = useApi("/api/user-cart");

  return (
    <Layout user={user} loading={loading}>
      <div className='h-full p-6 flex flex-wrap justify-start bg-gray-100'>
        <div className='w-full text-gray-900 font-bold text-2xl mb-2 leading-tight mt-0 lg:mt-0 xl:mt-0'>
          Mi carrito
        </div>
        {!isLoading && response.error && (
          <p>
            Por favor{" "}
            <a href='/api/login' className='text-pink-700'>
              inicia sesión
            </a>{" "}
            para ver tus items
          </p>
        )}
        <div className='justify-center w-full md:w-3/4 lg:w-3/4 xl:w-3/4 p-5 shadow-md bg-white'>
          <div className='hidden md:block lg:block xl:block text-gray-700 font-semibold text-sm mb-1 leading-tight mt-2 lg:mt-0 xl:mt-0 w-full flex-none text-right'>
            Precio
          </div>
          <Divider />
          <CartItem />
          <Divider />
        </div>
        <OrderSummary />
      </div>
    </Layout>
  );
};

export default Checkout;
