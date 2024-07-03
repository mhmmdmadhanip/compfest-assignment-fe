'use client'
import React, { useEffect, useState } from 'react'
import NavItem from './NavItem';
import { useAuth } from '../../../context/AuthContext';

const Navbar = () => {

  const { isLoggedIn } = useAuth();
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.removeEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 font-karla font-extralight z-50 flex justify-center transition-all duration-300 ease-in-out rounded-[80px]
    ${header ? 'w-[90%] self-center mx-auto mt-4 bg-white bg-opacity-50' : ' w-full bg-transparent'}`}>
        <div className={`flex items-center ${header ? 'w-[90%] py-2' : 'w-4/5 py-4'} justify-between`}>
            <div>
                <a href="/" className='flex flex-row items-center gap-3'>
                  <img src="sea-logo.svg" alt="" className='w-10'/>
                  <p className={`${header ? 'text-3xl' : 'text-4xl'} font-bold`}><span>Sea</span> Salon</p>
                </a>
            </div>
            <div className='flex gap-8'>
            {isLoggedIn ? (
            <>
              <NavItem href='/profile'>Profile</NavItem>
              <NavItem href='/logout'>Logout</NavItem>
            </>
          ) : (
            <>
              <NavItem href='/signin'>Sign In</NavItem>
              <NavItem href='/register'>Register</NavItem>
            </>
          )}
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
