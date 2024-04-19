import React from "react";
import { motion } from "framer-motion";
const Mission = () => {
  return (
    <motion.div
      className="text-center flex items-center justify-center"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="bg-gradient-to-r from-red-300 to-blue-500 w-11/12 flex items-center justify-center flex-col rounded-xl p-6 ">
        <div translateZ="50" className="text-xl font-bold text-white">
          Our Mission
        </div>
        <div translateZ="60" className="text-gray-300 text-sm max-w-sm mt-2">
          Our mission is to provide a space where people can explore and create
          using 3D printing technology. We aim to foster a collaborative
          community and provide the resources and support needed for makers of
          all levels to unleash their creativity and make a positive impact.
        </div>
        <div translateZ="100" className="w-full mt-4"></div>
      </div>
    </motion.div>
  );
};

export default Mission;
