import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
       
      >
        <Image
          src={`/easydocs.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default Hero;
