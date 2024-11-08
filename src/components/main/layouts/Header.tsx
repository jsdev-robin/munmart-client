import React, { Suspense } from "react";
import MainLogo from "@/components/common/MainLogo";
import { Skeleton } from "@/components/ui/skeleton";
import HeaderCategoryMenu from "./particles/HeaderCategoryMenu";
import HeaderSearchHub from "./particles/HeaderSearchHub";
import HeaderActions from "./particles/HeaderActions";

const Header = () => {
  return (
    <header className="bg-background py-2.5 hidden lg:block">
      <div className="container">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <MainLogo />
            <Suspense fallback={<Skeleton className="w-28 h-8" />}>
              <HeaderCategoryMenu />
            </Suspense>
          </div>
          <Suspense
            fallback={<Skeleton className="w-full h-11 rounded-full" />}
          >
            <HeaderSearchHub />
          </Suspense>
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
