import { useState } from "react";
import { EventsList } from "../components/Events/EventsList";
import Search from "../components/Events/Search";

const Events = () => {
  const [value, setValue] = useState();

  const [days, setDays] = useState();
  return (
    <div style={{ marginLeft: "20px" }}>
      <Search
        onEnter={(value) => {
          setValue(value);
        }}
        onFilter={(days) => {
          setDays(days);
        }}
      />
      <EventsList value={value} days={days} />
    </div>
  );
};

export default Events;
