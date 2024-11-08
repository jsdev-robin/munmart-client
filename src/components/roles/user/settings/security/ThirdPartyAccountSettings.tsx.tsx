import React from "react";
import { FacebookIcon, GithubIcon, GoogleIcon } from "@/assets/icon/Index";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import Text from "@/components/ui/text";
import Link from "next/link";

const ThirdPartyAccountSettings = () => {
  return (
    <div className="border rounded-md">
      <div className="bg-secondary py-2.5 px-4 border-b">
        <Heading className="mb-0" variant="h6">
          Third-party accounts
        </Heading>
      </div>
      <div className="p-4">
        <Text>
          Connect your third-party accounts to your Munmart account to sign in
          and check out faster. Once you&apos;ve added a third-party account,
          you can disconnect it anytime here.
        </Text>
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <GoogleIcon />
            <span className="text-xs underline">
              Connect your Google account
            </span>
          </Link>
          <Separator />
          <Link href="/" className="flex items-center gap-2.5">
            <FacebookIcon />
            <span className="text-xs underline">
              Connect your Facebook account
            </span>
          </Link>
          <Separator />
          <Link href="/" className="flex items-center gap-2.5">
            <GithubIcon />
            <span className="text-xs underline">
              Connect your Github account
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyAccountSettings;
