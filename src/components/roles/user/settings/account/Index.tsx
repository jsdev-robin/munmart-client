import React from "react";
import AboutYouSettings from "./AboutYouSettings";
import LocationSettings from "./LocationSettings";
import PasswordSettings from "./PasswordSettings";
import EmailChangeSettings from "./EmailChangeSettings";
import CommunicationSettings from "./CommunicationSettings";

const AccountSettings = () => {
  return (
    <div className="space-y-4">
      <AboutYouSettings />
      <LocationSettings />
      <PasswordSettings />
      <EmailChangeSettings />
      <CommunicationSettings />
    </div>
  );
};

export default AccountSettings;
