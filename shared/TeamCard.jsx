import React from "react";
import classes from "./TeamCard.module.css";
export default function TeamCard(props) {
  return (
    <div className={classes.holder}>
      <div className={classes.imgHolder}>
        <img src={props.image} alt="" />
      </div>
      <p className={classes.name}>{props.name}</p>
      <p className={classes.title}>{props.position}</p>
    </div>
  );
}
