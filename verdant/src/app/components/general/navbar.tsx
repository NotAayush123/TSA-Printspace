"use client";
import { cn } from "@/app/_lib/utils";
import { IconMenu2, IconShoppingBag, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      <NavbarComponent />
    </div>
  );
}

const NavbarComponent = () => {
  const navItems = [
    { name: "About Us", link: "#" },
    { name: "Menu", link: "#" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({ navItems }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        "hidden lg:flex flex-row bg-white items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full",
        "sticky top-4 inset-x-0 mt-4 shadow-md" // Added sticky, top-4, and mt-4
      )}
    >
      <Logo />
      <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-white transition duration-200">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="text-neutral-600 relative px-4 py-2"
            key={`link=${idx}`}
            href={navItem.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="w-full h-full absolute inset-0 bg-primary rounded-full"
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <button className="hidden md:block px-6 py-3 text-sm font-bold rounded-full  text-white  bg-lightBrown hover:bg-gray-400 transition-all  mr-2">
        <IconShoppingBag />
      </button>
      <button className="hidden md:block px-6 py-3 text-sm font-bold rounded-full bg-accent text-white  hover:bg-lightBrown transition-all  mr-10">
        Order
      </button>
    </motion.div>
  );
};

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        animate={{
          borderRadius: open ? "4px" : "2rem",
        }}
        key={String(open)}
        className="flex relative flex-col lg:hidden w-full justify-between items-center bg-white max-w-[calc(100vw-2rem)] mx-auto px-4 py-2 mt-4 shadow-md" // Added mt-4 and shadow-md
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          {open ? (
            <IconX className="text-black" onClick={() => setOpen(!open)} />
          ) : (
            <IconMenu2 className="text-black" onClick={() => setOpen(!open)} />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-neutral-600"
                >
                  <motion.span className="block">{navItem.name}</motion.span>
                </Link>
              ))}
              <div className="flex w-full">
                <button className="px-6 py-3 text-sm font-bold rounded-full  text-white  bg-lightBrown hover:bg-gray-400 transition-all  mr-2">
                  <IconShoppingBag />
                </button>
                <button className="w-full px-6 py-3 text-sm font-bold rounded-full bg-accent text-white  hover:bg-lightBrown transition-all  mr-10">
                  Order
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <span className="text-5xl font-bold  text-primary font-lead tracking-tighter">
        verdant.
      </span>
    </Link>
  );
};
