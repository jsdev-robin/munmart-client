import React from "react";
import { Bell } from "lucide-react";
import TooltipItem from "@/components/ui/tooltip-item";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HeaderNotifyHub = () => {
  return (
    <TooltipItem tooltip="Notification">
      <TooltipItem tooltip="Gift">
        <Button
          className={cn(
            "rounded-full border-none hover:!bg-blue-500/30 h-10 w-14"
          )}
          variant="outline"
        >
          <Bell className="!size-5 lg:!size-6" />
          <span className="block -ml-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
            </svg>
          </span>
          <div className="absolute -top-0 right-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500" />
            </span>
          </div>
        </Button>
      </TooltipItem>
    </TooltipItem>
  );
};

export default HeaderNotifyHub;
