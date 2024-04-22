import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./EventDetail.module.css";
import {
  Avatar,
  AvatarGroup,
  Button,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconDatabase,
  IconPrinter,
  IconCircuitBattery,
  IconHammer,
  IconAccessPoint,
  IconNews,
  IconDeviceGamepad2,
  IconDesk,
  IconRobot,
  IconWindmill,
  IconRocket,
  IconMicroscope,
  Icon360,
  IconLock,
  IconSquareRoot,
} from "@tabler/icons-react";
const EventDetail = () => {
  // Get the current location
  const location = useLocation();
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let events = user.signedEvents;
  // Extract all query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  // Access individual query parameters
  const eventName = queryParams.get("name");
  const category = queryParams.get("category");
  const image = queryParams.get("image");
  const maxSpots = queryParams.get("maxSpots");
  const address = queryParams.get("address");
  const time = queryParams.get("time");
  const day = queryParams.get("day");
  const usersTask = queryParams.get("usersTask");
  const contactPhone = queryParams.get("contactPhone");
  const contactEmail = queryParams.get("contactEmail");
  const signedParam = queryParams.get("signed");
  const pastVal = queryParams.get("past");
  const past = pastVal ? pastVal === "true" : false;
  const signed = signedParam ? signedParam === "true" : false;
  console.log(past);
  const navigate = useNavigate();
  const volunteers = [];
  let index = 1;
  while (queryParams.has(`volunteer${index}Name`)) {
    const volunteerName = queryParams.get(`volunteer${index}Name`);
    const volunteerProfilePicture = queryParams.get(
      `volunteer${index}ProfilePicture`
    );
    volunteers.push({
      name: volunteerName,
      profilePicture: volunteerProfilePicture,
    });
    index++;
  }
  const event = {
    eventName,
    category,
    image,
    maxSpots,
    address,
    time,
    day,
    usersTask,
    contactPhone,
    contactEmail,
    volunteers,
  };
  const mockdata = [
    { title: "3D Printing", icon: IconPrinter, color: "violet" },
    { title: "Electrical Circuits", icon: IconCircuitBattery, color: "indigo" },
    { title: "Engineering", icon: IconHammer, color: "blue" },
    { title: "AI Networks", icon: IconAccessPoint, color: "green" },
    { title: "Website Development", icon: IconNews, color: "teal" },
    { title: "Game Development", icon: IconDeviceGamepad2, color: "cyan" },
    { title: "Tool Workshop", icon: IconDesk, color: "pink" },
    { title: "Robotics", icon: IconRobot, color: "red" },
    { title: "Renewable Energy", icon: IconWindmill, color: "orange" },
    { title: "Aerospace", icon: IconRocket, color: "gray" },
    { title: "Data Science", icon: IconDatabase, color: "lime" },
    { title: "Environmental Science", icon: IconMicroscope, color: "red" },
    {
      title: "Virtual Reality (VR) and Augmented Reality (AR)",
      icon: Icon360,
      color: "orange",
    },
    {
      title: "Cybersecurity",
      icon: IconLock,
      color: "gray",
    },
    {
      title: "Math",
      icon: IconSquareRoot,
      color: "teal",
    },
  ];

  const iconWithTitle = mockdata.find((item) => item.title === category);

  // Assuming `category` is the category you want to search for

  let iconComponent = null;

  if (iconWithTitle) {
    const { icon: IconComponent, color } = iconWithTitle;
    // Assuming `IconComponent` is the React component for the icon

    iconComponent = <IconComponent style={{ color }} />;
  }

  const avatars = volunteers.map((volunteer) => {
    return (
      <>
        <Tooltip label={volunteer.name} withArrow>
          <Avatar src={volunteer.profilePicture} />
        </Tooltip>
      </>
    );
  });
  return (
    <div>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={image} alt="Volunteering" />
      </div>
      <h1 className="mt-5" style={{ color: "white" }}>
        {eventName}
      </h1>
      <h3 style={{ color: "white" }}>{address}</h3>
      <AvatarGroup className="mb-3">
        {avatars}
        {"   "}
        <Text
          fw={700}
          style={{ fontSize: "1.4rem", marginLeft: "5px", color: "#a78bfa" }}
        >
          {volunteers.length}/{maxSpots} volunteers
        </Text>
      </AvatarGroup>{" "}
      <Paper
        shadow="xl"
        withBorder
        p="xs"
        style={{ display: "flex", alignItems: "center" }}
      >
        <p
          style={{ marginLeft: "10px", marginTop: "10px", fontSize: "1.2rem" }}
        >
          {iconComponent}
          {"  "} {category}
        </p>
      </Paper>
      <Paper shadow="xl" withBorder p="xs" className="mt-3">
        <h3>Details</h3>
        <p>Address: {address}</p>
        <p>Time: {time}</p>
        <p>Hosted on: {day}</p>
        <p>{usersTask}</p>
      </Paper>
      <Paper shadow="xl" withBorder p="xs" className="mt-3 mb-5">
        <h3>Contact</h3>
        <p>Contact Phone: {contactPhone}</p>
        <p>Contact Email: {contactEmail}</p>
      </Paper>
      {!past && (
        <Paper className={classes.overlay} shadow="xl" withBorder p="lg">
          {signed ? (
            <Button className={classes.sign} fullWidth color="gray" disabled>
              You're already signed up!
            </Button>
          ) : (
            <Button
              className={classes.sign}
              color="#60a5fa"
              radius="lg"
              fullWidth
              onClick={() => {
                events.push(event);
                const newUser = { ...user, signedEvents: events };
                localStorage.setItem("currentUser", JSON.stringify(newUser));
                const id = user.id;
                const users = JSON.parse(localStorage.getItem("users"));
                const updatedUsersArray = users.map((u) =>
                  u.id === id ? { ...u, signedEvents: events } : u
                );
                console.log(users);
                localStorage.setItem(
                  "users",
                  JSON.stringify(updatedUsersArray)
                );
                navigate("/dashboard");
              }}
            >
              Sign up
            </Button>
          )}
        </Paper>
      )}
    </div>
  );
};

export default EventDetail;
