"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
  animate,
  stagger,
} from "framer-motion";

import { cn } from "@/app/_lib/utils";
import { IconArrowRight, IconStarFilled } from "@tabler/icons-react";

export function CTA() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row justify-between items-center w-full md:px-8">
      <div className="flex flex-col">
        <h1 className="text-8xl  font-semibold">
          Order from <br />
          <span className="text-9xl font-bold  text-primary font-lead tracking-tighter">
            Verdant.
          </span>
        </h1>
        <p className="max-w-md mt-4 text-center md:text-left text-sm md:text-base mx-auto md:mx-0 text-neutral-600 dark:text-neutral-400">
          Place an order today and enjoy the finest, freshest meals with
          Verdant. Experience a culinary delight that's just a click away.
        </p>

        <FeaturedImages
          textClassName="lg:text-left text-center"
          className="lg:justify-start justify-start items-center"
          containerClassName="md:items-start"
          showStars
        />
      </div>
      <div className="flex space-x-4 justify-center lg:justify-start">
        <button className="px-6 py-3 bg-accent text-white rounded-xl font-medium  hover:bg-brown transition">
          Order Now
        </button>
        <button className="px-6 py-3 text-lightBrown hover:text-brown font-medium flex group">
          Talk to Us
          <IconArrowRight className="ml-2  group-hover:ml-3  transition-all" />
        </button>
      </div>
    </div>
  );
}

export const FeaturedImages = ({
  textClassName,
  className,
  showStars = false,
  containerClassName,
}: {
  textClassName?: string;
  className?: string;
  showStars?: boolean;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center mt-5 mb-10",
        containerClassName
      )}
    >
      <div
        className={cn(
          "flex flex-col sm:flex-row items-center justify-center mb-2",
          className
        )}
      >
        <div className="flex justify-center">
          {[...Array(5)].map((_, index) => (
            <IconStarFilled
              key={index}
              className={
                showStars ? "h-6 w-6 mb-1 text-yellow-400 mx-1" : "hidden"
              }
            />
          ))}
        </div>
      </div>
      <p
        className={cn(
          "text-neutral-400 text-sm text-left relative z-40",
          textClassName
        )}
      >
        Trusted by 27,000+ Customers
      </p>
    </div>
  );
};
