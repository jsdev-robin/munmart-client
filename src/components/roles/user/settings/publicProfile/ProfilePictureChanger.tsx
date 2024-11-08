"use client";

import React from "react";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import useFileUpload from "@/hooks/use-file-upload";

const ProfilePictureChanger = () => {
  const { files, previewUrls, base64Data, error, handleFileChange } =
    useFileUpload({ multiple: false });

  return (
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
      <Label id="myFile" className="text-xs font-bold md:w-32 md:text-right">
        Profile Picture
      </Label>
      <div className="space-y-4 md:w-3/5">
        <input
          type="file"
          id="fileUpload"
          className="text-xs mx-auto"
          onChange={handleFileChange}
          accept=".jpg, .jpeg, .png, .gif"
        />

        <div className="w-40 h-40 rounded-full bg-muted">
          {files.length > 0 ? (
            <Image
              src={previewUrls[0]}
              alt={previewUrls[0]}
              width={160}
              height={160}
              className="w-full h-full rounded-full"
            />
          ) : (
            <Image
              src="/images/pattern/default_avatar.png"
              alt=""
              width={160}
              height={160}
              className="w-full h-full rounded-full"
            />
          )}
        </div>
        {error ? (
          <span className="text-xs text-red-500">{error}</span>
        ) : (
          <span className="text-xs block text-muted-foreground">
            Must be a .jpg, .gif or .png file smaller than 10 MB and at least
            400px by 400px.
          </span>
        )}
      </div>
    </div>
  );
};

export default ProfilePictureChanger;
