'use client';
import React from 'react';
import classes from './ReviewCard.module.css';

const ReviewCard = () => {
  return (
    <div className={classes.reviewCard}>
      <div className={classes.infoCard}>
        <div className={classes.quote}>
          <img src='/icons/quote.png' alt='quoteImg' />
        </div>
        <p className={classes.infoDescription}>
          Many clients point to tangible health benefits of gym training, such
          as improved fitness, weight loss, and increased muscle strength.
        </p>
        <div className={classes.reviewNameInfo}>
          <img src='/assets/review1.png' alt='avatarReview' />
          <div>
            <h4>Someone Famous</h4>
            <p>Creative Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
