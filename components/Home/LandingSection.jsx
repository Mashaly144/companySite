import React from "react";

export default function LandingSection() {
  return (
    <>
      <section className="landing-section">
        <h1>Bermejo Company</h1>
        <p>
          Design websites that embody your <br /> vision in a unique style
        </p>
        <butto className="button-link">order now</butto>
      </section>
      <div className=" container">
        <div className="count-down-holder flex items-center gap-[40px]">
          <h1>Today Special Offers</h1>
          <img src="/assets/Line 2.svg" alt="" />
          <img src="/assets/timer.svg" alt="" />
        </div>
      </div>
    </>
  );
}
