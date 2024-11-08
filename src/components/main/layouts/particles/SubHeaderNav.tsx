import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Gift } from "lucide-react";

const navItems = [
  {
    href: "/",
    label: "Gift",
    icon: Gift,
  },
  {
    href: "/featured/hub/sales",
    label: "Halloween Shop",
  },
  {
    href: "/",
    label: "Home Favourites",
  },
  {
    href: "/",
    label: "Fashion Finds",
  },
  {
    href: "/",
    label: "Registry",
  },
];

const SubHeaderNav = () => {
  return (
    <nav className="border-b-2 pb-1.5 hidden lg:block">
      <div className="container">
        <div className="flex items-center justify-center gap-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full border-none bg-transparent shadow-none"
              )}
            >
              {item.icon && <item.icon className="w-4 h-4 mr-1.5" />}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SubHeaderNav;
