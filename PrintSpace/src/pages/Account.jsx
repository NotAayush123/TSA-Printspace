import { Button, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { VolunteeringCard } from "../components/Account/VolunteeringCard";
import TodoAccount from "../components/Account/TodoAccount";
import { IconSettings } from "@tabler/icons-react";

const Account = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const name = user.name;
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="w-full mt-15">
        <h1 className="text-white my-5 text-5xl font-bold">{name}'s Account</h1>
      </div>
      <Divider size={4} />
      <div className="infoGroup mt-5">
        <TodoAccount />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VolunteeringCard />
          <VolunteeringCard last={true} />
        </div>
        <Button
          fullWidth
          className="mt-5"
          color="gray"
          leftSection={<IconSettings />}
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        >
          Configure your account
        </Button>
      </div>
    </div>
  );
};

export default Account;
