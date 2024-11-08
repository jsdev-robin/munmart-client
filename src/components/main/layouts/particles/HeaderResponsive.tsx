"use client";

import React from "react";
import MainLogo from "@/components/common/MainLogo";
import HeaderActions from "./HeaderActions";
import HeaderSearchHub from "./HeaderSearchHub";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { categoryData } from "./HeaderCategoryMenu";
import Link from "next/link";

const HeaderResponsive = () => {
  return (
    <>
      <header className="lg:hidden border-b-2 py-2">
        <div className="container">
          <div className="space-y-1.5 w-full">
            <div className="flex items-center flex-wrap justify-between gap-x-4">
              <MainLogo />
              <HeaderActions />
            </div>
            <div className="flex items-center gap-2.5">
              <Sheet>
                <SheetTrigger>
                  <AlignLeft />
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <MainLogo />
                    </SheetTitle>
                    <SheetDescription>
                      Explore our categories to discover a variety of products
                      tailored to your needs.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="h-screen">
                    <ScrollArea className="h-full">
                      {categoryData.map((item, index) => (
                        <React.Fragment key={index}>
                          <Link href="/" className="block py-2 text-base">
                            {item}
                          </Link>
                          <Separator />
                        </React.Fragment>
                      ))}
                    </ScrollArea>
                  </div>
                </SheetContent>
              </Sheet>
              <HeaderSearchHub />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderResponsive;
