import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { Calendar } from "@mantine/dates";
import { CardsCarousel } from "../components/Volunteering/Carousel"; // Import the EventsList component

const CalendarEvents = () => {
  const [selected, setSelected] = useState([]);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  let pastEvents = user.signedEvents;

  useEffect(() => {
    setSelected([dayjs()]);
  }, []);

  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));

    if (isSelected) {
      setSelected([]);
    } else {
      setSelected([dayjs(date)]);
    }
  };

  const formatSelectedDate = () => {
    if (!selected.length) return "";
    return selected[0].format("dddd, MMMM D");
  };

  return (
    <>
      <div className="mt-10 flex items-center flex-col">
        <div className="flex flex-row items-center mb-10 ">
          <Calendar
            locale="en"
            value={selected}
            getDayProps={(date) => ({
              selected: selected.some((s) => dayjs(date).isSame(s, "date")),
              onClick: () => handleSelect(date),
            })}
            defaultDate={dayjs()}
            size="lg"
            className="bg-slate-900 text-white rounded-xl"
          />
        </div>
      </div>
      {selected.length > 0 && (
        <div className="m-3 mt-4">
          <h1 className="mt-5 text-2xl text-white font-semibold mb-3">
            Events for {formatSelectedDate()}
          </h1>
          {/* Pass the selected date to the EventsList component */}
          <CardsCarousel
            selectedDate={selected[0]}
            date={user.date}
            pastEvents={pastEvents}
            username={user.name}
            profile={user.img}
          />
        </div>
      )}
    </>
  );
};

export default CalendarEvents;
