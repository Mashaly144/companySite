'use client';
import Image from 'next/image';
import classes from './serviceCard.module.css';
const ServiceCard = () => {
  return (
    <section className={classes.serviceCard}>
      <div className={classes.header}>
        <div className={classes.line} />
        <h1>Web Design</h1>
      </div>
      <div className={classes.imgHolder}>
        <img src='/assets/service.png' alt='img service' />
      </div>
      <div>
        <ul className={classes.list}>
          <li>Design the website professionally</li>
          <li>
            Use the best methods that help your site achieve the best results
            desired from it
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceCard;
