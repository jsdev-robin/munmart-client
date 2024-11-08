import React from "react";
import MainLayout from "@/components/main/layouts/MainLayout";
import AddressesSettings from "@/components/roles/user/settings/addresses/Index";
import UserSettingsLayout from "@/components/roles/user/settings/layouts/UserSettingsLayout";

const AddressesSettingsPage = () => {
  return (
    <MainLayout>
      <UserSettingsLayout>
        <AddressesSettings />
      </UserSettingsLayout>
    </MainLayout>
  );
};

export default AddressesSettingsPage;
