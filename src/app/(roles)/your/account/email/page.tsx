import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";
import EmailsSettings from "@/components/roles/user/settings/Emails/Index";

const EmailSettingsPage = () => {
  return (
    <MainLayout>
      <UserSettingsLayout>
        <EmailsSettings />
      </UserSettingsLayout>
    </MainLayout>
  );
};

export default EmailSettingsPage;
