import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 px-4 md:px-16 lg:px-28'>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        
        <div>
            <h2 className='text-lg font-bold mb-4 text-gray-300'>Abut Us</h2>
            <p className='text-gray-300'>This project fetches real product data from an external REST API, implements search and category filtering, global cart state with Context API, dark mode using Tailwind's class strategy, and responsive UI architecture.</p>
        </div>
        <div>
            <h2 className='text-lg font-bold mb-4 text-gray-300'>Quick Links</h2>
            <ul>
                <li>
                    <a href="" className='hover:underline text-gray-300'>Home</a>
                    </li>
                    <li>
                    <a href="" className='hover:underline text-gray-300'>About</a>
                    </li>
                    <li>
                    <a href="" className='hover:underline text-gray-300'>Contact</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className='text-lg font-bold mb-4 text-gray-300'>Follow Us</h2>
            <ul className='flex space-x-4'>
                <li> 
                    <a href="" className='hover:underline text-gray-300'><FaFacebookF className='text-blue-500' /></a>
                    </li>
                    <li>
                        
                    <a href="" className='hover:underline text-gray-300'><FaXTwitter className='texty-sky-500' /></a>
                    </li>
                    <li>
                        
                    <a href="" className='hover:underline text-gray-300'><FaInstagram className='text-pink-500' /></a>
                </li>
            </ul>
        </div>
      </div>
      <div className='text-center text-gray-500 p-10'>
        <p>
        &copy; {currentYear} PakMart. All rights reserved.
      </p>
      </div>
    </footer>
  )
}

export default Footer
