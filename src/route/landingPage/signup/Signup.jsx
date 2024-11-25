import React from 'react'
import image_back from '../../../assets/login_back.jpg'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigator = useNavigate();
  const userSignup = (e) =>{
    e.preventDefault();
    navigator('/login');
  }


  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5" style={{backgroundImage: `url(${image_back})`}}>
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Create Account.
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Let's get you all set up so you can verify your personal account and begin setting up your profile.
              </p>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                    <input type="text" placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                    <input type="text" placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                    <input type="text" placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                    <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <button
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span>Sign Up </span>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd" />
                  </svg>
                </button>
              </form>
              <p className="mt-6 text-sm text-center text-gray-400">Already have an account! <Link to="/login" className="text-blue-500 focus:outline-none focus:underline hover:underline">Log in</Link>.</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Signup