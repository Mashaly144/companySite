'use client';
import Link from 'next/link';
import classes from './pageHeader.module.css';

const PageHeader = ({ pageName }) => {
  return (
    <section className={classes.pageHeader}>
      <div className={classes.path}>
        <Link href={'/home'}>Home{'  '}</Link>
        <span className='gradient-text'>
          {' > '}
          {pageName}
        </span>
      </div>
      <h1 className={classes.title}>{pageName}</h1>
    </section>
  );
};

export default PageHeader;
