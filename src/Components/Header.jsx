import React, { useState } from 'react'
// Logo  import
import Logo from '../assets/Logo_2.png'
import { Link } from 'react-router-dom'
// Icons import
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Header = () => {
   // State
   const [openMenu, setopenMenu] = useState(false)
  return (
    <>
    {/* Header Starts Here */}
    <header className='bg-[rgb(245,246,255)] text-[rgb(3,29,54)] sticky top-0 z-999 flex md:py-5 py-8 justify-between md:items-center md:px-15 px-5'>
      <img className='md:w-40 md:h-auto h-10 ' src={Logo} alt="Logo" />
      {/* Menu Icon */}
      <RiMenu4Fill onClick={() => setopenMenu(true)} className='text-4xl font-bold md:hidden'/>
      <nav className='md:flex hidden flex-col md:flex-row md:flex gap-38 md:items-center'>
        <IoMdClose className='text-4xl visible md:hidden'/>
        <ul className='md:flex gap-8 text-xl font-medium'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/service'>Service</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      
       <div className='md:flex gap-5 items-center'>
        <button className='cursor-pointer font-bold rounded-lg text-black text-lg '><Link to='/signin'>Sign In</Link></button>
        <button className='px-8 cursor-pointer py-2 rounded-lg text-white text-lg bg-[rgb(69,137,244)]'><Link to='/appointmentsForm'>Book Appointment</Link></button>
        </div>
        </nav>

           {
        openMenu && (
        <nav className='flex h-80 top-0 left-0 flex-col items-center absolute bg-white w-full'>
        <IoMdClose onClick={() => setopenMenu(false)} className='text-4xl  absolute right-5 top-8 md:hidden'/>
        <ul className='flex flex-col gap-3 pt-12 pb-3 text-xl font-medium'>
          <li><Link onClick={() => setopenMenu(false)} to='/'>Home</Link></li>
          <li><Link onClick={() => setopenMenu(false)} to='/about'>About</Link></li>
          <li><Link onClick={() => setopenMenu(false)} to='/service'>Service</Link></li>
          <li><Link onClick={() => setopenMenu(false)} to='/contact'>Contact</Link></li>
        </ul>
      
       <div className='flex flex-col gap-5 items-center'>
        <button className='text-xl font-bold cursor-pointer'><Link to='/signin'>Sign In</Link></button>
        <button className='px-8 cursor-pointer py-2 rounded-lg text-white text-lg bg-[rgb(69,137,244)]'><Link to='/appointmentsForm'>Book Appointment</Link></button>
        </div>
        </nav>

          )
        }

    </header>

 
  

</>
  )
}

export default Header