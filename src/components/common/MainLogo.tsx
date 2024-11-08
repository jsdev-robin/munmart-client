import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MainLogoProps {
  isSeller?: boolean;
  className?: string;
}

const MainLogo: React.FC<MainLogoProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <Link href="/">
        <div
          className={cn(
            "text-3xl leading-none font-lora font-black text-primary lg:text-4xl lg:text-foreground"
          )}
        >
          Mun<span className="text-primary hidden lg:inline-block">mart</span>
        </div>
      </Link>
    </div>
  );
};

export default MainLogo;
