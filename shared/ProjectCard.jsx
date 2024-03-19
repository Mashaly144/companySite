'use client';
import Link from 'next/link';
import classes from './projectCard.module.css';
const ProjectCard = () => {
  return (
    <section className={classes.projectCard}>
      <div className={classes.infoCard}>
        <img src='/assets/project-img.png' alt='project-img' />
        <div className={classes.info}>
          <p>Express Design Mobile</p>
          <h4>Mobile Applecation</h4>
          <div>
            <span>#HTML</span>
            <span>#css</span>
            <span>#HTML</span>
          </div>
          <Link href={'/'} className={classes.infoBtn}>
            <button>View Project</button>
          </Link>
        </div>
      </div>
      <div>
        <h2>Project 1</h2>
      </div>
    </section>
  );
};

export default ProjectCard;
