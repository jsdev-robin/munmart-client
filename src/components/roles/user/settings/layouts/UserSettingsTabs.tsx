"use client";

import React from "react";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/your/account", label: "Account" },
  { href: "/your/account/security", label: "Security" },
  { href: "/your/account/profile", label: "Public Profile" },
  { href: "/your/account/privacy", label: "Privacy" },
  { href: "/your/account/addresses", label: "Addresses" },
  { href: "/your/account/credit-cards", label: "Credit Cards" },
  { href: "/your/account/email", label: "Emails" },
];

const UserSettingsTabs = () => {
  const pathName = usePathname();
  return (
    <div className="pt-4 pb-4 lg:pt-6">
      <div className="flex items-center justify-between flex-nowrap gap-8 overflow-x-auto lg:gap-6">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group whitespace-nowrap"
          >
            <Heading variant="h4" className="font-medium text-lg lg:text-xl">
              {link.label}
            </Heading>
            <span
              className={cn(
                "w-full h-0.5 rounded-full bg-black block opacity-0 transition-all scale-0 group-hover:opacity-100 group-hover:scale-100",
                pathName === link.href && "opacity-100 scale-100"
              )}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserSettingsTabs;
