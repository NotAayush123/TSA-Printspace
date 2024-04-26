import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { CardsCarousel } from "../components/Volunteering/Carousel";
import { PastCarousel } from "../components/Volunteering/PastCarousel";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
const Dashboard = () => {
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");

  useEffect(() => {
    if (!signedIn) {
      console.log("User not signed in, redirecting to /signup");
      navigate("/signup");
    }
  }, []);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const date =
    new Date(user.date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    ", " +
    new Date(user.date).toLocaleDateString("en-US", { weekday: "long" });
  let pastEvents = user.signedEvents;

  let newEvents = pastEvents.map((item) => {
    item.volunteers.push({
      name: user.name,
      profilePicture: user.img,
    });
    item.past = true;
    return { ...item };
  });
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const empty = pastEvents.length === 0;
  if (signedIn) {
    let style = { marginLeft: "2rem" };
    if (mobile) {
      style = { marginLeft: "0px" };
    }
    return (
      
      <div style={style}>
        <h1 className="my-3 text-5xl font-semibold" style={{ color: "white" }}>
          Welcome back, {user.name}
        </h1>
        <h3 style={{ color: "white" }} className="text-2xl">
          It's {date}
        </h3>
        <div className="mt-5">
          <h4 className="my-3 text-2xl font-semibold text-violet-400">
            Events for you
          </h4>
          <CardsCarousel
            date={user.date}
            pastEvents={pastEvents}
            username={user.name}
            profile={user.img}
          />
          {!empty && (
            <h4 className="my-3 text-2xl font-semibold text-violet-400">
              Signed Up Events
            </h4>
          )}
          <PastCarousel pastEvents={newEvents} empty={empty} />
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default Dashboard;
