import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";
import PrivacySettings from "@/components/roles/user/settings/privacy/Index";

const PrivacySettingsPage = () => {
  return (
    <MainLayout>
      <UserSettingsLayout>
        <PrivacySettings />
      </UserSettingsLayout>
    </MainLayout>
  );
};

export default PrivacySettingsPage;
