import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";
import CreditCardsSettings from "@/components/roles/user/settings/creditCards/Index";

const CreditCardsSettingsPage = () => {
  return (
    <MainLayout>
      <UserSettingsLayout>
        <CreditCardsSettings />
      </UserSettingsLayout>
    </MainLayout>
  );
};

export default CreditCardsSettingsPage;
