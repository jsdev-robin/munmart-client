"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Heading from "@/components/ui/heading";
import {
  ClipboardList,
  LayoutList,
  LogOut,
  MessageSquare,
  Settings,
  Tag,
} from "lucide-react";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { usePathname } from "next/navigation";
import TooltipItem from "@/components/ui/tooltip-item";
import { Button } from "@/components/ui/button";

const avatar =
  "https://lh3.googleusercontent.com/a/ACg8ocK7E_oBcCXhxfz3uDTQPNAVvYw7AxG2irl2oBwAjsoSI1WyfF8=s96-c";
const menuItems = [
  { href: "/a", icon: ClipboardList, label: "Purchases and reviews" },
  { href: "/b", icon: MessageSquare, label: "Messages" },
  { href: "/c", icon: Tag, label: "Special offers" },
  { href: "/d", icon: LayoutList, label: "Muntaha Registry" },
];

const HeaderProfileActions = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathName = usePathname();
  return (
    <DropdownMenu
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
      }}
    >
      <DropdownMenuTrigger asChild>
        <div>
          <TooltipItem tooltip="Account">
            <Button
              className={cn(
                "rounded-full border-none hover:!bg-blue-500/30 h-10 w-14",
                open && "bg-blue-500/30"
              )}
              variant="outline"
            >
              <Avatar className="w-7 h-7 lg:w-8 lg:h-8">
                <AvatarImage src={avatar} alt="Robin" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
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
            </Button>
          </TooltipItem>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40 max-w-[300px] p-0 mr-1">
        <DropdownMenuItem className="p-0">
          <Link
            href="/your/profile"
            className="inline-flex items-center gap-x-2.5 p-2.5 w-full transition-all hover:bg-primary/20"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={avatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
              <Heading variant="h5" className="mb-0">
                Robin Mind
              </Heading>
              <p className="mb-0">View your profile</p>
            </span>
          </Link>
        </DropdownMenuItem>
        {menuItems.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className={cn(
              "px-4 py-2.5 cursor-pointer",
              pathName === item.href && "text-primary"
            )}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="!size-6" />
              <span className="text-base">{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="my-0" />
        <DropdownMenuItem
          className={cn(
            "p-2.5 cursor-pointer",
            pathName.includes("/your/account") && "text-primary"
          )}
          asChild
        >
          <Link href="/your/account">
            <Settings className="!size-6" />
            <span className="text-base">Account settings</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-2.5 cursor-pointer">
          <LogOut className="!size-6" />
          <span className="text-base">Log out</span>
        </DropdownMenuItem>
        <Arrow className="fill-gray-400" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderProfileActions;
