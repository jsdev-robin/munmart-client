import React from "react";
import UserSettingsTabs from "./UserSettingsTabs";

interface UserSettingsLayoutProps {
  children: React.ReactNode;
}

const UserSettingsLayout: React.FC<UserSettingsLayoutProps> = ({
  children,
}) => {
  return (
    <div className="container max-w-4xl bg-secondary pb-8 lg:bg-background">
      <UserSettingsTabs />
      {children}
    </div>
  );
};

export default UserSettingsLayout;
