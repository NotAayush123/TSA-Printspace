import React, { useState } from "react";

import InputInfoGroup from "../components/InputInfoGroup";
import { DropzoneButton } from "../components/Account/Dropzone";
import { ProfileDesc } from "../components/Account/ProfileDesc";
import { Button } from "@mantine/core";
const Settings = () => {
  const [profile, setProfile] = useState();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const description = user.description;

  return (
    <div className="mb-5 mx-auto">
      <h1 className="mb-5 text-white font-bold text-5xl mt-5">
        Account Settings
      </h1>
      <div>
        <InputInfoGroup label="Name" />
        <InputInfoGroup label="Email" />
        <DropzoneButton />
        <h3 className="mb-5 text-slate-300 font-semibold text-2xl mt-5">
          {description ? "Your Description" : "Create a description"}
        </h3>
        {description && !profile ? (
          <ProfileDesc read={true} value={description} />
        ) : (
          ""
        )}
        {profile ? (
          <ProfileDesc
            onCancel={() => {
              setProfile(false);
            }}
            onSave={(content) => {
              const newUser = { ...user, description: content };
              localStorage.setItem("currentUser", JSON.stringify(newUser));
              const id = user.id;
              const users = JSON.parse(localStorage.getItem("users"));
              const updatedUsersArray = users.map((u) =>
                u.id === id ? { ...u, description: content } : u
              );
              localStorage.setItem("users", JSON.stringify(updatedUsersArray));
              window.location.reload();
            }}
          />
        ) : (
          <Button
            className="mt-3"
            fullWidth
            onClick={() => {
              setProfile(true);
            }}
          >
            {description ? "Edit your description" : "Create a description"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Settings;
