import React from "react";
import classes from "../components/StyledButton.module.css";

const StyledButton = ({ text, title, className, padding, font }) => {
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
