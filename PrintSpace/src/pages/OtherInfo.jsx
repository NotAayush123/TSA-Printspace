import React from "react";
import { motion } from "framer-motion";
import Worklog from "../assets/worklog.jpg";
import Checklist from "../assets/copyrightChecklist.jpg";

const OtherInfo = () => {
  const variants = {
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
      <h1 className="mt-5 text-4xl font-bold text-center">
        Copyright Checklist
      </h1>
      <img src={Checklist} alt="" className="w-full mt-3" />
      <motion.h1
        className="text-white mt-5 text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Worklog
      </motion.h1>
      <img src={Worklog} alt="" className="w-full mt-3" />
      <motion.h1
        className="text-white mt-5 text-4xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Citations
      </motion.h1>
      <a
        style={{ fontSize: "1.2rem", color: "#60a5fa" }}
        href="https://docs.google.com/document/d/1UmNIT1dCwB5oyMApv0tYapKRiDgBjCw-PmYAhYUrl6Y/edit?usp=sharing"
        className="block mt-3"
      >
        Click here!
      </a>
    </motion.div>
  );
};

export default OtherInfo;