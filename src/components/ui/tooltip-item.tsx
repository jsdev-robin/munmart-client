import { cn } from "@/lib/utils";
import React from "react";

interface TooltipItemProps {
  children: React.ReactNode;
  tooltip?: string;
  className?: string;
}

const TooltipItem: React.FC<TooltipItemProps> = ({
  children,
  tooltip,
  className,
}) => {
  return (
    <div className={cn("relative", className)}>
      <div className="peer">{children}</div>
      {tooltip && (
        <div className="absolute right-1/2 translate-x-1/2 translate-y-1.5 p-2 z-50 rounded-md bg-blue-950 text-white transition-all invisible opacity-0 peer-hover:visible peer-hover:opacity-100">
          {tooltip}
          <div className="tooltip-arrow-down absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-3 h-3 bg-blue-950 rotate-45" />
        </div>
      )}
    </div>
  );
};

export default TooltipItem;
