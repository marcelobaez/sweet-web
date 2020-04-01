import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <div className='w-full'>
        <Head>
          <title>SweetHope | Nosotros</title>
        </Head>
        <div className='flex flex-wrap bg-pattern p-12 h-72 items-center'>
          <div className='w-full mb-4 flex justify-center'>
            <h2 className='text-pink-400 custom-title text-5xl font-normal text-center inline-block'>
              Sweet Hope:
            </h2>
            <h2 className='pl-1 text-white custom-title text-5xl font-normal text-center inline-block'>
              nuestra historia
            </h2>
          </div>
        </div>
        <div className='bg-white p-8'>
          <div className='w-full mb-6 justify-center text-pink-400 text-3xl font-light text-center'>
            Quienes somos ❤️
          </div>
          <div className='w-full lg:w-1/2 xl:w-1/2 m-auto text-center text-lg font-light text-gray-600 italic leading-tight mb-12'>
            Sweet Hope nació del sueño de dos amigas por tener su propia marca
            de ropa interior de diseño. Comenzó como un hobbie en tiempos libres
            confeccionando prendas hechas con amor, en un departamento
            estudiantil, utilizando una máquina de coser comun y corriente,
            utilizando ahorros propios, vendiendo a amigos y conocidos. A un año
            de eso crecimos y hoy se convirtiendo en esto.
          </div>
          <div className='w-full mb-4 justify-center text-pink-400 text-3xl font-light text-center'>
            El equipo 💪🏼
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 xl:w-1/2'>
              <div className='w-full mb-3'>
                <img
                  className='h-40 w-40 object-cover rounded-full block m-auto'
                  src='/static/img/avatar-mile.jpg'
                  alt='person avatar'
                />
              </div>
              <div className='w-full text-gray-700 font-semibold text-xl mb-4 text-center'>
                Milena
              </div>
              <div className='w-full text-center m-auto lg:w-1/2 xl:w-1/2 text-gray-600 font-light text-base pb-6'>
                Soy una bioquímica en proceso, mi hobbie es diseñar lenceria y
                trajes de baño, más que un hobbie una pasión. En cuanto a mi
                ,soy muy extrovertida, sociable e hiperactiva..
              </div>
            </div>
            <div className='w-full lg:w-1/2 xl:w-1/2'>
              <div className='w-full mb-3'>
                <img
                  className='h-40 w-40 object-cover rounded-full block m-auto'
                  src='/static/img/avatar-nayi.jpg'
                  alt='person avatar'
                />
              </div>
              <div className='w-full text-gray-700 font-semibold text-xl mb-4 text-center'>
                Nayibe
              </div>
              <div className='w-full text-center m-auto lg:w-1/2 xl:w-1/2 text-gray-600 font-light text-base'>
                Soy estudiante de Odontología próxima a recibirme. Mi hobbie es
                diseñar y confeccionar lencería femenina; soy apasionada de lo
                que hago, hiperactiva y divertida.
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
            .bg-pattern {
              background-color: #eee7ed;
              background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23eebdeb' fill-opacity='0.53' fill-rule='evenodd'/%3E%3C/svg%3E");
            }

            .custom-title {
              font-family: "Pacifico", cursive;
            }
            `}
        </style>
      </div>
    </Layout>
  );
};

export default about;
