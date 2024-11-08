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

const AccountDeletionSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          Permanently close and delete your Munmart account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="lead" className="font-normal leading-7 mb-0">
          Permanently close and delete your account. Once deleted, your account
          can&apos;t be restored.{" "}
          <Link href="/" className="underline">
            Learn more.
          </Link>
        </Text>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "rounded-full border-2 border-foreground hover:shadow-4"
          )}
          variant="outline"
        >
          Request deletion of your data
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountDeletionSettings;
