import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
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
