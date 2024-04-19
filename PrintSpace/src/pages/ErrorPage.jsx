import { Title, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-5 ">
      <div className="text-center text-white mt-5 text-9xl font-bold">404</div>
      <Title className="text-center text-slate-500 mt-5">
        You have found a secret place.
      </Title>
      <Text c="dimmed" size="lg" ta="center" className="mt-3 ">
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Button
          variant="subtle"
          size="md"
          onClick={() => {
            navigate("/");
          }}
          className="mt-5"
        >
          Take me back to home page
        </Button>
      </Group>
    </div>
  );
};

export default ErrorPage;
