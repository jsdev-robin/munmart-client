import React from "react";
import RecentListingsSettings from "./RecentListingsSettings";
import DataDownloadSettings from "./DataDownloadSettings";
import AccountDeletionSettings from "./AccountDeletionSettings";
import PrivacyControlsSettings from "./PrivacyControlsSettings";

const PrivacySettings = () => {
  return (
    <div className="space-y-4">
      <RecentListingsSettings />
      <DataDownloadSettings />
      <AccountDeletionSettings />
      <PrivacyControlsSettings />
    </div>
  );
};

export default PrivacySettings;
