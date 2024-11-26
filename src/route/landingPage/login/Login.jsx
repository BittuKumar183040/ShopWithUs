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
            {/* <div className="px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 -1.41 122.88 122.88" id="Layer_1" data-name="Layer 1">
                  <path class="cls-1" d="M90.54,38.25c2.23-.75,4.58.44,6.13,2.3h18.46a.51.51,0,0,1,.51.51v4.86a.51.51,0,0,1-.51.51H111.9V62.62h-3.73V46.43H98.11a9.11,9.11,0,0,1-2.36,3.36V62.62H92V52.41a57.27,57.27,0,0,1-8,3.38,84.35,84.35,0,0,1-9,2.79,18,18,0,0,1-15.71-4,41.48,41.48,0,0,1-3.49-3.35l-.34-.36-3,17.75a62.39,62.39,0,0,0,7.2,4.17c7.78,3.63,14.18,6.63,15.55,18.85.25,2.14.14,14.68,0,20.84H86a1.8,1.8,0,0,1-.67-1.43v-1.89a4.77,4.77,0,0,1-4.71-4.76v-36a4.78,4.78,0,0,1,4.76-4.76h1.09a.91.91,0,0,0,0,.23l1.19,4.54a7.4,7.4,0,0,0,1.79,3.38A4.22,4.22,0,0,0,92.58,73h4.77v2.55c0,.41,1.92.73,2.32.73H106a.72.72,0,0,0,.73-.72V73h5a4.36,4.36,0,0,0,3.16-1.32,6.81,6.81,0,0,0,1.72-3.4l1-4.48a1,1,0,0,0,0-.24h.51a4.78,4.78,0,0,1,4.76,4.76v36.05a4.77,4.77,0,0,1-4.71,4.76V111a1.8,1.8,0,0,1-.67,1.43h5.38v7.58H0v-7.58H19.83c1.41-3.79,2.86-7.83,4.28-11.89,2.93-8.39,5.74-17,7.8-23.84a22,22,0,0,1-3.21-5.06A11.33,11.33,0,0,1,27.82,65l4.33-21.82c-1.55-.08-3.34-.54-4.8.1-2.83,1.24-7,6.52-9.47,9l-3.31,3.35c-2.55,2.58-4.25,5.44-8.15,5.13-4.84-.38-8.3-5.76-4.89-9.89l7.63-7.72c3.67-3.73,7.16-8.12,11.69-10.68C24.49,30.41,28.45,29,35,29.28c2.4,0,4.94.27,7.34.5l2.8.24c11,.71,16.12,6.5,20.12,11,1.77,2,3.29,3.7,4.94,4.49.78.37,2-.15,3.39-.73L83.76,41l6.78-2.72ZM61.15,112.47c.14-6.94.29-16.73.18-18.62-.09-1.35-1-4.92-2.42-5.57a59.35,59.35,0,0,0-5.83-2.17c-2.75-.91-5-1.83-7.72-2.58-2,6.58-4.68,14.52-7.57,22.09l-2.73,6.85Zm52.87,0H89.49a1.77,1.77,0,0,0,.67-1.43v-1.89h23.19V111a1.77,1.77,0,0,0,.67,1.43ZM88.91,100.24a.88.88,0,0,1,0-1.76h25.82a.88.88,0,0,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm0-8.51a.88.88,0,0,1,0-1.76h25.82a.88.88,0,1,1,0,1.76Zm26.73-18.75H88.5l.9,3.43a5.63,5.63,0,0,0,1.34,2.58,2.49,2.49,0,0,0,1.83.78h19.17a2.65,2.65,0,0,0,1.92-.81,5.09,5.09,0,0,0,1.24-2.51l.74-3.47ZM44.82.71a13.17,13.17,0,1,1-7.56,6.66A13.13,13.13,0,0,1,44.82.71Z"/>
                </svg>
            </div> */}
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