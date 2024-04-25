import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import classes from "./About.module.css";
const Login = () => {
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");

  useEffect(() => {
    if (signedIn) {
      navigate("/dashboard");
    }
  }, [signedIn, navigate]);

  if (signedIn) {
    return null;
  } else {
    return (
      <div className={`${classes.newContainer} bg-grid-white/[0.1] bg-black`}>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]"></div>

        <LoginForm />
      </div>
    );
  }
};

export default Login;
