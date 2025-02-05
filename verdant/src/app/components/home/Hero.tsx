import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[80vh] mt-24 grid grid-rows-[2fr_1fr] lg:grid-rows-1 lg:grid-cols-2 px-6  lg:px-32  gap-16 xl:gap-8 items-center">
      {/* Left Side - Text */}
      <div className="space-y-6 text-center lg:text-left">
        <span className="text-[12rem] font-bold  text-primary font-lead tracking-tighter">
          verdant.
        </span>
        <p className="text-lg text-gray-600 mr-36">
          Fresh, Indian plant-based meals made with locally sourced ingredients,
          crafted for rich flavors and wholesome nourishment.
        </p>

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

      {/* Right Side - Image */}
      <div className="flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Image"
          width={1000}
          height={500}
          className=" rounded-xl shadow-lg"
        />
      </div>

      {/* Categories Section */}
      <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            name: "Appetizers",
            img: "https://media.istockphoto.com/id/1334115358/photo/cabbage-manchurian.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Cc0h0HIZgyKq3qEMX5v1DjDYrHAqTnOqHWc0l-M33I=",
          },
          {
            name: "Entrees",
            img: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Desserts",
            img: "https://images.unsplash.com/photo-1727018427695-35a6048c91e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            name: "Beverages",
            img: "https://images.unsplash.com/photo-1609670438772-9cf3afc5052b?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ].map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={category.img}
              alt={category.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white font-bold text-2xl">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
