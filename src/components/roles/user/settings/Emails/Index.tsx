import React from "react";
import Heading from "@/components/ui/heading";
import EmailNotificationsSettings from "./EmailNotificationsSettings";
import EmailSubscriptionsSettings from "./EmailSubscriptionsSettings";

const EmailsSettings = () => {
  return (
    <div className="space-y-4">
      <Heading variant="h4" className="mb-0 font-normal font-lora">
        Email settings for robin.rh656@gmail.com
      </Heading>
      <EmailNotificationsSettings />
      <EmailSubscriptionsSettings />
    </div>
  );
};

export default EmailsSettings;
