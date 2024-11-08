"use client";

import React from "react";
import { Search } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { badgeVariants } from "@/components/ui/badge";
import useSearch from "@/hooks/useSearch";
import Overlay from "@/components/ui/overlay";

const tags = Array.from({ length: 100 }).map(
  (_, i, a) => `Searching.${a.length - i}`
);

interface HeaderSearchHubProps {
  className?: string;
}

const HeaderSearchHub: React.FC<HeaderSearchHubProps> = ({ className }) => {
  const {
    searchData,
    open,
    setOpen,
    inputRef,
    handleSearchChange,
    handleFocus,
    handleBlur,
  } = useSearch();

  return (
    <>
      <div className={cn("flex-1 relative z-50", className)}>
        <div className="relative">
          <Input
            ref={inputRef}
            onChange={handleSearchChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="search"
            placeholder="Search (Ctrl + K)"
            className="w-full rounded-full border-2 border-foreground focus-visible:ring-0 focus-visible:border-primary pr-12 h-11 lg:h-12"
          />
          <span className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary rounded-full flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10">
            <Search className="h-6 w-6 text-white" />
          </span>
        </div>
        {open && (
          <div className="absolute bg-background py-2 top-full z-50 w-full h-full min-h-80 rounded-lg shadow-4">
            {searchData && searchData.length !== 0 ? (
              <ScrollArea className="w-full h-full">
                <div className="">
                  {tags.map((tag) => (
                    <React.Fragment key={tag}>
                      <Link
                        href="/your/account"
                        className="text-base block w-full py-2 px-4 font-medium hover:bg-muted"
                      >
                        {tag}
                      </Link>
                    </React.Fragment>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <ScrollArea className="w-full h-full">
                <div className="px-4">
                  <Heading variant="h5">Popular right now</Heading>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/"
                      className={cn(
                        badgeVariants({ variant: "secondary" }),
                        "rounded-full flex items-center gap-1 px-1 capitalize font-normal transition-all hover:opacity-85"
                      )}
                    >
                      <Image
                        src="/images/products/01.jpg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border"
                        priority
                      />
                      <span>womens clothes</span>
                    </Link>
                    <Link
                      href="/"
                      className={cn(
                        badgeVariants({ variant: "secondary" }),
                        "rounded-full flex items-center gap-1 px-1 capitalize font-normal transition-all hover:opacity-85"
                      )}
                    >
                      <Image
                        src="/images/products/02.jpg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border"
                        priority
                      />
                      <span>womens clothes</span>
                    </Link>
                    <Link
                      href="/"
                      className={cn(
                        badgeVariants({ variant: "secondary" }),
                        "rounded-full flex items-center gap-1 px-1 capitalize font-normal transition-all hover:opacity-85"
                      )}
                    >
                      <Image
                        src="/images/products/03.jpg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6 rounded-full border"
                        priority
                      />
                      <span>womens clothes</span>
                    </Link>
                  </div>
                </div>
              </ScrollArea>
            )}
          </div>
        )}
      </div>
      {open && <Overlay onClick={() => setOpen(false)} />}
    </>
  );
};

export default HeaderSearchHub;
