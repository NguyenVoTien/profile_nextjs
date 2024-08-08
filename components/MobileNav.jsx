'use client';

//* LIB
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

//* IMPORT
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Logo from "@/public/assets/logoProfile.png"

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "services",
    path: "/services"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "contact",
    path: "/contact"
  },
]

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col space-y-0 overflow-y-auto">
        {/* logo */}
        <div className="mt-32 mb-16 text-center text-2xl">
          <Link href="/" className="flex flex-col items-center space-y-2">
            <Image src={Logo} alt="Logo" width={60} height={60} className="items-center object-contain rounded-full" />
            <h1 className="text-4xl font-semibold">TienFr <span className="text-accent">.</span></h1>
          </Link>
        </div>
        {/*nav  */}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className=
                {`${link.path === pathName && "text-accent border-b-2 border-accent"}
            text-xl capitalize hover:text-accent transition-all `} >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
