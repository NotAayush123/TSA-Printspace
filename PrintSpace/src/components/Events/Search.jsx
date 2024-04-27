import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  rem,
  Popover,
  Text,
  Checkbox,
} from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import classes from "./Search.module.css";
import { CheckIcon } from "@mantine/core";

const Search = ({ onEnter, onFilter }) => {
  const [friday, setFriday] = useState(true);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  const eventNames = [
    "3D Print at Appoquinimink Library",
    "3D Printing at the Library",
    "3D Printing Space",
    "3D Printing Workshop",
    "3D Printing at University of Delaware",
    "3D Printing At Del Tech GeorgeTown",
    "3D Printing at Milford Library",
    "3D Printing at Seaford Library",
    "3D Printing at Lewes Library",
    "3D Printing and CAD at Selbyville Library",
  ];

  return (
    <div>
      <Autocomplete
        className={classes.search}
        placeholder="Search"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={4}
            color="white"
          />
        }
        data={eventNames}
        visibleFrom="xs"
        onChange={(value) => {
          onEnter(value);
        }}
      />
      <Popover
        width={400}
        position="bottom"
        withArrow
        shadow="md"
        className="bg-slate-500"
      >
        <Popover.Target>
          <Button className={`${classes.filter} bg-slate-500`} size="sm">
            <IconFilter />
          </Button>
        </Popover.Target>
        <Popover.Dropdown className="bg-slate-800 border-slate-700 border-2 rounded-xl ">
          <Text size="lg" className="text-white font-semibold mb-4">
            Filter Days
          </Text>
          <Checkbox
            checked={friday}
            label="Friday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="#a78bfa"
            value={friday}
            onClick={() => {
              setFriday((prev) => !prev);
            }}
            className="text-white font-semibold"
          />
          <Checkbox
            checked={saturday}
            label="Saturday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="#a78bfa"
            value={saturday}
            onClick={() => {
              setSaturday((prev) => !prev);
            }}
            className="text-white font-semibold my-2"
          />
          <Checkbox
            checked={sunday}
            label="Sunday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="#a78bfa"
            value={sunday}
            onClick={() => {
              setSunday((prev) => !prev);
            }}
            className="text-white font-semibold mb-3"
          />
          <button
            fullWidth
            onClick={() => {
              const days = {
                friday,
                saturday,
                sunday,
              };

              onFilter(days);
            }}
            className="mt-5 animate-shimmer hover:animate-shimmerHover h-10 w-full mb-3 text-white duration-500 items-centerhover:-translate-y-1 justify-center rounded-md border  border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium"
          >
            Save
          </button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default Search;
