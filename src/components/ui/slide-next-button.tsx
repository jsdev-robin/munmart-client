import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface SlideNextButtonProps {
  className?: string;
}

const SlideNextButton: React.FC<SlideNextButtonProps> = ({ className }) => {
  return (
    <button
      className={cn(
        "bg-background rounded-full border shadow-2xl h-12 w-12 flex items-center justify-center transition-all hover:bg-muted",
        className
      )}
    >
      <ChevronRight className="h-8 w-8 text-foreground" />
      <span className="sr-only">Next slide</span>
    </button>
  );
};

export default SlideNextButton;
