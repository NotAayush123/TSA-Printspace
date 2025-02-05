import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";

export function AboutTimeline() {
  const data = [
    {
      title: "2019 - The Vision",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-xl font-normal mb-8">
            The idea for our restaurant was born out of a passion for fresh,
            plant-based Indian cuisine. What started as a small home kitchen
            experiment soon became a vision to bring authentic and flavorful
            dishes to the community.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://i.pinimg.com/736x/4d/bd/33/4dbd33b042029ffd75b20bf8efcb3ae1.jpg"
              alt="restaurant concept"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full md:h-44 lg:h-[70vh] w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 - Grand Opening",
      content: (
        <div>
          <p className="text-gray-900  text-xs md:text-xl font-normal mb-8">
            After months of planning and perfecting recipes, our restaurant
            officially opened its doors. Despite the challenges of the year, we
            quickly built a loyal customer base that loved our fresh, locally
            sourced ingredients and vibrant flavors.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://i.pinimg.com/736x/c2/b5/4c/c2b54c7149ef55a5d02f1c2fe54b1425.jpg"
              alt="restaurant opening"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full md:h-44 lg:h-full w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021 - Growing Community",
      content: (
        <div>
          <p className="text-gray-900  text-xs md:text-xl font-normal mb-8">
            Word spread fast, and our restaurant became a neighborhood favorite.
            We introduced seasonal menus, new fusion dishes, and expanded our
            partnerships with local farms to ensure the freshest ingredients.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://i.pinimg.com/736x/28/a3/e3/28a3e30d151fedec1f13c0590767e737.jpg"
              alt="community dining"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full md:h-44 lg:h-full w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Expanding the Menu",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-xl font-normal mb-8">
            Listening to our customers, we introduced new dishes, including
            gluten-free and high-protein options. Our signature plant-based
            thali became a best-seller, and we started offering catering
            services.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://i.pinimg.com/736x/7e/a1/39/7ea139e991515a2f629fba6572e3d040.jpg"
              alt="plant-based food"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full md:h-44 lg:h-full w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 - Recognized & Awarded",
      content: (
        <div>
          <p className="text-gray-900  text-xs md:text-xl font-normal mb-8">
            Our dedication to sustainability and fresh ingredients earned us
            recognition in local food awards. We were featured in magazines and
            TV segments, highlighting our commitment to plant-based excellence.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://i.pinimg.com/736x/5a/e4/7b/5ae47be5d4a4b18b749b80a7601a111e.jpg"
              alt="restaurant award"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full md:h-44 lg:h-full w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Looking Ahead",
      content: (
        <div>
          <p className="text-gray-900 text-xs md:text-xl font-normal mb-8">
            This year, we are focused on sustainability and innovation. From
            launching a farm-to-table initiative to expanding our delivery
            options, we continue to serve fresh, delicious, and conscious
            cuisine.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="https://i.pinimg.com/736x/9b/12/d4/9b12d4492b8f9141ddcb98ea73759057.jpg"
              alt="restaurant future"
              width={500}
              height={500}
              className="rounded-lg object-cover h-full md:h-44 lg:h-full w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full  mt-32">
      <h1 className="text-8xl text-center font-semibold">
        About{" "}
        <span className="text-9xl font-bold  text-primary font-lead tracking-tighter">
          Verdant.
        </span>
      </h1>
      <Timeline data={data} />
    </div>
  );
}
