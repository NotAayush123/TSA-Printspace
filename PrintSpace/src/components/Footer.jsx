import { Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import logo from "../assets/PrintSpace.png";
import classes from "./Footer.module.css";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];

export function Footer() {
  const items = links.map((link) => (
    <a
      className="link text-1xl font-semibold"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <div className="flex items-center">
          <img className="w-9 h-9 rounded-3xl" src={logo} />
          <p className="text-white ml-2 font-semibold text-2xl">Printspace</p>
        </div>
        <Group className={classes.links}>{items}</Group>

        <Group gap="md" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            className="socials"
            onClick={() => {
              window.location.href = "https://twitter.com/Printspace___";
            }}
          >
            <IconBrandX
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            className="socials"
            onClick={() => {
              window.location.href = "https://www.youtube.com/@TSAprintspace";
            }}
          >
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            className="socials"
            onClick={() => {
              window.location.href = "https://www.instagram.com/printspace___/";
            }}
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
