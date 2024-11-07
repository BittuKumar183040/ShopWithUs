import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigator = useNavigate();

  const userLogin = (e) =>{
    e.preventDefault();
    navigator('/dashboard');
  }

  return (
    <div
      className="flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-r from-gray-500 to-gray-700 text-white"
      style={{
        backgroundImage: "url('https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <p className="text-2xl font-semibold mb-6">Login</p>
      <form className="loginform flex flex-col bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-xs gap-5" onSubmit={userLogin}>
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
  );
  
  
}

export default Login