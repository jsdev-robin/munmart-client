import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const TwoFactorSettings = () => {
  return (
    <div className="border rounded-md">
      <div className="bg-secondary py-2.5 px-4 border-b">
        <Heading className="mb-0" variant="h6">
          Two-factor Authentication (2FA)
        </Heading>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2.5">
          <Heading className="mb-0 hidden lg:block" variant="h6">
            Two-factor Authentication (2FA)
          </Heading>
          <div className="flex items-center gap-x-2.5">
            <span className="py-1 px-2 text-[13px] rounded-full bg-[#fdc7a1]">
              Strongly recommended
            </span>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full bg-foreground text-white hover:bg-foreground hover:opacity-80 hover:shadow-4 hover:text-white"
              )}
            >
              Turn on 2FA
            </Link>
          </div>
        </div>
        <Text className="mb-0">
          When turned on, anyone who tries to sign in from a new device or
          browser will need to verify that they have access to your account.{" "}
          <Link href="/" className="underline">
            Learn more
          </Link>
        </Text>
      </div>
    </div>
  );
};

export default TwoFactorSettings;
