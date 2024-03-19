import React from 'react';
// import logo from '@icons/logo.png';
// import facebook from '@icons/facebook.png';
// import linkedin from '@icons/linkedin.png';
// import insta from '@icons/insta.png';

const Social = () => {
  return (
    <section>
      <div className='flex flex-col justify-between items-start gap-4'>
        <img src='/icons/logo.png' alt='logo' />
        <p className='text-secondary py-10'>
          we protect them from hacking and viruses by filling gaps in them when
          they are used. We also create a control panel for your site for easy
          management so that it is 100% secure. We also care about its aesthetic
          appearance in addition to programming.
        </p>
        <div className='flex justify-center items-center gap-4'>
          <img src='/icons/facebook.png' alt='facebook' />
          <img src='/icons/insta.png' alt='insta' />
          <img src='/icons/linkedin.png' alt='linkedin' />
        </div>
      </div>
    </section>
  );
};

export default Social;
