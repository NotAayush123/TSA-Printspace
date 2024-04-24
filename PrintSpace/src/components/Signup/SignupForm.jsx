import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import classes from "./SignupForm.module.css";
import { PasswordStrength } from "./PasswordInput";
import AlertComponent from "../Alert";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "../../../utils/cn";
import City from "../../assets/CyberpunkCity.jpg";
import { Button } from "@mantine/core";
const SignupForm = () => {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState();
  const [emailUsed, setEmailUsed] = useState(false);
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const validateEmail = (value) => {
    return value.trim() !== "" && value.includes("@");
  };
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailhasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(validateEmail);
  const validateConfirmPassword = (value) => {
    return value.trim() === passwordValue.trim() && value.trim() !== "";
  };
  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput(validateConfirmPassword);

  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }
  const handlePasswordValidationChange = (isValid, value) => {
    if (isValid === undefined) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(isValid);
      setPasswordValue(value); // Set the password value in the state
    }
  };
  const navigate = useNavigate();
  const submitFunction = async (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      email: enteredEmail,
      password: passwordValue,
      confirmPassword: enteredConfirmPassword,
    };

    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.confirmPassword === "" ||
      data.password !== data.confirmPassword
    ) {
      setError(true);
    } else if (formIsValid === false) {
      setError(true);
    } else {
      await hashPasswordAndCreateAccount(data);
    }
  };
  const hashPasswordAndCreateAccount = async (data) => {
    try {
      const saltRounds = 10;

      const hashedPassword = await bcrypt.hash(data.password, saltRounds);

      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if any user has the same email
      const emailExists = existingUsers.some(
        (user) => user.email === data.email
      );

      if (emailExists) {
        console.log("Email already exists");
        setEmailUsed(true);
        return;
      }

      // Generate a simple unique ID using a timestamp and random string
      const userId =
        Date.now().toString(36) + Math.random().toString(36).substr(2);

      const updatedUsers = [
        ...existingUsers,
        {
          id: userId,
          name: data.name,
          email: data.email,
          password: hashedPassword,
          img: "",
          description: "",
          signedEvents: [],
        },
      ];
      console.log(hashedPassword);
      console.log(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("signedIn", true);
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          id: userId,
          name: data.name,
          email: data.email,
          img: "",
          description: "",
          date: new Date(),
          signedEvents: [],
        })
      );

      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      setError(true);
      console.error("Error hashing password:", error);
    }
  };

  return (
    <div className={classes.main}>
      {error ? (
        <AlertComponent
          message="Something went wrong with your submission!"
          title="Error"
          close={() => {
            setError(false);
          }}
        />
      ) : (
        " "
      )}
      <div className="flex flex-col items-center md:flex-row">
        <form
          className={`${classes.form} max-xl:w-1/3 max-lg:w-6/12`}
          onSubmit={submitFunction}
        >
          <div className="container">
            <h1 className={`${classes.title} text-3xl`}>
              Signup for{" "}
              <span style={{ color: "#a78bfa", fontWeight: "700" }}>
                Techspace
              </span>
            </h1>
            <div className="mb-3">
              <LabelInputContainer>
                <Label htmlFor="firstname">Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={enteredName}
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
                  label="Name"
                  className={`${nameInputHasError ? classes.error : ""} ${
                    classes.input
                  }`}
                />
              </LabelInputContainer>
              {nameInputHasError && (
                <p
                  className="mt-2 mx-2"
                  style={{ fontWeight: "500", color: "#fecaca" }}
                >
                  Name can't be empty!
                </p>
              )}
            </div>
            <div className="mb-3">
              <LabelInputContainer>
                <Label htmlFor="firstname">Email</Label>
                <Input
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  required
                  onBlur={emailBlurHandler}
                  onChange={emailChangeHandler}
                  value={enteredEmail}
                  className={`${emailhasError ? classes.error : ""}  ${
                    classes.input
                  }`}
                />
              </LabelInputContainer>

              {emailhasError && (
                <p
                  className="mt-2 mx-2"
                  style={{ fontWeight: "500", color: "#fecaca" }}
                >
                  Invalid email address!
                </p>
              )}
              {emailUsed && (
                <p
                  className="mt-2 mx-2"
                  style={{ fontWeight: "500", color: "#fecaca" }}
                >
                  Already taken!
                </p>
              )}
            </div>
            <div className="mb-3">
              <PasswordStrength
                onValidationChange={handlePasswordValidationChange}
                isValid={!passwordIsValid}
                mode="Signup"
                type="Password"
              />
            </div>
            <div className={`mb-3 ${confirmPasswordHasError ? "error" : ""}`}>
              <LabelInputContainer>
                <Label htmlFor="firstname">Confirm Your Password</Label>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  label="Confirm Password"
                  value={enteredConfirmPassword}
                  onChange={passwordConfirmChangeHandler}
                  onBlur={passwordConfirmBlurHandler}
                  className={`${confirmPasswordHasError ? classes.error : ""} ${
                    classes.input
                  }`}
                />
              </LabelInputContainer>
              {confirmPasswordHasError && (
                <p
                  className="mt-2 mx-2"
                  style={{ fontWeight: "500", color: "#fecaca" }}
                >
                  Passwords don't match, or this is empty.
                </p>
              )}
            </div>
            <div
              className={`mb-2 ${classes.linkContainer}`}
              style={{ color: "white" }}
            >
              Already have an account?{" "}
              <a href="/login" className={classes.link}>
                Login
              </a>{" "}
              or{" "}
              <a href="/" className={classes.link}>
                Go home
              </a>
            </div>
            <Button
              type="submit"
              disabled={!formIsValid}
              variant="filled"
              color="rgba(31, 31, 31, 1)"
              className="mt-2 disabled:bg-slate-700"
            >
              Submit
            </Button>
          </div>
        </form>
        <div className="hidden md:block ml-auto max-xl:w-2/3 max-lg:w-6/12">
          <img
            src={City}
            alt=""
            className={classes.image}
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
            }}
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
