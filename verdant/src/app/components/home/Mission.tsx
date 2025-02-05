import React from "react";
import { BackgroundBeamsWithCollision } from "../general/BackgroundCollision";

export default function Mission() {
  return (
    <div className=" mx-40 mt-20">
      <BackgroundBeamsWithCollision className="rounded-2xl relative p-8">
        <h1 className="absolute top-8 left-8 capitalize text-5xl text-primary font-bold ">
          VERDANT'S MISSION
        </h1>

        <p
          className="text-3xl max-w-6xl z-40 font-semibold font-display bg-black bg-opacity-30 rounded-3xl p-8 mt-20"
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          We are committed to crafting fresh, plant-based Indian cuisine that
          nourishes the body and soul. By sourcing locally and cooking with
          passion, we aim to create a dining experience that is flavorful,
          sustainable, and made with love.
        </p>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
