//* LIB
import Link from "next/link";
import React from "react";

//* Import
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

import Logo from "@/public/assets/logoProfile.png"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={40} height={40} className="object-contain rounded-full" />
          <h1 className="text-2xl font-semibold flex items-center">
            TienFrDev
            <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navbar and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>HIRE ME</Button>
          </Link>
        </div>

        {/* mobile navbar */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
};

export default Header;