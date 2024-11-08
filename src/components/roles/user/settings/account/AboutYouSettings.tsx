import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Label } from "@/components/ui/label";

const AboutYouSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">About You</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-1">
            <Label className="text-base font-medium">Name</Label>
            <p className="text-base font-light">Robin Mind</p>
          </div>
          <div className="grid gap-1">
            <Label className="text-base font-medium">Member since</Label>
            <p className="text-base font-light">04 October, 2024</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href="/your/account/profile"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full border-2 border-foreground hover:shadow-4"
          )}
        >
          Edit public profile
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AboutYouSettings;
