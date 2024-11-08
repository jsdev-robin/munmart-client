import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";
import AccountSettings from "@/components/roles/user/settings/account/Index";

const AccountSettingsPage = () => {
  return (
    <>
      <MainLayout>
        <UserSettingsLayout>
          <AccountSettings />
        </UserSettingsLayout>
      </MainLayout>
    </>
  );
};

export default AccountSettingsPage;
