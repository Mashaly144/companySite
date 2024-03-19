"use client";

import SectionHeader from "@shared/SectionHeader";
import TeamCard from "@shared/TeamCard";
import React from "react";
import Carousel from "react-multi-carousel";

export default function OurTeam({ data }) {
  console.log(data);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const teamData = [
    { img: "/assets/teamavatar.png", name: "Ahmed Tawfiq", job: "CEO" },
    {
      img: "/assets/teamavatar.png",
      name: "Ahmed Wahid",
      job: "Front End Developer",
    },
    {
      img: "/assets/teamavatar.png",
      name: "Abdallah Mashaly",
      job: "Front End Developer",
    },
    {
      img: "/assets/teamavatar.png",
      name: "Ahmed El saeid",
      job: "Back End Developer",
    },
    {
      img: "/assets/teamavatar.png",
      name: "Yasmina Elfarhaty",
      job: "Back End Developer",
    },
    { img: "/assets/teamavatar.png", name: "Eman Essam", job: "UI/UX" },
  ];
  return (
    <div className="my-[100px]">
      <SectionHeader title={"Our Team"} />
      {data && (
        <Carousel className="team-carousel" infinite responsive={responsive}>
          {data?.map((e, i) => {
            return <TeamCard {...e} key={i} />;
          })}
        </Carousel>
      )}
    </div>
  );
}
