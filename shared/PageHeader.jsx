"use client";
import Link from "next/link";
import classes from "./pageHeader.module.css";

const PageHeader = ({ pageName, img }) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className={classes.pageHeader}
    >
      <img src="/assets/sectionheader.svg" alt="" />
      <div className={classes.path}>
        <Link href={"/"}>Home{"  "}</Link>
        <span className="gradient-text">
          {" > "}
          {pageName}
        </span>
      </div>
      <h1 className={classes.title}>{pageName}</h1>
    </section>
  );
};

export default PageHeader;
