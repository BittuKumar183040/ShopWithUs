import React, { useState, useEffect } from 'react';
import image_back from '../../../assets/login_back.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../../reduxSlice/loggedUserSlice';
import { useAuth } from '../../auth/AuthContext';

const Login = () => {
  const navigator = useNavigate();
  const { login } = useAuth()
  const [user, setUser] = useState([]);

  const userLogin = useGoogleLogin({
    onSuccess: (resToken) => {
      setUser(resToken)
      localStorage.setItem("authToken", resToken.access_token)
      login();
      navigator('/dashboard');
    },
    onError: (error) => {
      localStorage.clear();
      console.log("Login Failed:", error)
    } 
  });

  const userLoginGuest = () =>{
    localStorage.setItem("authToken", "guest")
    login();
    navigator('/dashboard');
  }

  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img className=' h-full' src={image_back} alt='' />
      </div>
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src="/vite.svg" alt=""/>
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
          </p>
          <div
            onClick={userLogin}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
              <div className="px-4 py-2">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                      <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                      <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                      <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                      <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                  </svg>
              </div>
              <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
          </div>
          <div
            onClick={userLoginGuest}
            className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="px-4 py-2">
                <svg 
                  width="24" viewBox="0 0 196.000000 277.000000"  
                  preserveAspectRatio="xMidYMid meet">  
                  <g transform="translate(0.000000,277.000000) scale(0.050000,-0.050000)" fill="#000000" stroke="none"> 
                    <path d="M1244 5308 c-129 -66 -215 -225 -200 -372 6 -61 4 -62 -82 -64 -168 -4 -168 -137 0 -148 l88 -6 1 -154 c2 -171 44 -292 137 -391 92 -98 18 -156 -378 -295 -114 -40 -281 -208 -307 -308 -39 -154 -38 -512 2 -537 79 -51 104 3 117 253 17 336 36 362 377 503 l169 71 60 -62 c196 -200 527 -197 714 7 68 74 177 54 292 -55 50 -47 538 -873 579 -981 8 -20 -164 -149 -198 -149 -6 0 -86 121 -178 270 -174 281 -195 303 -258 269 -36 -19 -39 -44 -39 -305 l0 -284 -560 0 -560 0 0 284 c0 261 -3 286 -39 305 -108 58 -121 10 -121 -440 l0 -399 -141 0 -141 0 6 245 6 245 -52 6 c-83 10 -92 -26 -107 -416 -17 -471 52 -603 300 -572 l81 10 -8 -116 c-8 -111 -6 -118 61 -174 l69 -58 34 -425 33 -426 -58 -74 c-99 -126 -96 -293 7 -332 40 -16 1220 -16 1260 0 102 39 106 225 7 337 l-57 66 33 427 33 427 71 62 70 61 -33 449 c-48 656 -55 786 -39 769 8 -8 87 -133 176 -278 104 -170 183 -277 224 -303 l63 -40 1 -182 1 -182 -76 -22 c-169 -51 -222 -168 -223 -498 -1 -185 20 -246 86 -246 60 0 73 51 73 275 0 343 -7 338 495 334 471 -4 425 67 425 -659 0 -725 52 -650 -457 -650 -480 0 -463 -11 -463 279 0 230 -35 286 -122 199 -59 -59 -48 -408 16 -494 103 -140 132 -147 586 -140 620 9 600 -18 600 806 0 689 -20 759 -233 802 l-57 11 0 297 c0 361 -19 400 -200 400 -94 0 -106 5 -128 55 -14 30 -174 318 -356 640 -364 646 -389 677 -605 747 -211 69 -233 101 -141 201 87 96 130 223 130 387 l0 140 88 10 c165 19 167 148 3 152 l-84 1 -5 109 c-7 133 -49 219 -145 292 -94 72 -600 95 -723 34z m664 -190 c40 -47 52 -83 52 -155 l0 -93 -380 0 -380 0 0 93 c0 72 12 108 52 155 l52 62 276 0 276 0 52 -62z m52 -533 c-1 -296 -214 -491 -465 -424 -195 52 -294 194 -295 424 l0 135 380 0 380 0 0 -135z m-380 -575 c72 0 148 6 170 14 56 20 125 -71 88 -116 -109 -132 -359 -139 -501 -14 -49 43 12 153 73 131 22 -8 99 -15 170 -15z m1357 -1441 c73 -161 -79 -285 -196 -160 -57 61 -51 77 59 149 112 73 109 73 137 11z m-755 -504 c15 -195 28 -367 28 -382 0 -22 -57 -28 -275 -30 l-275 -3 0 173 c0 212 -8 237 -80 237 -72 0 -80 -25 -80 -237 l0 -173 -275 3 c-218 2 -275 8 -275 30 0 15 13 187 28 382 l29 355 573 0 573 0 29 -355z m1078 55 l0 -280 -180 0 -180 0 0 186 0 185 60 23 c32 12 78 55 102 94 37 63 52 72 120 72 l78 0 0 -280z m-2428 -25 c-27 -136 -185 -162 -249 -41 -49 93 -34 106 120 106 l142 0 -13 -65z m672 -1021 l6 -427 -160 8 c-88 4 -170 11 -181 14 -13 4 -32 145 -47 344 -13 185 -30 371 -36 412 l-11 75 212 0 211 0 6 -426z m569 341 c-7 -47 -23 -232 -36 -412 -14 -198 -32 -329 -45 -334 -12 -3 -92 -10 -177 -13 l-155 -7 0 426 0 425 212 0 213 0 -12 -85z m-617 -936 c98 -91 66 -109 -196 -109 -262 0 -283 11 -197 104 62 65 325 69 393 5z m638 -2 c97 -92 69 -107 -194 -107 -262 0 -294 18 -196 109 65 61 324 60 390 -2z"/> <path d="M2884 1496 c-38 -38 -34 -843 5 -875 33 -28 110 -10 113 25 11 139 5 812 -7 839 -19 40 -76 46 -111 11z"/> <path d="M3184 1496 c-38 -38 -34 -843 5 -875 33 -28 110 -10 112 25 9 145 1 835 -10 852 -18 29 -77 28 -107 -2z"/>
                  </g> 
                </svg> 
            </div>
            <span className="w-5/6 px-4 py-3 font-bold text-center">Login as Guest</span>
          </div>
          <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                  with email</div>
              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
              <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
          </div>

          <div className="mt-4">
              <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                  <div className="text-xs cursor-pointer text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</div>
              </div>
              <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
          </div>

          <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                  Log In
              </button>
          </div>

          {/* <p className=' p-2 bg-slate-400 w-fit px-8 rounded-md shadow-md m-2 cursor-pointer' onClick={logout}>Logout</p> */}
          
          <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link to="/signup" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                or sign up
              </Link>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
      </div>
    </div>
    </div>
  );
  
  
}

export default Login