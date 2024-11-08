"use client";

import React from "react";
import Heading from "@/components/ui/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormValues {
  send_message: boolean;
  receive_reply: boolean;
  new_follower: boolean;
  listing_expiration: boolean;
}

const notificationOptions = [
  { id: "send_message", label: "Someone sends me a Message" },
  { id: "receive_reply", label: "I send a Message" },
  { id: "new_follower", label: "Someone follows me" },
  { id: "listing_expiration", label: "My listings are about to expire" },
];

const EmailNotificationsSettings = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      send_message: false,
      receive_reply: false,
      new_follower: false,
      listing_expiration: false,
    },
    onSubmit: (values: FormValues) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Heading variant="h5">Email me when...</Heading>
            <div className="space-y-2">
              {notificationOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={option.id}
                    name={option.id}
                    value={option.id}
                    className="custom-checkbox"
                    checked={formik.values[option.id as keyof FormValues]}
                    onChange={formik.handleChange}
                  />
                  <Label
                    htmlFor={option.id}
                    className="text-sm font-light cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className={cn(
              "rounded-full bg-foreground text-white hover:bg-foreground hover:opacity-80 hover:shadow-4 hover:text-white"
            )}
            variant="outline"
            type="submit"
          >
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EmailNotificationsSettings;
