"use client";
import Link from "next/link";
import classes from "./projectCard.module.css";
const ProjectCard = (props) => {
  return (
    <section className={classes.projectCard}>
      <div className={classes.infoCard}>
        <img src={props.image} alt="project-img" />
        <div className={classes.info}>
          <p>{props.category} </p>
          <h4>{props.description} </h4>
          <div>
            <span>#{props.subcategory}</span>
          </div>
          <Link href={props.link} className={classes.infoBtn}>
            <button>View Project</button>
          </Link>
        </div>
      </div>
      <div>
        <h2>{props.name}</h2>
      </div>
    </section>
  );
};

export default ProjectCard;
