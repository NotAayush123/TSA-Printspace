import React from "react";
import classes from "./StyledButton.module.css";
import { motion } from "framer-motion";
const StyledButton = ({ text, title, className, padding, font }) => {
  return (
    <>
      {title ? (
        <motion.div
          className={`flex justify-center items-center text-center mb-3 text-5xl font-semibold animate-border rounded-xl ${className}`}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -20 }}
          transition={{
            duration: 0.7,
            type: "spring",
          }}
        >
          <a className={classes.buttonTitle}>
            <span style={{ padding: padding || "30px 30px" }}>{text}</span>
          </a>
        </motion.div>
      ) : (
        <a href="#" className={classes.button}>
          <span
            style={{ padding: padding || "8px 15px", fontSize: font || "" }}
          >
            {text}
          </span>
        </a>
      )}
    </>
  );
};

export default StyledButton;
