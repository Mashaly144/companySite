import React from 'react';
import NavBar from './NavBar';
import AuthBtns from './AuthBtns';

const Header = () => {
  return (
    <header className='absolute top-0 w-full z-10 py-8 px-10 flex items-center justify-between'>
      <img src='/icons/logo.png' alt=' logo' />
      <img src='/icons/menu.png' alt='' className='flex lg:hidden' />
      <NavBar />
      <AuthBtns />
    </header>
  );
};

export default Header;
