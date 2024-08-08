import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className="flex items-center md:flex-1">
        <Image
          src="/assets/icons/logo-icon.svg"
          alt="logo"
          width={32}
          height={32}
          className="md:mr-2"
        />
        <h1 className="hidden md:block">EasyDocs</h1>
      </Link>
      {children}
    </div>
  );
};

export default Header;
