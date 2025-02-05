import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  const links = [
    { title: "About Us", href: "/about" },
    { title: "Menu", href: "/menu" },
    { title: "Contact", href: "#contact" },
  ];

  const additionals = [
    { title: "Work Log", href: "/worklog" },
    { title: "Works Cited", href: "/workscited" },
    { title: "Copyright Checklist", href: "/copyright" },
  ];

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <div className="mt-2 ml-2">A Local Vegetarian Indian Resturant</div>
        </div>
        <div className="grid grid-cols-2 gap-10 items-end mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-end space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Key Pages
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {links.map((link, idx) => (
                <li key={"link" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-neutral-800 "
                    href="/products"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Additional Info
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {additionals.map((additional, idx) => (
                <li key={"auth" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-neutral-800 "
                    href="/products"
                  >
                    {additional.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <span className="text-5xl font-bold  text-primary font-lead tracking-tighter">
        verdant.
      </span>
    </Link>
  );
};
