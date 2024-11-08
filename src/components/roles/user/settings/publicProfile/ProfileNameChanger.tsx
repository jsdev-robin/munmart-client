"use client";

import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import ProfileNameChangerForm from "./ProfileNameChangerForm";

const ProfileNameChanger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center">
      <Label id="fullName" className="text-xs font-bold md:w-32 md:text-right">
        Your Name
      </Label>
      <p className="text-xs">Robin Mind</p>
      <span
        className="text-foreground px-0 text-xs font-normal underline leading-none block cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Change or remove
      </span>
      {isOpen && (
        <ProfileNameChangerForm isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default ProfileNameChanger;
