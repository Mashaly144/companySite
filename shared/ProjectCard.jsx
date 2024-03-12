'use client';
import classes from './projectCard.module.css';
const ProjectCard = () => {
  return (
    <section className={classes.projectCard}>
      <div>
        <img src='/assets/project-img.png' alt='project-img' />
        <div className={classes.info}>
          <p>Lorem, ipsum dolor.</p>
          <h4>Mobile Applecation</h4>
          <div>
            <span>#HTML</span>
          </div>
          <button>View Project</button>
        </div>
      </div>
      <div>
        <h2>Project 1</h2>
      </div>
    </section>
  );
};

export default ProjectCard;
