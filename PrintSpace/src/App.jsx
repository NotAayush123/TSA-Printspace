import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OtherInfo from "./pages/OtherInfo";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardNavbar from "./components/Dashboard/DashboardNavbar";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import CalendarEvents from "./pages/Calendar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/otherInfo",
        element: <OtherInfo />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardNavbar />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "account", element: <Account /> },
      { path: "settings", element: <Settings /> },
      { path: "calendar", element: <CalendarEvents /> },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "detail",
        element: <EventDetail />,
      },
    ],
  },
]);
function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (
      currentPath === "/" ||
      currentPath === "/privacy" ||
      currentPath === "/about" ||
      currentPath === "/otherInfo"
    ) {
      alanBtn({
        key: import.meta.env.VITE_ALAN_KEY,
        onCommand: (commandData) => {
          if (commandData.command === "signup") {
            window.location.href = "/signup";
          } else if (commandData.command === "login") {
            window.location.href = "/login";
          }
          if (commandData.command === "about") {
            window.location.href = "/about";
          }
          if (commandData.command === "privacy") {
            window.location.href = "/privacy";
          }
          if (commandData.command === "otherinfo") {
            window.location.href = "/otherinfo";
          }
        },
      });
    }
  }, []);
  return (
    <>
      <MantineProvider>
        {" "}
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
