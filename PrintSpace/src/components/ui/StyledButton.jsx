import React from "react";
import classes from "./StyledButton.module.css";
import { motion } from "framer-motion";
const StyledButton = ({ text, title, className, padding, font, href }) => {
  return (
    <>
      {title ? (
        <div
          className={`flex justify-center items-center text-center mb-3 text-5xl font-semibold animate-border rounded-xl ${className}`}
        >
          <a className={classes.buttonTitle}>
            <span style={{ padding: padding || "30px 30px" }}>{text}</span>
          </a>
        </div>
      ) : (
        <a className={classes.button} href={href}>
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
