import { Text, Container } from "@mantine/core";
import classes from "./LoginForm.module.css";
import useInput from "../../hooks/use-input";
import { Label } from "../Signup/Label";
import { Input } from "../Signup/Input";
import { cn } from "../../../utils/cn";
import { useEffect, useState } from "react";
import AlertComponent from "../Alert";
import bcryptjs from "bcryptjs";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const validateEmail = (value) => {
    return value.trim() !== "" && value.includes("@");
  };
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState();
  const [userExists, setUserExists] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (passwordValue !== "") {
      setPasswordIsValid(true);
    } else if (passwordValue === "") {
      setPasswordIsValid(false);
    }
  }, [passwordValue]);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailhasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(validateEmail);
  const passwordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const formIsValid = passwordIsValid && emailIsValid;
  const formSumbit = (event) => {
    event.preventDefault();
    const data = {
      email: enteredEmail,
      password: passwordValue,
    };
    if (!formIsValid) {
      setError(true);
    }

    if (data.email === "" || data.password === "") {
      setError(true);
    }

    const stringusers = localStorage.getItem("users");
    if (!stringusers) {
      setUserExists(true);
    }
    const users = JSON.parse(stringusers);

    const foundUser = users.find((user) => {
      return user.email === data.email;
    });
    console.log(foundUser);
    if (!foundUser) {
      setUserExists(true);
    }
    if (foundUser) {
      const foundUserPassword = foundUser.password;
      console.log(foundUserPassword);
      console.log(data.password);
      bcryptjs.compare(data.password, foundUserPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          setUserExists(true);
        }
        try {
          console.log(result);
          if (result) {
            localStorage.setItem("signedIn", true);
            localStorage.setItem(
              "currentUser",
              JSON.stringify({
                name: foundUser.name,
                email: foundUser.email,
                id: foundUser.id,
                img: foundUser.img,
                description: foundUser.description,
                signedEvents: foundUser.signedEvents,
                date: new Date(),
              })
            );
            navigate("/dashboard");
          } else {
            console.log("Login failed");
            setUserExists(true);
          }
        } catch (e) {
          console.log(e);
        }
      });
    }
  };
  return (
    <div className="">
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
      {userExists ? (
        <AlertComponent
          message="Incorrect combination! (Case matters!)"
          title="Error"
          close={() => {
            setError(false);
          }}
        />
      ) : (
        " "
      )}
      <Container className="flex itens-center justify-center ">
        <div className="mx-auto rounded-2xl p-8 shadow-input bg-black ring-4 ring-slate-800">
          <h2 className="font-bold text-3xl text-neutral-200 mb-5">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Printspace
            </span>
          </h2>

          <form onSubmit={formSumbit}>
            <div className={`mb-4`} controlId="formName">
              <LabelInputContainer>
                <Label htmlFor="firstname">Email</Label>
                <Input
                  type="email"
                  label="Email"
                  required
                  onBlur={emailBlurHandler}
                  onChange={emailChangeHandler}
                  value={enteredEmail}
                  className={emailhasError ? classes.error : ""}
                />
              </LabelInputContainer>

              {emailhasError && (
                <p
                  className=" mt-2 text-center"
                  style={{ fontWeight: "500", color: "#fecaca" }}
                >
                  Invalid email address!
                </p>
              )}
            </div>
            <LabelInputContainer>
              <Label htmlFor="firstname">Password</Label>
              <Input
                label="Password"
                required
                mt="md"
                type="Password"
                withAsterisk={false}
                value={passwordValue}
                onChange={passwordChange}
              />
            </LabelInputContainer>

            <button
              disabled={!formIsValid}
              type="submit"
              className="mt-5 bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            >
              Log in
              <BottomGradient />
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <Text
              c="dimmed"
              size="sm"
              ta="center"
              mt={20}
              style={{ fontSize: "1.1rem" }}
              className="mb-3"
            >
              <a
                size="sm"
                component="button"
                href="/signup"
                className="text-slate-50 hover:text-slate-300 transition-colors"
              >
                Create account
              </a>{" "}
              or{" "}
              <a
                size="sm"
                component="button"
                href="/"
                className="text-slate-50 hover:text-slate-300 transition-colors"
              >
                Go home
              </a>
            </Text>
          </form>
        </div>
      </Container>
    </div>
  );
}
const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
