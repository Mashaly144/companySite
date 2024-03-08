"use client";
import classes from "./SectionHeader.module.css";
const SectionHeader = ({ title }) => {
  return (
    <div className={classes.holder}>
      <h1 className={classes.header}>{title}</h1>
    </div>
  );
};

export default SectionHeader;
