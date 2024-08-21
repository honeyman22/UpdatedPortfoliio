"use client";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

export interface IMenus {
  id: number;
  name: string;
  url: string;
}
export const menu: IMenus[] = [
  {
    id: 1,
    name: "Expertise",
    url: "/resident",
  },
  {
    id: 2,
    name: "Skills",
    url: "/security",
  },
  {
    id: 3,
    name: "Contact",
    url: "/management",
  },
  {
    id: 4,
    name: "Education",
    url: "/aboutus",
  },

  { id: 7, name: "Blogs", url: "/blog" },
];
const Header = () => {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <AnimatePresence mode="popLayout">
      <motion.header
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: "-200%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        animate={hidden ? "hidden" : "visible"}
        className="header fixed inset-x-0 top-0 z-[5000]  flex items-center justify-between
         bg-white  px-4 py-6 shadow-sm md:px-10  2xl:px-40"
      >
        <nav className="flex flex-row items-center justify-between w-full gap-10">
          <Link href="/">
            <Image src="/svg/logo.svg" alt="vms logo" width={40} height={40} />
          </Link>
          <ul className=" hidden md:flex  flex-row gap-10 text-gray10 ">
            {menu.map((item) => (
              <li
                key={item?.id}
                className={` ${
                  pathname === item?.url ? "font-medium text-primaryorange" : ""
                }  hover:text-primaryorange`}
              >
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="md:hidden">
            <li>
              <Hamburger />
            </li>
          </ul>
        </nav>

        {/* button */}

        <nav></nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
