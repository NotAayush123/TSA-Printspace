import { SimpleGrid } from "@mantine/core";
import { cn } from "../../../utils/cn";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import {
  IconBrandSpeedtest,
  IconFreeRights,
  IconLock,
  IconTableColumn,
  IconUserHeart,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoGridFeatures() {
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      y: -30,
      // Initial position (no animation)
    },
    hover: {
      y: 10, // Animation when hovering
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 items-center justify-center"
      animate="initial"
      variants={variants}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{
        duration: 1.3,
        type: "spring",
      }}
    >
      <div className="shadow-xl flex items-center justify-center">
        <IconLock size={150} color="white" className="z-10" />
        <svg
          viewBox="0 0 1256 1298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-full h-60 absolute"
        >
          <g filter="url(#filter0_f_5_6)">
            <ellipse
              cx="628"
              cy="649"
              rx="378"
              ry="399"
              fill="url(#paint0_linear_5_6)"
            />
            <path
              d="M1005.5 649C1005.5 869.111 836.462 1047.5 628 1047.5C419.538 1047.5 250.5 869.111 250.5 649C250.5 428.889 419.538 250.5 628 250.5C836.462 250.5 1005.5 428.889 1005.5 649Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_5_6"
              x="0"
              y="0"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_5_6"
              />
            </filter>
            <linearGradient
              id="paint0_linear_5_6"
              x1="628"
              y1="250"
              x2="628"
              y2="1048"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C4B5FD" />
              <stop offset="1" stopColor="#FDA4AF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 0.7,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2"
      whileInView={{
        width: ["0%", "100%"],
        transition: {
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.23] rounded-lg flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 20,
      rotate: -5,
    },
  };
  const second = {
    initial: {
      x: 0,
      rotate: 0,
    },
    hover: {
      x: 20,
      rotate: 5,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2"
    >
      <SimpleGrid cols={3}>
        <motion.div
          variants={first}
          className="flex items-center justify-center w-full"
        >
          <div className="w-40 max-sm:w-40 h-full bg-red-300 rounded-xl mx-3"></div>
          <div className="w-20 max-sm:w-30 h-full bg-yellow-300 rounded-xl mr-3"></div>
          <div className="w-10  h-full bg-blue-300 rounded-xl max-sm:hidden"></div>
        </motion.div>
        <div className="items-center justify-center flex">
          <h1 className="text-white text-center font-bold text-3xl">===</h1>
        </div>
        <motion.div
          variants={second}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="w-full h-20 bg-red-300 rounded-xl mb-2"></div>
          <div className="w-full h-20 bg-yellow-300 rounded-xl "></div>
        </motion.div>
      </SimpleGrid>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      y: 0, // Initial position (no animation)
    },
    hover: {
      y: 10, // Animation when hovering
    },
  };
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 items-center justify-center"
      animate="initial" // Animation only occurs when initially rendered
      variants={variants}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{
        duration: 1.3,
        type: "spring",
      }}
    >
      <div className="shadow-xl flex items-center justify-center">
        <IconFreeRights size={150} color="white" className="z-10" />
        <svg
          className="h-60 absolute"
          viewBox="0 0 1256 1298"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_58_10)">
            <ellipse
              cx="628"
              cy="649"
              rx="378"
              ry="399"
              fill="url(#paint0_linear_58_10)"
            />
            <path
              d="M1005.5 649C1005.5 869.111 836.462 1047.5 628 1047.5C419.538 1047.5 250.5 869.111 250.5 649C250.5 428.889 419.538 250.5 628 250.5C836.462 250.5 1005.5 428.889 1005.5 649Z"
              stroke="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_58_10"
              x="0"
              y="0"
              width="1256"
              height="1298"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_58_10"
              />
            </filter>
            <linearGradient
              id="paint0_linear_58_10"
              x1="628"
              y1="250"
              x2="628"
              y2="1048"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6EE7B7" />
              <stop offset="1" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};
const items = [
  {
    title: "Safety",
    description: (
      <span className="text-sm">
        Safety is our top priority. We use advanced technologies to keep users'
        information secure.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconLock className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lightning Fast",
    description: (
      <span className="text-sm">
        Our website is blazing fast, so we can help you make something great!
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconBrandSpeedtest className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Easy to Use",
    description: (
      <span className="text-sm">
        We have an intuitive design, to make it easy to find what you're looking
        for!
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconUserHeart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Responsive",
    description: (
      <span className="text-sm">
        We use responsive design to make sure that you can access our website on
        all devices!
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "No Cost",
    description: (
      <span className="text-sm">
        We provide all of this for no cost whatsoever!
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconFreeRights className="h-4 w-4 text-neutral-500" />,
  },
];
