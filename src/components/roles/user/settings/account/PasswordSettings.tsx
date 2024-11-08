"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const validationSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});

const PasswordSettings = () => {
  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-1 lg:w-1/2">
              <Label
                htmlFor="current-password"
                className="text-base font-medium"
              >
                Current Password
              </Label>
              <Input
                id="current-password"
                name="currentPassword"
                type="password"
                className="focus-visible:ring-foreground"
                value={formik.values.currentPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.currentPassword &&
                formik.errors.currentPassword && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.currentPassword}
                  </p>
                )}
            </div>
            <div className="grid gap-1 lg:w-1/2">
              <Label htmlFor="new-password" className="text-base font-medium">
                New Password
              </Label>
              <Input
                id="new-password"
                name="newPassword"
                type="password"
                className="focus-visible:ring-foreground"
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {formik.errors.newPassword}
                </p>
              )}
            </div>
            <div className="grid gap-1 lg:w-1/2">
              <Label
                htmlFor="confirm-new-password"
                className="text-base font-medium"
              >
                Confirm New Password
              </Label>
              <Input
                id="confirm-new-password"
                name="confirmNewPassword"
                type="password"
                className="focus-visible:ring-foreground"
                value={formik.values.confirmNewPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmNewPassword &&
                formik.errors.confirmNewPassword && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.confirmNewPassword}
                  </p>
                )}
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
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Change Password
          </Button>
          <p className="text-muted-foreground text-xs">
            Need help?{" "}
            <Link href="/" className="underline">
              Find answers at the Munmart Help Centre
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default PasswordSettings;
