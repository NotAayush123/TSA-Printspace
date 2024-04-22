"use client";

import { LayoutGrid } from "../ui/LayoutGrid";

export function FeaturedProjects() {
  return (
    <div className="h-screen py-20 w-full" id="featured">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">3D Printed Art-Trees</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Armed with the knowledge of 3D modeling and 3D printing, a background in
        architecture, and the will to liberate his creative mind, Korean
        designer Se Yoon Park has created a stunning art installation made up of
        3D printed trees.
      </p>
      <button
        className="animate-shimmer hover:animate-shimmerHover h-12 mb-3 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
        onClick={() => {
          window.location.href =
            "https://i.materialise.com/blog/en/amazing-3d-prints/";
        }}
      >
        View
      </button>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        3D Printed Geometric Jewelry
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This 3D printed brass pendant by Niels Lannoo that was entirely designed
        in SketchUp.
      </p>
      <button
        className="animate-shimmer hover:animate-shimmerHover h-12 mb-3 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
        onClick={() => {
          window.location.href =
            "https://i.materialise.com/blog/en/amazing-3d-prints/";
        }}
      >
        View
      </button>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        3D Printed Electronic Longboard
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        With the ambition of changing the future of urban transportation, this
        software engineer from Copenhagen has used the power of 3D printing to
        create an innovative range of electronic longboards.
      </p>
      <button
        className="animate-shimmer hover:animate-shimmerHover h-12 mb-3 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
        onClick={() => {
          window.location.href =
            "https://i.materialise.com/blog/en/amazing-3d-prints/";
        }}
      >
        View
      </button>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">3D Printed Violin</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An amazing and beautiful 3D printed violin, made by @3dvarius on
        Instagram.
      </p>
      <button
        className="animate-shimmer hover:animate-shimmerHover h-12 mb-3 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
        onClick={() => {
          window.location.href =
            "https://www.demilked.com/cool-things-people-3d-printed/";
        }}
      >
        View
      </button>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://i.materialise.com/blog/wp-content/uploads/2016/12/amazing-3d-prints-1024x682.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://i.materialise.com/blog/wp-content/uploads/2016/12/3d-printed-tiger-pendant-small.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://i.materialise.com/blog/wp-content/uploads/2016/12/3d-printed-longboard.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "http://static.demilked.com/wp-content/uploads/2019/06/5cf4d0c83a20e-BDrFD1YMfYg-png__700.jpg",
  },
];
