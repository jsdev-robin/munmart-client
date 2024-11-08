import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";
import PublicProfileSettings from "@/components/roles/user/settings/publicProfile/Index";

const PublicProfileSettingsPage = () => {
  return (
    <MainLayout>
      <UserSettingsLayout>
        <PublicProfileSettings />
      </UserSettingsLayout>
    </MainLayout>
  );
};

export default PublicProfileSettingsPage;
