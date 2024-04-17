import React from "react";
import classes from "../components/StyledButton.module.css";
const StyledButton = ({ text, title, className }) => {
  return (
    <>
      {title ? (
        <div
          className={`flex justify-center items-center text-center mb-3 text-5xl font-semibold animate-border rounded-xl ${className}`}
        >
          <a className={classes.buttonTitle}>
            <span className="text-white">{text}</span>
          </a>
        </div>
      ) : (
        <a href="#" className={classes.button}>
          <span>{text}</span>
        </a>
      )}
    </>
  );
};

export default StyledButton;
