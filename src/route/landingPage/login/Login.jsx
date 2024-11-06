import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigator = useNavigate();

  const userLogin = (e) =>{
    e.preventDefault();
    navigator('/dashboard');
  }

  return (
    <div>
        <p className=' text-sm'>Login</p>
        <form className='loginform flex flex-col w-fit gap-5' onSubmit={userLogin}>
            <input type="text" name="username" id="username" placeholder='username'/>
            <input type="password" name="password" id="password" placeholder='password'/>
            <input className=' cursor-pointer' type='submit' value={"Login"}/>
        </form>
    </div>
  )
}

export default Login