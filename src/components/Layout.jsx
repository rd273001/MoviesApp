import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Transition } from '@headlessui/react';

const Layout = () => {
  const [isOpen, setIsOpen] = useState( false );

  return (
    <div className='min-h-screen flex flex-col'>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex flex-shrink-0 gap-x-1 items-center'>
                <img src='moviesapp-logo.jpg' className='sm:size-6 size-5 rounded' />
                <Link to='/' className='text-white font-bold text-xl sm:text-2xl bg-gradient-to-br bg-clip-text text-transparent w-fit from-red-500 via-red-400 to-slate-100 shadow-cyan-300 drop-shadow-md'>MoviesApp</Link>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <NavLink to='/' className={ ( state ) => ( `${ state.isActive ? 'underline text-white' : '' } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium` ) }>
                    Home
                  </NavLink>
                  <NavLink to='/favorites' className={ ( state ) => ( `${ state.isActive ? 'underline text-white' : '' } text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium` ) }>
                    Favorites
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={ () => setIsOpen( !isOpen ) }
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded={ isOpen ? 'true' : 'false' }
              >
                {/* Screen reader text Open main menu ensures that users who rely on screen readers understand the button's function.
                    Visually hidden element, provides a textual description */}
                <span className='sr-only'>Open main menu</span>
                { !isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) }
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={ isOpen }
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          { ( ref ) => (
            <div className='md:hidden' id='mobile-menu'>
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <NavLink
                  to='/'
                  className={ ( state ) => ( `${state.isActive ? 'underline text-white' : '' } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`) }
                  onClick={ () => setIsOpen( false ) }
                >
                  Home
                </NavLink>
                <NavLink
                  to='/favorites'
                  className={ ( state ) => ( `${ state.isActive ? 'underline text-white' : '' } text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium` ) }
                  onClick={ () => setIsOpen( false ) }
                >
                  Favorites
                </NavLink>
              </div>
            </div>
          ) }
        </Transition>
      </nav>

      <main className='flex-grow'>
        <Outlet />
      </main>

      <footer className='bg-gray-800 py-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <p className='text-gray-400 text-sm'>
            &copy; { new Date().getFullYear() } MoviesApp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;