"use client";

import useGetData from "@Hooks/useGetData";
import PageHeader from "@shared/PageHeader";
import ProjectCard from "@shared/ProjectCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { data, loading } = useGetData("getProjects");

  return (
    <>
      <PageHeader img={"/assets/cover.png"} pageName="Project" />
      <section className="my-[100px] container">
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
    </>
  );
};

export default Page;
