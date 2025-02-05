"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-32">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-16 md:pt-48 md:gap-16"
          >
            {/* Left - Timeline Indicator */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-brown border border-gray-400 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-24 md:text-6xl font-bold text-gray-700">
                {item.title}
              </h3>
            </div>

            {/* Right - Content */}
            <div className="relative pl-24 pr-4 md:pl-4 w-full font-body">
              <h3 className="md:hidden block text-2xl mb-6 text-left font-bold text-gray-700">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-10 left-8 top-0 overflow-hidden w-[3px] bg-gray-300 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-primary via-accent to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
