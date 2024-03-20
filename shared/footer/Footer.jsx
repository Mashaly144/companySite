import React from 'react';
import Contact from './Contact';
import Social from './Social';
import Links from './Links';
import Support from './Support';
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer overflow-hidden '>
      <div className='pt-5'>
        <div className='container mx-auto'>
          <div>
            <div className='grid grid-cols-12 justify-stretch items-start lg:justify-items-center gap-10 md:gap-8 lg:gap-28 py-8'>
              <div className='col-span-12 md:col-span-12 lg:col-span-4'>
                <Social />
              </div>
              <div className='col-span-12 md:col-span-3 lg:col-span-2'>
                <Links />
              </div>
              <div className='col-span-12 md:col-span-3 lg:col-span-3'>
                <Support />
              </div>
              <div className='col-span-12 md:col-span-5 lg:col-span-3'>
                <Contact />
              </div>
            </div>
            <p className='border-t border-t-background-light border-t-purple-900  text-center py-5 text-white'>
              Copyrighe 2024 All rights reserved. Powered by{' '}
              <span className='gradient-text'>Bermejo Company</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
