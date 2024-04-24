import React, { useEffect, useState } from "react";
import logo from "../assets/PrintSpace.png";
import StyledButton from "../components/ui/StyledButton";
import { Burger, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { IconArrowRight, IconHome2, IconLogout } from "@tabler/icons-react";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const location = useLocation();
  const signedIn = localStorage.getItem("signedIn");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const localname = JSON.parse(user).name;
      setName(localname);
    }
  }, []);

  const handleHover = () => {
    setOpen(true);
    setRotate(true);
  };

  const handleLeave = () => {
    setOpen(false);
    setRotate(false);
  };

  const scrolledClasses = {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
  };

  const logout = () => {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("currentUser");
    window.location.reload();
  };

  return (
    <>
      <nav
        className="bg-transparent shadow-xl fixed w-full z-[999] top-0 transition-all duration-500"
        style={scrolled || open ? scrolledClasses : {}}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-9 rounded-full"
              alt="Printspace logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Printspace
            </span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {!mobile && location.pathname === "/" && !signedIn && !name && (
              <>
                <button
                  style={
                    scrolled
                      ? { transition: "all .5s", border: "solid 1px white" }
                      : {}
                  }
                  onClick={() => navigate("/signup")}
                  className="animate-shimmer hover:animate-shimmerHover mx-4 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
                >
                  Sign Up
                </button>
                <StyledButton text={"Login"} href="/login" />
              </>
            )}
            {signedIn && name && (
              <div
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                className="relative"
              >
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none  focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0 flex justify-center items-center">
                    <span>{name}</span>
                    {/* Arrow */}
                    <motion.span
                      className="h-5 w-5 ml-1 mb-1 transition-transform duration-300"
                      initial={{ rotate: 0 }}
                      animate={
                        rotate
                          ? {
                              rotate: 90,
                            }
                          : {}
                      }
                    >
                      <IconArrowRight />
                    </motion.span>
                  </span>
                </button>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 bg-white shadow-md py-2 px-4 rounded-md flex flex-col"
                  >
                    <button
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                      className="text-white flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      <IconHome2 size={20} /> Dashboard
                    </button>
                    <button
                      className="text-white flex flex-col items-center  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={logout}
                    >
                      <IconLogout size={20} />{" "}
                      <span className="ml-2">Logout</span>
                    </button>
                  </motion.div>
                )}
              </div>
            )}
            <Burger
              opened={open}
              type="button"
              className="inline-flex hover:bg-gray-900 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              onClick={() => {
                setOpen((prev) => !prev);
              }}
              color="white"
            />
          </div>

          <motion.div
            className={`items-center justify-between ${
              !open && "hidden"
            } w-full md:flex md:w-auto md:order-1 `}
            animate={open && { opacity: 1 }}
          >
            <ul
              className={`flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${
                mobile && "bg-gray-600 mb-3"
              }`}
            >
              {location.pathname === "/" && (
                <>
                  <li>
                    <a
                      href="#mission"
                      className={`${open ? "mobileLink" : "link"}`}
                    >
                      Our Mission and Values
                    </a>
                  </li>
                  <li>
                    <a
                      href="#featured"
                      className={`${open ? "mobileLink" : "link"}`}
                    >
                      Featured Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#reviews"
                      className={`${open ? "mobileLink" : "link"}`}
                    >
                      Reviews
                    </a>
                  </li>
                </>
              )}
            </ul>
            {mobile && location.pathname === "/" && (
              <>
                <button
                  style={
                    open
                      ? { transition: "all .5s", border: "solid 1px white" }
                      : {}
                  }
                  onClick={() => navigate("/signup")}
                  className="animate-shimmer hover:animate-shimmerHover h-12 w-full mb-3 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
                >
                  Sign Up
                </button>
                <StyledButton text={"Login"} href="/login" />
              </>
            )}
          </motion.div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default MainNavbar;
