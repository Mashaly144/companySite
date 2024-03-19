import Link from 'next/link';
import React from 'react';

const Links = () => {
  return (
    <div>
      <h2 className='text-2xl mb-3'>Links</h2>
      <ul className='flex flex-col gap-2'>
        <li className='text-secondary '>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-secondary '>
          <Link href='/'>Classes</Link>
        </li>
        <li className='text-secondary '>
          <Link href='/'>Services</Link>
        </li>
        <li className='text-secondary '>
          <Link href='/'>Bmi</Link>
        </li>
        <li className='text-secondary '>
          <Link href='/'>Blog</Link>
        </li>
        <li className='text-secondary '>
          <Link href='/'>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Links;
