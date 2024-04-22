import React, { useEffect, useState } from "react";
import logo from "../assets/PrintSpace.png";
import StyledButton from "../components/ui/StyledButton";
import { Burger, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const location = useLocation();
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

  const scrolledClasses = {
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
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
            {!mobile && location.pathname === "/" && (
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
