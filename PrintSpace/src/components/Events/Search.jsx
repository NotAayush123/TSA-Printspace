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
    "3D Printing at the Library",
    "Intro to Data Science UD",
    "Intro to Game Development UD",
    "Algebraic Math at the Library",
    "Understanding Electrical Circuits",
    "Engineering Classes",
    "Coding with AI Networks",
    "Website Development at the Library",
    "Video Game Development",
    "Tool Workshop",
    "Robotics Workshop",
    "Engineering at the laboratory",
  ];

  return (
    <div>
      <Autocomplete
        className={classes.search}
        placeholder="Search"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        data={eventNames}
        visibleFrom="xs"
        onChange={(value) => {
          onEnter(value);
        }}
      />
      <Popover width={400} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button className={classes.filter} size="sm">
            <IconFilter />
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="lg" className="mb-2">
            Filter Days
          </Text>
          <Checkbox
            checked={friday}
            label="Friday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="cyan"
            value={friday}
            onClick={() => {
              setFriday((prev) => !prev);
            }}
          />
          <Checkbox
            checked={saturday}
            label="Saturday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="cyan"
            value={saturday}
            onClick={() => {
              setSaturday((prev) => !prev);
            }}
          />
          <Checkbox
            checked={sunday}
            label="Sunday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="cyan"
            value={sunday}
            onClick={() => {
              setSunday((prev) => !prev);
            }}
            className="mb-3"
          />
          <Button
            fullWidth
            onClick={() => {
              const days = {
                friday,
                saturday,
                sunday,
              };

              onFilter(days);
            }}
            color="pink"
          >
            Save
          </Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default Search;
