"use client";

import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

export const categoryData = [
  "Men's fashion",
  "Home Improvement & Tools",
  "Outdoor Fun & Sports",
  "Women's fashion",
  "ebook",
  "Jewelry & Watches",
  "Toys, Kids & Babies",
  "Beauty, Health & Hair",
  "Mobile Accessories",
  "Computer, Office & Security",
  "Phones & Telecom",
  "Home, Pet & Appliances",
  "Bags & Shoes",
];

interface HeaderCategoryMenuProps {
  className?: string;
}

const HeaderCategoryMenu: React.FC<HeaderCategoryMenuProps> = ({
  className,
}) => {
  return (
    <Menubar className={cn("h-8 px-1 font-medium rounded-full", className)}>
      <MenubarMenu>
        <MenubarTrigger className="rounded-full h-6">
          <AlignJustify className="w-4 h-4 mr-1" />
          Categories
        </MenubarTrigger>
        <MenubarContent className="h-96 w-80">
          <ScrollArea className="h-full">
            {categoryData.map((category, index) => (
              <React.Fragment key={index}>
                <MenubarItem>{category}</MenubarItem>
                <MenubarSeparator />
              </React.Fragment>
            ))}
          </ScrollArea>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default HeaderCategoryMenu;
