import { ThemeIcon, Text, Paper, rem, Popover, Anchor } from "@mantine/core";
import {
  IconClockHeart,
  IconHeartHandshake,
  IconInfoCircle,
} from "@tabler/icons-react";
import classes from "./VolunteeringCard.module.css";

export function VolunteeringCard({ last }) {
  return (
    <Paper
      radius="md"
      withBorder
      className={`${classes.card} bg-slate-400 border-none`}
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
          <Text size="md">Your event must be approved by an admin first!</Text>
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
      <Text ta="center" fz="md">
        {last ? "isn't there yet!" : "0 hours"}
      </Text>
    </Paper>
  );
}
