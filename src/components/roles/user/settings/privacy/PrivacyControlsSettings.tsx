import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Heading from "@/components/ui/heading";
import ToggleSwitch from "@/components/ui/toggle-switch";

const consent = [
  "basic site functions",
  "Ensuring secure, safe transactions",
  "Secure account login",
  "Remembering account, browser, and regional preferences",
  "Remembering privacy and security settings",
  "Analyzing site traffic and usage",
  "Personalized search, content, and recommendations",
  "Helping sellers understand their audience",
  "Showing relevant, targeted ads on and off Munmart",
];

const PrivacyControlsSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Privacy Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-4">
            <Heading variant="h5">Findability</Heading>
            <div className="flex justify-between">
              <Text variant="lead" className="font-normal leading-7 mb-0 w-4/5">
                Do you want others to be able to find you by your email address?
                Your email address will not be publicly displayed.
              </Text>
              <ToggleSwitch />
            </div>
          </div>
          <div className="space-y-4">
            <Heading variant="h5">Consent</Heading>
            <div>
              <span className="text-xs">
                Munmart uses cookies and similar technologies to give you a
                better experience, enabling things like:
              </span>
              <ul className="list-disc">
                {consent.map((func, index) => (
                  <li key={index} className="text-xs">
                    {func}
                  </li>
                ))}
              </ul>
              <span className="text-xs">
                Detailed information can be found in Munmart{" "}
                <Link href="/" className="underline">
                  Cookies & Similar Technologies Policy
                </Link>{" "}
                and{" "}
                <Link href="/" className="underline">
                  our Privacy Policy.
                </Link>
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <Heading variant="h5">Required Cookies & Technologies</Heading>
            <div className="flex justify-between">
              <Text variant="small" className="font-normal text-xs mb-0 w-4/5">
                Some of the technologies we use are necessary for critical
                functions like security and site integrity, account
                authentication, security and privacy preferences, internal site
                usage and maintenance data, and to make the site work correctly
                for browsing and transactions.
              </Text>
              <span>Always on</span>
            </div>
          </div>
          <div className="space-y-4">
            <Heading variant="h5">Personalised Advertising</Heading>
            <div className="flex justify-between">
              <Text
                variant="small"
                className="font-normal text-[13px] mb-0 w-4/5"
              >
                To enable personalised advertising (like interest-based ads), we
                may share your data with our marketing and advertising partners
                using cookies and other technologies. Those partners may have
                their own information they’ve collected about you. Turning off
                the personalised advertising setting won’t stop you from seeing
                Munmart ads, but it may make the ads you see less relevant or
                more repetitive. <br /> <br /> Personalised advertising may be
                considered a “sale” or “sharing” of information under California
                and other state privacy laws, and you may have a right to opt
                out. Turning off personalised advertising allows you to exercise
                your right to opt out. Learn more in our Privacy Policy, Help
                Centre, and Cookies & Similar Technologies Policy.
              </Text>
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "rounded-full border-2 border-foreground hover:shadow-4"
          )}
          variant="outline"
        >
          Update Settings
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PrivacyControlsSettings;
