import React, { useEffect, useState } from "react";
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
import ItemProvided from "../components/Volunteering/ItemProvided";
const EventDetail = () => {
  // Get the current location
  const location = useLocation();
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let events = user.signedEvents;
  // Extract all query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  // Access individual query parameters
  const eventName = queryParams.get("name");
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

  const avatars = volunteers.map((volunteer) => {
    return (
      <>
        <Tooltip label={volunteer.name} withArrow>
          <Avatar src={volunteer.profilePicture} />
        </Tooltip>
      </>
    );
  });
  const [isSignedUp, setIsSignedUp] = useState(false);
  useEffect(() => {
    const isAlreadySignedUp = events.some(
      (event) => event.eventName === eventName
    );
    setIsSignedUp(isAlreadySignedUp);
  }, [location.search]);
  return (
    <div>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={image} alt="Volunteering" />
      </div>
      <h1 className="text-white text-3xl font-semibold my-4">{eventName}</h1>
      <h3 className="text-slate-300 text-3xl font-semibold mb-4">{address}</h3>
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
        className="mt-3 bg-slate-900 border-4 border-slate-600"
      >
        <h3 className="text-slate-300 text-3xl font-semibold mb-4">Details</h3>
        <p className="text-white  text-xl my-3 ">
          <span className="font-semibold">Address</span>: {address}
        </p>
        <p className="text-white  text-xl my-3 ">
          {" "}
          <span className="font-semibold">Time</span>: {time}
        </p>
        <p className="text-white  text-xl my-3 ">
          {" "}
          <span className="font-semibold">Hosted on</span>: {day}
        </p>
        <p className="text-white  text-xl my-3 ">{usersTask}</p>
      </Paper>
      <Paper
        shadow="xl"
        withBorder
        p="xs"
        className="mt-3 bg-slate-900 border-4 border-slate-600 mb-5"
      >
        <h3 className="text-slate-300 text-3xl font-semibold mb-4">Contact</h3>
        <p className="text-white  text-xl my-3 ">
          <span className="font-semibold">Contact Phone</span>: {contactPhone}
        </p>
        <p className="text-white  text-xl my-3 ">
          <span className="font-semibold">Contact Email</span>: {contactEmail}
        </p>
      </Paper>
      <Paper
        shadow="xl"
        withBorder
        p="xs"
        className="mt-3 bg-slate-900 border-4 border-slate-600  mb-16"
      >
    <h3 className="text-slate-300 text-3xl font-semibold mb-4">Supplies Provided</h3>
      <ItemProvided title="3D Printer" />
      <ItemProvided title="Computer" />
        </Paper>
      {!past && (
        <Paper
          className={`${classes.overlay} bg-slate-900 border-none`}
          shadow="xl"
          withBorder
          p="lg"
        >
          {signed || isSignedUp ? (
            <Button
              className={classes.sign}
              fullWidth
              color="rgba(31, 31, 31, 1)"
              disabled
            >
              You're already signed up!
            </Button>
          ) : (
            <Button
              className={classes.sign}
              variant="gradient"
              gradient={{ from: "grape", to: "indigo", deg: 90 }}
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
