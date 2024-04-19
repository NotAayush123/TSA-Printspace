import { Container, Accordion } from "@mantine/core";
import classes from "./FAQ.module.css";

export default function FAQ() {
  return (
    <Container size="lg" id="faq" style={{ height: "90vh" }} className="mt-5">
      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="where-to-go">
          <Accordion.Control style={{ color: "white" }}>
            How do I know where to go?
          </Accordion.Control>
          <Accordion.Panel>
            It will say on the event you try to sign up for!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="how-to-get-hours">
          <Accordion.Control style={{ color: "white" }}>
            How can I get hours?
          </Accordion.Control>
          <Accordion.Panel>
            Hours will be approved by moderators once they see your
            participation.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="how-many-events">
          <Accordion.Control
            style={{
              color: "white",
            }}
          >
            How many events can I sign up for?
          </Accordion.Control>
          <Accordion.Panel>
            You can sign up for as many events as you believe you can
            effectively help with.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="age-requirement">
          <Accordion.Control style={{ color: "white" }}>
            What age do I have to be?
          </Accordion.Control>
          <Accordion.Panel>
            You have to be over 13 years old and have access to transportation.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="other-question">
          <Accordion.Control style={{ color: "white" }}>
            Have another question?
          </Accordion.Control>
          <Accordion.Panel>
            Feel free to ask, and we'll be happy to help!
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
