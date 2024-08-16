import { pricing } from "@/constants/data";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Pricing = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto grid gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        {pricing.map((price) => (
          <div
            key={price.title}
            className="grid gap-6 rounded-lg border bg-background p-6 shadow-sm"
          >
            <div className="grid gap-2">
              <h3 className="text-2xl font-bold">{price.title}</h3>
              <p className="text-muted-foreground">
                Perfect for individuals and small teams.
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{price.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className=" text-muted-foreground">Feature:</p>
            <ul className="grid gap-2 text-muted-foreground">
              {price.features.map((feature) => (
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className=" text-muted-foreground">Benefits:</p>

            <ul className="grid gap-2 text-muted-foreground">
              {price.benefits.map((benefit) => (
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 fill-primary" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className=" mt-4 h-full w-full flex-col flex justify-end">
              <Button
                disabled={price.cta === "Coming soon" ? true : false}
                className={`${
                  price.cta === "Coming soon" ? "" : "gradient-blue"
                }`}
                size="lg"
              >
                <Link className="w-full" href="/sign-in">
                  {price.cta}
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

function CheckIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
