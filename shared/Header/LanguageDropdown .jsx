'use client';
import React, { useState } from 'react';
import classes from './LanguageDropdown.module.css';
const LanguageDropdown = () => {
  const [currentLanguage, setCurrentLanguage] = useState('EN');

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div className={classes.dropdown}>
      <button className={`${classes.dropbtn} nav-link gradient-border`}>{currentLanguage}</button>
      <div className={classes.dropdownContent}>
        <button className=' ' onClick={() => changeLanguage('EN')}>EN</button>
        <button className=' ' onClick={() => changeLanguage('Ar')}>Ar</button>
      </div>
    </div>
  );
};

export default LanguageDropdown;
