import React from "react";
import ToggleSwitch from "@/components/ui/toggle-switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const CommunicationSettings = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Communication from Munmart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ToggleSwitch name="toggleExample" id="exampleToggle" />
            <div>
              <Label htmlFor="password" className="text-base font-medium">
                Postal Mail
              </Label>
              <p className="text-xs">Allow Munmart to send me postal mail</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ToggleSwitch name="toggleExample" id="exampleToggle" />
            <div>
              <Label htmlFor="password" className="text-base font-medium">
                Phone Calls
              </Label>
              <p className="text-xs">Allow Munmart to contact me by phone</p>
            </div>
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
          Save Communication Preferences
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CommunicationSettings;
