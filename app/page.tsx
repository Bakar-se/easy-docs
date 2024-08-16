import Header from "@/components/landingpagecomponents/Header";
import Features from "@/sections/Features";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <div className="my-12">
        <Pricing />
      </div>
    </div>
  );
};

export default page;
