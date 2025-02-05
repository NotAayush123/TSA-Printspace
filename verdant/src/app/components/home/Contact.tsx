"use client";
import React, { useState } from "react";
import { IconToolsKitchen3 } from "@tabler/icons-react";
import { useId } from "react";
import { cn } from "@/app/_lib/utils";
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",

    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");

  const validateFields = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email Address is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Clear error when user types
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateFields()) {
      setFeedbackMessage("");
      setFeedbackColor("");
      return;
    }

    setFeedbackMessage("Message sent successfully!");
    setFeedbackColor("text-green-500");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-6 md:py-20 lg:grid-cols-2"
      id="contact"
    >
      <div className="relative flex flex-col items-center overflow-hidden lg:items-start">
        <div className="flex items-start justify-start">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <IconToolsKitchen3 className="h-8 w-8 text-primary" />
          </FeatureIconContainer>
        </div>
        <h2 className="font-display mt-9 bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-left text-xl font-bold text-transparent dark:from-neutral-200 dark:to-neutral-300 md:text-3xl lg:text-7xl">
          Contact{" "}
          <span className=" lg:text-8xl md:text-4xl text-2xl  font-bold  text-primary font-lead tracking-tighter">
            Us.
          </span>
        </h2>
        <p className="mt-8 max-w-lg text-center text-base text-neutral-600 dark:text-neutral-400 md:text-left">
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </p>
        <Image
          src="https://i.pinimg.com/736x/9b/12/d4/9b12d4492b8f9141ddcb98ea73759057.jpg"
          alt="indian food"
          width={750}
          height={48}
          className="rounded-3xl mt-10"
          draggable="false"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-20 relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4  sm:p-10"
      >
        <Grid size={20} />
        <div className="relative z-20 mb-4 w-full">
          <label
            className="my-2 mb-4 inline-block text-md  font-medium text-neutral-600 "
            htmlFor="name"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="mb-3 h-10 w-full rounded-md border border-transparent bg-white pl-4 text-md text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
          {errors.name && (
            <span className="text-red-500 text-md font-normal ">
              {errors.name}
            </span>
          )}
        </div>

        <div className="relative z-20 mb-4 w-full">
          <label
            className="my-2 mb-4 inline-block text-md  font-medium text-neutral-600 "
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            value={formData.email}
            onChange={handleChange}
            className="mb-3 h-10 w-full rounded-md border border-transparent bg-white pl-4 text-md text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
          {errors.email && (
            <span className="text-red-500 text-md  font-normal">
              {errors.email}
            </span>
          )}
        </div>

        <div className="relative z-20 mb-4 w-full">
          <label
            className="my-2 mb-4 inline-block text-md  font-medium text-neutral-600 "
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            className="mb-3 w-full rounded-md border border-transparent bg-white pl-4 pt-4 text-md text-neutral-700 placeholder-neutral-500 shadow-input outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white"
          />
          {errors.message && (
            <span className="text-red-500 text-md  font-normal">
              {errors.message}
            </span>
          )}
        </div>

        <button className="w-full px-6 py-3 text-sm font-bold rounded-full bg-accent text-white  hover:bg-lightBrown transition-all  mr-10">
          Order
        </button>

        {feedbackMessage && (
          <p className={`mt-4 text-xl ${feedbackColor}`}>{feedbackMessage}</p>
        )}
      </form>
    </div>
  );
}

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] ",
        className
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-gray-50 ",
          className
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-primary to-transparent dark:h-[8px] dark:blur-sm"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
