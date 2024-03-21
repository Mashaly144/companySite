import Link from 'next/link';
import React from 'react';

const Links = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-3 text-secondary'>Our Links</h2>
      <ul className='flex flex-col gap-2'>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/'>Home</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/aboutUs'>About Us</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/projects'>Projects</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/services'>Services</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/contactUs'>Contact Us</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/privacy'>Privacy Policy</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/terms'>Terms, Conditions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
