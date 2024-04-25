import { ThemeIcon, Text, Paper, rem, Popover, Anchor } from "@mantine/core";
import {
  IconClockHeart,
  IconHeartHandshake,
  IconInfoCircle,
} from "@tabler/icons-react";
import classes from "./VolunteeringCard.module.css";

export function VolunteeringCard({ last }) {
  return (
    <>
      <Paper
        radius="md"
        withBorder
        className={`${classes.card} bg-gray-900 border-4 border-gray-700   `}
        mt={20}
      >
        <Popover
          width={200}
          position="bottom"
          withArrow
          shadow="md"
          zIndex={99999999}
        >
          <Popover.Target>
            <IconInfoCircle
              style={{ position: "absolute", top: "5", right: "10" }}
              color="white"
            />
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="md">
              Your event must be approved by an admin first!
            </Text>
            <Anchor href="/dashboard/events">Take me to some!</Anchor>
          </Popover.Dropdown>
        </Popover>
        <ThemeIcon className={classes.icon} size={60} radius={60}>
          {last ? (
            <IconClockHeart
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          ) : (
            <IconHeartHandshake
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          )}
        </ThemeIcon>

        <Text ta="center" fw={700} className={classes.title}>
          <h3 className="text-xl text-white">
            {last ? "Your Last Makerspace" : "Time Spent"}
          </h3>
        </Text>
        <Text ta="center" fz="md" className="text-white font-semibold mt-3">
          {last ? "isn't there yet!" : "0 hours"}
        </Text>

        <div className="z-[-999] absolute inset-0 h-[full] w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.99] bg-red-500 rounded-full blur-3xl" />
      </Paper>
    </>
  );
}
