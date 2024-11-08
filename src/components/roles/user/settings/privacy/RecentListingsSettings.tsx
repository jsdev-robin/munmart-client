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

const RecentListingsSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Your recently viewed Listings</CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="lead" className="font-normal leading-7 mb-0">
          Clear your recently viewed listings and we&apos;ll no longer show them
          on the site. Listings that you view in the future will be recorded.
        </Text>
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            "rounded-full border-2 border-foreground hover:shadow-4"
          )}
          variant="outline"
        >
          Clear recently viewed listings
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecentListingsSettings;
