import React from 'react';
import Contact from './Contact';
import Social from './Social';
import Links from './Links';
import Support from './Support';

const Footer = () => {
  return (
    <footer className='overflow-hidden bg-slate-50'>
      <div className='pt-5 bg-neutral-600'>
        <div className='container mx-auto'>
          <div>
            <div className='grid grid-cols-12 justify-stretch items-start lg:justify-items-center section gap-10  md:gap-8 lg:gap-28'>
              <div className='col-span-12 md:col-span-12 lg:col-span-4'>
                <Social />
              </div>
              <div className='col-span-12 md:col-span-3 lg:col-span-2'>
                <Links />
              </div>
              <div className='col-span-12 md:col-span-3 lg:col-span-1'>
                <Support />
              </div>
              <div className='col-span-12 md:col-span-5 lg:col-span-3 xl:col-span-4'>
                <Contact />
              </div>
            </div>
            <p className='border-t border-t-background-light  text-center py-5'>
              Copyright 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
