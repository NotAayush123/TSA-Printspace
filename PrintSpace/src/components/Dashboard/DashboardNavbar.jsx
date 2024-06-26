import { useEffect, useState } from "react";
import {
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  Avatar,
  useMantineTheme,
} from "@mantine/core";
import {
  IconHome2,
  IconCalendarStats,
  IconSettings,
  IconLogout,
  IconMenu2,
  IconX,
  IconCalendar,
} from "@tabler/icons-react";
import classes from "./DashboardNavbar.module.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function NavbarLink({
  icon: Icon,
  label,
  active,
  src,
  profile,
  logout,
  onClick,
}) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  return (
    <Tooltip
      label={label}
      position="right"
      transitionProps={{ duration: 300 }}
      className="mx-3"
      withArrow
      style={{ zIndex: "999999" }}
    >
      <UnstyledButton
        onClick={() => {
          if (!logout) {
            navigate(src);
            onClick();
          } else if (logout) {
            localStorage.removeItem("signedIn");
            localStorage.removeItem("currentUser");
            navigate("/");
            window.location.reload();
          }
        }}
        className={logout ? classes.logout : `${classes.link} my-1`}
        data-active={active || undefined}
      >
        {profile ? (
          <Avatar src={user ? user.img : ""} color="white" />
        ) : (
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        )}
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { label: "Account", profile: true, src: "/dashboard/account" },
  { icon: IconHome2, label: "Dashboard", src: "/dashboard" },
  { icon: IconCalendarStats, label: "Events", src: "/dashboard/events" },

  { icon: IconCalendar, label: "Calendar", src: "/dashboard/calendar" },
  { icon: IconSettings, label: "Account Settings", src: "/dashboard/settings" },
];

export default function DashboardNavbar() {
  const [active, setActive] = useState(1);

  const location = useLocation();

  useEffect(() => {
    const setActivePage = () => {
      const currentPage = location.pathname;
      const activeIndex = mockdata.findIndex(
        (item) => item.src === currentPage
      );
      setActive(activeIndex !== -1 ? activeIndex : 0);
    };

    setActivePage();
  }, [location.pathname]);
  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };
  useEffect(() => {
    setShowSidebar(false);
  }, []);
  useEffect(() => {
    if (!signedIn) {
      console.log("User not signed in, redirecting to /signup");
      navigate("/signup");
    }
  }, [signedIn, navigate]);
  if (signedIn) {
    return (
      <>
        {!mobile ? (
          <div className={classes.content}>
            <div className={classes.navbarContainer}>
              <nav className={`${classes.navbar} bg-slate-950`}>
                <div className={classes.navbarMain}>
                  <Stack justify="center" gap={0}>
                    {links}
                  </Stack>
                </div>

                <Stack justify="center" gap={0}>
                  <NavbarLink icon={IconLogout} label="Logout" logout={true} />
                </Stack>
              </nav>
            </div>
            <div
              className={`${
                location.pathname === "/dashboard/account" ||
                location.pathname === "/dashboard/detail"
                  ? "flex w-full justify-center mx-20 "
                  : classes.outletcontent
              }  `}
            >
              <Outlet />
            </div>
          </div>
        ) : (
          <div
            className={`${classes.menuButton} ${
              showSidebar ? classes.active : ""
            }`}
          >
            <button
              className={`bg-slate-950 rounded-xl p-3 relative ${classes["orange-button"]}`}
              onClick={toggleSidebar}
            >
              <IconMenu2 color="white" />
            </button>
            {showSidebar && (
              <div style={{ zIndex: "999999 !important" }}>
                <div className={classes.content}>
                  <div className={classes.navbarContainer}>
                    <nav className={`${classes.navbar} bg-slate-950`}>
                      <div className={classes.navbarMain}>
                        <span className={classes.close} onClick={closeSidebar}>
                          <IconX color="white" />
                        </span>
                        <Stack justify="center" gap={0}>
                          {links}
                        </Stack>
                      </div>

                      <Stack justify="center" gap={0}>
                        <NavbarLink
                          icon={IconLogout}
                          label="Logout"
                          logout={true}
                        />
                      </Stack>
                    </nav>
                  </div>
                </div>
              </div>
            )}

            <div className={classes.outletcontent}>
              <Outlet />
            </div>
          </div>
        )}
      </>
    );
  }
}
