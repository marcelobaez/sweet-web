import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { UserSvg, CartSvg, ArrowDownSvg, HeartSvg } from "./svg";
import { useUser } from "../utils/user";

const Header = () => {
  const { user, loading } = useUser();
  const [isOpen, setToggle] = useState(false);
  const [isDdOpen, setToggleDropdown] = useState(false);

  const handleToggle = event => {
    setToggle(!isOpen);
  };

  const handleToggleDropdown = event => {
    setToggleDropdown(!isDdOpen);
  };

  const handleCloseDdown = event => {
    setToggleDropdown(false);
  };

  const handleKeyDown = useCallback(() => {
    switch (event.keyCode) {
      case 27:
        setToggleDropdown(false);
        break;
    }
  }, [setToggleDropdown]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDdOpen]);

  return (
    <header className='sticky top-0 sm:flex sm:items-center sm:justify-between xl:justify-between bg-gray-900 z-40'>
      <div className='flex px-4 py-3 bg-gray-900 justify-between cursor-pointer hover:bg-gray-800 rounded'>
        <div>
          <Link href='/'>
            <img
              src='/static/img/LogoMakr_5dhsVI.png'
              className='h-6 w-auto'
              alt='logo image'
            />
          </Link>
        </div>
        <div className='flex sm:hidden'>
          <button
            type='button'
            onClick={handleToggle}
            className='px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              className='fill-current h-6 w-6'
            >
              {isOpen ? (
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z'
                />
              ) : (
                <path
                  fillRule='evenodd'
                  d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-end`}
      >
        <div className='sm:flex sm:items-center'>
          <div className='px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0'>
            <Link href='/about'>
              <a className='block px-3 py-3 font-light text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2'>
                ¿Quienes somos?
              </a>
            </Link>
            <Link href='/wishes'>
              <button className='block lg:inline-flex xl:inline-flex flex flex-no-wrap items-center px-3 py-3 font-light text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2'>
                <HeartSvg className='fill-current w-3 h-3 mr-2' />
                <span>Mi lista</span>
              </button>
            </Link>
            {!loading && user && (
              <Link href='/cart'>
                <button className='lg:inline-flex xl:inline-flex flex flex-no-wrap items-center px-3 py-3 font-light text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2'>
                  <CartSvg className='fill-current w-3 h-3 mr-2' />
                  <span>Mi carrito</span>
                </button>
              </Link>
            )}
          </div>
          {!loading &&
            (user ? (
              <>
                <div id='dropdown' className='sm:inline-block relative hidden'>
                  <button
                    onClick={handleToggleDropdown}
                    className='relative z-10 sm:flex items-center px-3 py-3 font-light text-white hover:bg-gray-800 sm:mt-0 sm:text-sm sm:px-2 sm:ml-2'
                  >
                    <UserSvg className='mr-2 h-3 w-3 fill-current' />
                    Mi cuenta
                    <ArrowDownSvg className='ml-2 h-4 w-4 fill-current' />
                  </button>
                  {isDdOpen && (
                    <button
                      onClick={handleCloseDdown}
                      tabIndex='-1'
                      className='fixed inset-0 h-full w-full bg-black opacity-50 cursor-default'
                    ></button>
                  )}
                  {isDdOpen && (
                    <div className='mt-2 absolute right-0 origin-top-right'>
                      <div className='w-56 text-left bg-white rounded-lg shadow-lg'>
                        <div className='flex items-center px-4 py-2'>
                          <img
                            className='h-10 w-10 rounded-full flex-no-shrink'
                            src={user.picture}
                            alt=''
                          />
                          <div className='ml-2'>
                            <p className='font-semibold text-gray-900 leading-none text-sm'>
                              {user.name}
                            </p>
                            <p>
                              <a
                                href='#'
                                className='text-xs text-gray-600 leading-none hover:underline'
                              >
                                Mi perfil
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className='border-t-2 border-gray-200 py-1'>
                          <a
                            href='#'
                            className='block px-4 py-2 leading-tight hover:bg-gray-200 text-sm'
                          >
                            Mis pedidos
                          </a>
                        </div>
                        <div className='border-t-2 border-gray-200 py-1'>
                          <a href='/api/logout'>
                            <button className='block w-full px-4 py-2 text-left leading-tight hover:bg-gray-200 text-sm'>
                              Salir
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='sm:hidden w-full mt-2 left-0 origin-top-left'>
                  <div className='text-left'>
                    <div className='flex items-center px-4 py-2'>
                      <img
                        className='h-10 w-10 rounded-full flex-no-shrink'
                        src={user.picture}
                        alt=''
                      />
                      <div className='ml-2'>
                        <p className='font-semibold text-gray-300 leading-none text-sm'>
                          {user.name}
                        </p>
                        <p>
                          <a
                            href='#'
                            className='text-xs text-gray-500 leading-none hover:underline'
                          >
                            Mi perfil
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className='sm:border-t-2 border-gray-200 py-1'>
                      <a
                        href='#'
                        className='block text-gray-300 px-4 py-2 leading-tight rounded hover:bg-gray-800 text-sm'
                      >
                        Mis pedidos
                      </a>
                    </div>
                    <div className='sm:border-t-2 border-gray-200 py-1 pb-2'>
                      <a href='/api/logout'>
                        <button className='block w-full text-gray-300 px-4 py-2 text-left leading-tight rounded hover:bg-gray-800 text-sm'>
                          Salir
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className='px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0'>
                <a
                  href='/api/login'
                  className='flex sm:text-sm items-center px-3 py-2 my-2 rounded font-light text-white hover:bg-gray-800 sm:px-2 sm:ml-2'
                >
                  Iniciar sesión
                </a>
                <a
                  href='/api/register'
                  className='flex sm:text-sm ml-3 px-4 py-2 my-2 font-medium text-center text-sm rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-600 focus:outline-none focus:bg-gray-400'
                >
                  Registro
                </a>
              </div>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
