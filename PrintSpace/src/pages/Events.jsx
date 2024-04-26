import React, { useState } from "react";
import { EventsList } from "../components/Events/EventsList";
import Search  from "../components/Events/Search";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Events = () => {
  const [value, setValue] = useState();
  const [days, setDays] = useState();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const divStyle = {
    marginLeft: mobile ? "0" : "20px",
    overflowY: mobile && "scroll",
  };
  return (
    <div style={divStyle}>
    {!mobile && (
      <Search
        onEnter={(value) => {
          setValue(value);
        }}
        onFilter={(days) => {
        
          setDays(days);
        }}
      />
    )}
     <EventsList value={value} days={days} />
    </div>
  );
};

export default Events;
