import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section>
      <h2 className='text-2xl font-semibold mb-3 text-secondary'>
        Our Services
      </h2>
      <ul className='flex flex-col gap-5'>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/phone.png' alt='logo' />
          <Link href='/'>+1036 782 62567</Link>
        </li>
        <li className='text-white flex items-center gap-2 cursor-pointer'>
          <img src='/icons/mail.png' alt='logo' />
          <Link href='/'>info@riyada.com</Link>
        </li>
        <li className='text-white flex items-center gap-4 cursor-pointer'>
          <img src='/icons/location.png' alt='logo' />
          <Link href='/'>Kingdom of Saudi Arabia</Link>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
