"use client";
import Image from "next/image";
import classes from "./serviceCard.module.css";
const ServiceCard = (props) => {
  return (
    <section className={classes.serviceCard}>
      <div className={classes.header}>
        <div className={classes.line} />
        <h1>{props.title}</h1>
      </div>
      <div className={classes.imgHolder}>
        <img src={props.image} alt="img service" />
      </div>
      <div>
        <ul className={classes.list}>
          <li>{props.description} </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceCard;
