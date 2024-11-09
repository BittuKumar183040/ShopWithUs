import React from 'react'
import image_back from '../../../assets/login_back.jpg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigator = useNavigate();

  const userLogin = (e) =>{
    e.preventDefault();
    navigator('/dashboard');
  }

  return (
    <div
      className=" absolute top-0 left-0 -z-10 w-full flex flex-col gap-4 justify-center items-center h-screen text-white">
      <img src={image_back} alt="" className='absolute top-0 h-full w-full object-cover left-0 -z-10' />
      <div className= 'bg-gray-500 bg-opacity-20 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-xs'>
        <p className="text-2xl text-center font-semibold text-gray-800 pb-4">Login</p>
        <form className="flex flex-col  gap-5" onSubmit={userLogin}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="submit"
            value="Login"
            className="cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 ease-in-out"
          />
        </form>
      </div>
    </div>
  );
  
  
}

export default Login