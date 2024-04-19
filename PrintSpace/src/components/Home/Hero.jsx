import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { SimpleGrid, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

import Model from "../../assets/browser3DModel.png";
import { useMediaQuery } from "@mantine/hooks";
export function Hero() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <SimpleGrid
      cols={mobile ? 1 : 2}
      className="h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
    >
      <div className="flex md:items-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex md:justify-center flex-col">
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            transition={{ delay: 1, type: "spring", velocity: 0.1 }}
            className="flex justify-center items-center flex-col mt-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">
              3D print with{" "}
              <Text
                variant="gradient"
                gradient={{ from: "blue", to: "red", deg: 234 }}
                className="text-5xl font-bold mb-3 md:text-7xl mt-3"
              >
                Printspace
              </Text>
            </h1>

            <motion.p
              className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto mb-3"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{ delay: 1.3, type: "spring", velocity: 0.1 }}
            >
              Come find your next 3D makerspace with our easy to use and
              reliable website!
            </motion.p>
            <button
              style={{ transition: "all .5s" }}
              className="inline-flex h-12 animate-shimmer text-white duration-500 items-center hover:shadow-lg  hover:shadow-slate-50 hover:-translate-y-1 justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors"
            >
              Get started!
            </button>
          </motion.div>
        </div>{" "}
      </div>

      <div className="w-full flex md:items-center">
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{ delay: 1, type: "spring", velocity: 0.1 }}
        >
          <img
            src={Model}
            alt="3D Model"
            className="rounded-xl scale-200"
            draggable="false"
            width={900}
            height={900}
          />
        </motion.div>
      </div>
    </SimpleGrid>
  );
}
