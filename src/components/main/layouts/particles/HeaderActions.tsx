"use client";

import React from "react";
import { Gift, Heart, Store, ShoppingBag } from "lucide-react";
import HeaderNotifyHub from "./HeaderNotifyHub";
import HeaderProfileActions from "./HeaderProfileActions";
import TooltipItem from "@/components/ui/tooltip-item";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const iconItems = [
  { tooltip: "Favourite", icon: Heart, href: "/" },
  { tooltip: "Gift", icon: Gift, href: "/" },
  // { tooltip: "Store", icon: Store, href: "/" },
  { tooltip: "Cart", icon: ShoppingBag, href: "/" },
];

const HeaderActions = () => {
  const isAuth = false;
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center lg:gap-x-2.5">
        <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "rounded-full h-8"
          )}
        >
          Sign in
        </Link>
        {iconItems.map(({ tooltip, icon: Icon, href }, index) => (
          <TooltipItem key={index} tooltip={tooltip}>
            <Link
              href={href}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "rounded-full border-none hover:!bg-blue-500/30 size-9 lg:size-10"
              )}
            >
              <Icon className="!size-5 lg:!size-6" />
            </Link>
          </TooltipItem>
        ))}
        {isAuth && (
          <>
            <HeaderNotifyHub />
            <HeaderProfileActions />
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderActions;
