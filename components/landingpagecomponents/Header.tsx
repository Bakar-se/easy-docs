import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <nav className="w-3/4 mx-auto">
      <div className=" flex justify-between items-center py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/icons/logo-icon.svg"
            alt="logo"
            width={32}
            height={32}
            className="md:mr-2"
          />
          <h1 className="hidden md:block">EasyDocs</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/sign-in">
            <Button variant="link" className="text-white">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="gradient-blue">
              Get Started <ArrowRight className="ml-1" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
