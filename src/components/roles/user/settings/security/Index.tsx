import React from "react";
import TwoFactorSettings from "./TwoFactorSettings";
import ThirdPartyAccountSettings from "./ThirdPartyAccountSettings.tsx";
import SigninHistorySettings from "./SigninHistorySettings";

const SecuritySettings = () => {
  return (
    <div className="space-y-4">
      <TwoFactorSettings />
      <ThirdPartyAccountSettings />
      <SigninHistorySettings />
    </div>
  );
};

export default SecuritySettings;
