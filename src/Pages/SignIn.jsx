import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = ({setIsLogin}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error , setError] = useState('')
  const navigate = useNavigate()

  const btn = (e) => {
    e.preventDefault()

    const admin = 'admin'
    const pass = 'admin2026'
    if(username === admin && password === pass){
      localStorage.setItem('isLogin', 'true')
      setIsLogin(true)
      navigate('/Admin')
    } else{
      setError('Invalid username or password')
    }
  }


  return (
    <>
    
      <form onSubmit={btn} action="" className='bg-white p-6 rounded-lg shadow-md flex flex-col gap-4 w-[300px] mx-auto mt-10'>
        {error && <p className='text-red-500 text-center'>{error}</p>}
        
        <h2 className='text-center text-xl font-bold'>Sign In</h2>
        <input className='border outline-0 border-gray-300 rounded-md p-2' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input className='border outline-0 border-gray-300 rounded-md p-2' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600' type="submit">Sign In</button>
      </form>
    </>
  )
}

export default SignIn