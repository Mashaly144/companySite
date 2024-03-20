import React from 'react';

const Contact = () => {
  return (
    <section className='py-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-8 items-start'>
          <div className='flex items-center justify-start lg:justify-start  gap-4 flex-1'>
            <img src='/icons/location.png' alt='icon' />
            <p>5th flore, 700/D kings roed, green lane new york -1782</p>
          </div>
          <div className='flex items-center justify-start lg:justify-center gap-4 flex-1'>
            <img src='/icons/phone.png' alt='icon' />
            <p>+103678262567</p>
          </div>
          <div className='flex items-center justify-start lg:justify-end gap-4 flex-1'>
            <img src='/icons/mail.png' alt='icon' />
            <p>info@bermeejo.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
