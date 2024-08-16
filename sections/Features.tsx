import { ExpandableCard } from "@/components/ui/ExpandableCard";
import React from "react";

const Features = () => {
  return (
    <section className="w-full py-8 md:py-24 lg:py-32">
      <div className="w-3/4 mx-auto space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg gradient-blue px-3 py-1 text-sm">
              Features
            </div>
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Why Choose <span className="text-blue-400">EasyDocs</span>?
            </h2>
          </div>
        </div>
        <div className="py-10">
          <ExpandableCard />
        </div>
      </div>
    </section>
  );
};

export default Features;
