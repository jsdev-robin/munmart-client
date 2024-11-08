"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import Heading from "@/components/ui/heading";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import ProfilePictureChanger from "./ProfilePictureChanger";
import ProfileNameChanger from "./ProfileNameChanger";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const PublicProfileSettings = () => {
  const [gender, setGender] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      gender: "",
      customGender: "",
      city: "",
      birthday: "",
      about: "",
      favouriteMaterials: "",
      includeShop: false,
      includeFavItems: false,
      includeFavShops: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Heading variant="h4" className="mb-0 font-normal">
          Everything on this page can be seen by anyone
        </Heading>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "h-7 text-sm font-normal"
          )}
        >
          View Profile
        </Link>
      </div>
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <CardContent className="p-6">
            <div className="space-y-4">
              <ProfilePictureChanger />
              <Separator />
              <ProfileNameChanger />
              <Separator />
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:items-center">
                <Label
                  id="genderLabel"
                  className="text-xs font-bold md:w-32 md:text-right"
                >
                  Gender
                </Label>
                <div className="flex flex-col gap-2 md:gap-4 md:h-8 md:flex-row md:items-center">
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="gender-female"
                      name="gender"
                      value="Female"
                      onChange={(e) => {
                        setGender("Female");
                        formik.handleChange(e);
                      }}
                    />
                    <Label
                      htmlFor="gender-female"
                      className="text-xs font-normal"
                    >
                      Female
                    </Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="gender-male"
                      name="gender"
                      value="Male"
                      onChange={(e) => {
                        setGender("Male");
                        formik.handleChange(e);
                      }}
                    />
                    <Label
                      htmlFor="gender-male"
                      className="text-xs font-normal"
                    >
                      Male
                    </Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="gender-none"
                      name="gender"
                      value="Prefer not to say"
                      onChange={(e) => {
                        setGender("Prefer not to say");
                        formik.handleChange(e);
                      }}
                    />
                    <Label
                      htmlFor="gender-none"
                      className="text-xs font-normal"
                    >
                      Prefer not to say
                    </Label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      id="gender-custom"
                      name="gender"
                      value="Custom"
                      onChange={(e) => {
                        setGender("Custom");
                        formik.handleChange(e);
                      }}
                    />
                    <Label
                      htmlFor="gender-custom"
                      className="text-xs font-normal"
                    >
                      Custom
                    </Label>
                  </div>
                  {gender === "Custom" && (
                    <Input
                      type="text"
                      id="custom-gender"
                      name="customGender"
                      onChange={formik.handleChange}
                      value={formik.values.customGender}
                      className="focus-visible:ring-foreground md:w-24 h-8"
                    />
                  )}
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
                <Label
                  id="cityLabel"
                  htmlFor="city"
                  className="text-xs font-bold md:w-32 md:text-right"
                >
                  City
                </Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  className="focus-visible:ring-foreground h-8 md:w-3/5"
                />
              </div>
              <Separator />
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
                <Label
                  id="birthdayLabel"
                  htmlFor="birthday"
                  className="text-xs font-bold md:w-32 md:text-right"
                >
                  Birthday
                </Label>
                <Input
                  type="date"
                  id="birthday"
                  name="birthday"
                  onChange={formik.handleChange}
                  value={formik.values.birthday}
                  className="focus-visible:ring-foreground h-8 w-32 text-xs placeholder:text-xs"
                />
              </div>
              <Separator />
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
                <Label
                  id="aboutLabel"
                  htmlFor="about"
                  className="text-xs font-bold md:w-32 md:text-right"
                >
                  About
                </Label>
                <div className="md:w-3/5">
                  <Textarea
                    id="about"
                    name="about"
                    onChange={formik.handleChange}
                    value={formik.values.about}
                    className="focus-visible:ring-foreground h-8"
                  />
                  <span className="text-xs text-muted-foreground">
                    Tell people a little about yourself.
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
                <Label
                  id="materialsLabel"
                  htmlFor="favourite-materials"
                  className="text-xs font-bold md:w-32 md:text-right"
                >
                  Favourite Materials
                </Label>
                <div className="md:w-3/5">
                  <Textarea
                    id="favourite-materials"
                    name="favouriteMaterials"
                    onChange={formik.handleChange}
                    value={formik.values.favouriteMaterials}
                    className="focus-visible:ring-foreground h-8"
                  />
                  <span className="text-xs text-muted-foreground">
                    Share up to 13 materials that you like. Separate each
                    material with a comma.
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
                <Label
                  id="profileIncludeLabel"
                  className="text-xs font-bold md:w-32 md:text-right"
                >
                  Include on Your Profile
                </Label>
                <div className="flex flex-col gap-y-1.5 w-full">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="include-shop"
                      name="includeShop"
                      onChange={formik.handleChange}
                      checked={formik.values.includeShop}
                    />
                    <label
                      htmlFor="include-shop"
                      className="text-xs font-normal"
                    >
                      Shop
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="include-fav-items"
                      name="includeFavItems"
                      onChange={formik.handleChange}
                      checked={formik.values.includeFavItems}
                    />
                    <label
                      htmlFor="include-fav-items"
                      className="text-xs font-normal"
                    >
                      Favourite items
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="include-fav-shops"
                      name="includeFavShops"
                      onChange={formik.handleChange}
                      checked={formik.values.includeFavShops}
                    />
                    <label
                      htmlFor="include-fav-shops"
                      className="text-xs font-normal"
                    >
                      Favourite shops
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2">
            <Button
              className={cn(
                "rounded-full bg-foreground text-white hover:bg-foreground hover:opacity-80 hover:shadow-4 hover:text-white"
              )}
              variant="outline"
              type="submit"
            >
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default PublicProfileSettings;
