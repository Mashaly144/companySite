import Link from 'next/link';
import React from 'react';

const Support = () => {
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-3 text-secondary'>
        Our Services
      </h2>
      <ul className='flex flex-col gap-2'>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/'>Web Design</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/star.png' alt='logo' />
          <Link href='/'>Mobile Application</Link>
        </li>
      </ul>
    </div>
  );
};

export default Support;
