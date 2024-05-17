import React from "react";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";
import Copyright from "../assets/CopyrightChecklist.pdf";
import Worklog from "../assets/TSAWorklog.pdf";
import Citations from "../assets/PrintspaceCitations.pdf";

const OtherInfo = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5, // Adjust delay as needed
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 text-white mt-[30vh]"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="mt-5 text-4xl font-bold text-center">Key Information</h1>
        <h3 className="text-slate-200 font-semibold text-center text-2xl mt-10 ">
          This is some key information you'll probably need!
        </h3>
        <p className="mt-5 text-center">
          After you sign up as a user, and then sign up for an event, space and
          equipment will automatically be reserved for you. One 3D printer and
          one computer is allocated to each person who signs up for a
          makerspace, automatically! You can just go to the location, and 3D
          print there! Also, all the information will be on the event reserved,
          including the hours!
          <br />
          <b className="my-3">ALL INFORMATION IS FABRICATED, SOME 3D PRINTING PROGRAMS, CONTACT INFO, and ADDRESSES ARE REAL, BUT THAT DOES NOT MEAN THE EVENT IS REAL. </b>
          <br /> Please do not bother any 3D printing-related organization on this website.
          
        </p>
      </div>

      <motion.div variants={staggerChildren}>
        <motion.div variants={childVariants}>
          <h1 className="mt-5 text-4xl font-bold text-center">
            Copyright Checklist
          </h1>
          <div className="flex justify-center">
            <button className="shimmerButton mt-5 flex items-center">
              <a href={Copyright} download="Copyright Checklist">
                Download the Copyright Checklist as a PDF{"   "}
              </a>
              <IconDownload />
            </button>
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <h1 className="text-white mt-5 text-4xl font-bold text-center">
            Worklog
          </h1>
          <div className="flex justify-center">
            <button className="shimmerButton mt-5 flex items-center">
              <a href={Worklog} download>
                Download the Worklog as a PDF
              </a>
              <IconDownload />
            </button>
          </div>
        </motion.div>

        <motion.div variants={childVariants}>
          <h1 className="text-white mt-5 text-4xl font-bold text-center">
            Citations
          </h1>
          <div className="flex justify-center">
            <button className="shimmerButton mt-5 flex items-center">
              <a href={Citations} download>
                Download the Citations as a PDF
              </a>
              <IconDownload />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OtherInfo;
