"use client";

import useGetData from "@Hooks/useGetData";
import ProjectCard from "@shared/ProjectCard";
import SectionHeader from "@shared/SectionHeader";
import Link from "next/link";
import React from "react";

const OurProjects = (props) => {
  const { data, loading } = useGetData("getProjecteHome");
  console.log(data);
  return (
    <section className="my-[70px] container">
      <SectionHeader title={"Our Projects"} />
      <div className="btn-fillter-holders">
        <button className="active">ALL</button>
        <button>Web Design</button>
        <button>Application</button>
      </div>
      {data?.data?.map((e, i) => {
        return <ProjectCard key={i} {...e} />;
      })}
      <Link href={"/projects"} className="button-link mt-[50px]">
        {" "}
        See More
      </Link>
    </section>
  );
};

export default OurProjects;
