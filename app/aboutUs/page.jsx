"use client";
import useGetData from "@Hooks/useGetData";
import OurTeam from "@components/Us/OurTeam";
import PageHeader from "@shared/PageHeader";
import React from "react";
import "react-multi-carousel/lib/styles.css";
const Page = () => {
  const { data, loading } = useGetData("getAboutData");
  console.log(data);
  return (
    <>
      <PageHeader img={"/assets/cover.png"} pageName="About Us" />
      <div className="container">
        <div className=" flex items-center lg:justify-between justify-center flex-wrap">
          <div>
            <img className="w-100" src="/assets/this contact.svg" alt="" />
          </div>
          <div>
            <img className="w-100" src="/assets/about.svg" alt="" />
          </div>
        </div>
        <OurTeam data={data?.data?.teams} />
      </div>
    </>
  );
};

export default Page;
