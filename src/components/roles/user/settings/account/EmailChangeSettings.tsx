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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Heading from "@/components/ui/heading";

const validationSchema = Yup.object({
  newEmail: Yup.string()
    .email("Invalid email address")
    .required("New email is required"),
  confirmNewEmail: Yup.string()
    .oneOf([Yup.ref("newEmail"), undefined], "Emails must match")
    .required("Confirm new email is required"),
  password: Yup.string().required("Password is required"),
});

const EmailChangeSettings = () => {
  const formik = useFormik({
    initialValues: {
      newEmail: "",
      confirmNewEmail: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Email</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="grid gap-1">
                <Label className="text-base font-medium">Current email</Label>
                <p className="text-base font-light">robin.rh656@gmail.com</p>
              </div>
              <div className="grid gap-1">
                <Label className="text-base font-medium">Status</Label>
                <p className="text-base font-light">Confirmed</p>
              </div>
            </div>
            <Separator />
            <Heading variant="h4">Change your email</Heading>
            <div className="space-y-4">
              <div className="grid gap-1 lg:w-1/2">
                <Label htmlFor="new-email" className="text-base font-medium">
                  New email
                </Label>
                <Input
                  id="new-email"
                  name="newEmail"
                  type="email"
                  className="focus-visible:ring-foreground"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newEmail}
                />
                {formik.touched.newEmail && formik.errors.newEmail && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.newEmail}
                  </p>
                )}
              </div>
              <div className="grid gap-1 lg:w-1/2">
                <Label
                  htmlFor="confirm-new-email"
                  className="text-base font-medium"
                >
                  Confirm new email
                </Label>
                <Input
                  id="confirm-new-email"
                  name="confirmNewEmail"
                  type="email"
                  className="focus-visible:ring-foreground"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmNewEmail}
                />
                {formik.touched.confirmNewEmail &&
                  formik.errors.confirmNewEmail && (
                    <p className="text-red-500 text-sm">
                      {formik.errors.confirmNewEmail}
                    </p>
                  )}
              </div>
              <div className="grid gap-1 lg:w-1/2">
                <Label htmlFor="password" className="text-base font-medium">
                  Your Munmart password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  className="focus-visible:ring-foreground"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.password}
                  </p>
                )}
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
            disabled={!formik.isValid || formik.isSubmitting}
          >
            Change Email
          </Button>
          <p className="text-muted-foreground text-xs">
            Your email address will not change until you confirm it via email.
          </p>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EmailChangeSettings;
