import React from "react";
import { Vortex } from "../ui/Vortex";
import StyledButton from "../ui/StyledButton";

export function CallToAction() {
  return (
    <div className="w-full  rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Join thousands of members!
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <StyledButton
            text="Get Started!"
            padding="15px 20px"
            font="25px"
            href="/signup"
          />
        </div>
      </Vortex>
    </div>
  );
}
