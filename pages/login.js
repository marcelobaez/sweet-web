import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const onGoogleSuccess = res => {
  console.log(res);
};

const onGoogleFailure = res => {
  console.log(res);
};

const onFbSuccess = res => {
  console.log(res);
};

// const onFbFailure = res => {
//   console.log(res);
// };

const Login = () => {
  return (
    <section className='w-full h-full'>
      {/* <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div> */}
      <div className='container mx-auto px-4 h-full'>
        <div className='flex content-center items-center justify-center h-full'>
          <div className='w-full lg:w-4/12 px-4'>
            <div className='flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
              <div className='rounded-t mb-0 px-6 py-6'>
                <div className='text-center mb-3'>
                  <h6 className='text-gray-600 text-sm font-bold'>
                    Iniciar sesión con
                  </h6>
                </div>
                <div className='btn-wrapper text-center'>
                  <GoogleLogin
                    clientId='587128949002-6j1f0a4vl57tt6div7b6363j646u1rt5.apps.googleusercontent.com'
                    buttonText='Google'
                    onSuccess={res => onGoogleSuccess(res)}
                    onFailure={res => onGoogleFailure(res)}
                    cookiePolicy={"single_host_origin"}
                  />
                  <FacebookLogin
                    appId='454810682047143'
                    autoLoad={false}
                    fields='name,email,picture'
                    textButton='Facebook'
                    // onClick={componentClicked}
                    callback={onFbSuccess}
                  />
                </div>
                <hr className='mt-6 border-b-1 border-gray-400' />
              </div>
              <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                <div className='text-gray-500 text-center mb-3 font-bold'>
                  <small>O iniciar sesión con credenciales</small>
                </div>
                <form>
                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                      placeholder='Email'
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-700 text-xs font-bold mb-2'
                      htmlFor='grid-password'
                    >
                      Contraseña
                    </label>
                    <input
                      type='password'
                      className='px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full'
                      placeholder='Contraseña'
                      style={{ transition: "all .15s ease" }}
                    />
                  </div>
                  <div>
                    <label className='inline-flex items-center cursor-pointer'>
                      <input
                        id='customCheckLogin'
                        type='checkbox'
                        className='form-checkbox text-gray-800 ml-1 w-5 h-5'
                        style={{ transition: "all .15s ease" }}
                      />
                      <span className='ml-2 text-sm font-semibold text-gray-700'>
                        Recordarme
                      </span>
                    </label>
                  </div>

                  <div className='text-center mt-6'>
                    <button
                      className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                      type='button'
                      style={{ transition: "all .15s ease" }}
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='flex flex-wrap mt-6'>
              <div className='w-1/2'>
                <a
                  href='#pablo'
                  onClick={e => e.preventDefault()}
                  className='text-gray-300'
                >
                  <small>Olvidaste tu contraseña?</small>
                </a>
              </div>
              <div className='w-1/2 text-right'>
                <a
                  href='#pablo'
                  onClick={e => e.preventDefault()}
                  className='text-gray-300'
                >
                  <small>Registrarme</small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
