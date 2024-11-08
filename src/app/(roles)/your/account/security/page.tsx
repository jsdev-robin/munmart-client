import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";
import SecuritySettings from "@/components/roles/user/settings/security/Index";

const SecuritySettingsPage = () => {
  return (
    <MainLayout>
      <UserSettingsLayout>
        <SecuritySettings />
      </UserSettingsLayout>
    </MainLayout>
  );
};

export default SecuritySettingsPage;
