import Link from 'next/link';
import React from 'react';

const Support = () => {
  return (
    <div>
      <h2 className='text-2xl mb-3'>Support</h2>
      <ul className='flex flex-col gap-2'>
        <li className='text-secondary'>
          <Link href='/'>Login</Link>
        </li>
        <li className='text-secondary'>
          <Link href='/'>My Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Support;
