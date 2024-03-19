"use client";

import useGetData from "@Hooks/useGetData";
import SectionHeader from "@shared/SectionHeader";
import ServiceCard from "@shared/ServiceCard";
import Link from "next/link";
import React, { useEffect } from "react";

const OurServices = (props) => {
  const { data, loading } = useGetData("getServiceHome");

  return (
    <section className="my-[100px] container">
      <SectionHeader title={"Our Services"} />
      {data?.data?.map((e, i) => {
        return <ServiceCard key={i} {...e} />;
      })}
      <Link href={"/services"} className="button-link mt-[50px]">
        {" "}
        See More
      </Link>
    </section>
  );
};

export default OurServices;
