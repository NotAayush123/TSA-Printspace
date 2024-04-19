import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./index.css";

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
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/otherInfo",
      //   element: <OtherInfo />,
      // },
      // {
      //   path: "/privacy",
      //   element: <PrivacyPolicy />,
      // },
    ],
    // },
    // {
    //   path: "/signup",
    //   element: <Signup />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/dashboard",
    //   element: <DashboardNavbar />,
    //   children: [
    //     { index: true, element: <Dashboard /> },
    //     { path: "account", element: <Account /> },
    //     { path: "settings", element: <Settings /> },
    //     {
    //       path: "events",
    //       element: <Events />,
    //     },
    //     {
    //       path: "detail",
    //       element: <EventDetail />,
    //     },
    //   ],
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
