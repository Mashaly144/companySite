import Link from 'next/link';
import React from 'react';
import LanguageDropdown from './LanguageDropdown ';
const AuthBtns = () => {
  return (
    <div className='hidden lg:flex'>
      <ul className=' flex justify-between items-center gap-4'>
        <LanguageDropdown />
        <li className='nav-link gradient-border'>
          <Link href='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthBtns;
