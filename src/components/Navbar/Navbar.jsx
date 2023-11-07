import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <section className='max-w-7xl  container font-my-proxi-nova-regular'>
      <div className='main-nav flex  justify-between pt-5 '>
        <div>
        <Link to='/'>
          <img className='pl-4 lg:pl-0' src='https://wpastra.com/wp-content/uploads/2019/05/astra-logo.svg' />
          </Link>
        </div>
        <div className='lg:flex hidden'>
          <ul className='flex nav-items text-black'>
            <Link to='/dashboard'>

              <li>Dashboard</li>
            </Link>
            <Link to='/courses'>

              <li>Courses</li>
            </Link>
            <li>Pricing</li>

            <a href='https://github.com/krishmk1009' target='blank'>

              <button className='text-black border-2 border-blue-500 p-2 px-8 ml-5 rounded-3xl text-14 hover:bg-blue-500 hover:text-white'>GITHUB</button>
            </a>
          </ul>
        </div>
        {/* Mobile menu */}
        <div className='lg:hidden relative mr-3'>
          <button
            onClick={toggleMobileMenu}
            className='text-white border-2 p-2 px-3 rounded-3xl'
          >
            {mobileMenu ? 'Close' : 'Menu'}
          </button>
          {mobileMenu && (
            <div className='absolute top-16 right-0 bg-white text-black p-5 rounded shadow-lg'>
              <ul className='flex flex-col space-y-3'>
                <li>Starter Templates</li>
                <li>Pro</li>
                <li>Features</li>
                <li>WooCommerce</li>
                <li>Testimonial</li>
                <li>Pricing</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Navbar;