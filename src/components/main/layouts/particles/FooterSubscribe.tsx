"use client";

import React, { useState } from "react";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FooterSubscribe = () => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <div className="bg-sky-300/50 py-4 md:py-6 lg:py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Text className="font-bold text-center md:text-base">
            Yes! Send me exclusive offers, unique gift ideas, and personalised
            tips for shopping and selling on Muntaha.
          </Text>
          <div
            className={cn(
              "flex items-center w-full bg-background border border-foreground pr-1 rounded-full h-11 md:h-12 lg:max-w-lg",
              focus ? "ring-2 ring-foreground border-transparent" : ""
            )}
          >
            <input
              placeholder="Enter your email"
              type="email"
              className="flex-1 w-full h-full px-4 rounded-full text-base outline-none placeholder:text-base"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <Button className="rounded-full bg-foreground hover:bg-foreground h-9 md:h-10">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSubscribe;
