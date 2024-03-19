"use client";

import useGetData from "@Hooks/useGetData";
import PageHeader from "@shared/PageHeader";
import ServiceCard from "@shared/ServiceCard";
import Link from "next/link";
import React from "react";

const Page = () => {
  const { data, loading } = useGetData("getServices");

  return (
    <>
      <PageHeader img={"/assets/cover.png"} pageName="Services" />
      <section className="my-[70px] container">
        {data?.data?.map((e, i) => {
          return <ServiceCard key={i} {...e} />;
        })}
      </section>
    </>
  );
};

export default Page;
