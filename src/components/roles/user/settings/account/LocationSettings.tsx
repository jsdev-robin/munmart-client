"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { countryData } from "@/data/countryData";
import { languageData } from "@/data/languageData";
import { currencyData } from "@/data/currencyData";

const LocationSettings = () => {
  const formik = useFormik({
    initialValues: {
      country: "",
      language: "",
      currency: "",
    },
    validationSchema: Yup.object({
      country: Yup.string().required("Country is required"),
      language: Yup.string().required("Language is required"),
      currency: Yup.string().required("Currency is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Location Settings</CardTitle>
          <CardDescription className="text-base">
            Set where you live, what language you speak, and the currency you
            use.{" "}
            <Link href="/" className="underline">
              Learn more.
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-1 lg:w-1/2">
              <Label htmlFor="country" className="text-base font-medium">
                Region
              </Label>
              <select
                id="country"
                name="country"
                className="select focus:ring-foreground"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="US">Choose a country</option>
                {countryData.map((item, index) => (
                  <option
                    value={item.code}
                    key={index}
                    className="py-2.5 block h-10"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              {formik.touched.country && formik.errors.country ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.country}
                </div>
              ) : null}
            </div>

            <div className="grid gap-1 lg:w-1/2">
              <Label htmlFor="language" className="text-base font-medium">
                Language
              </Label>
              <select
                id="language"
                name="language"
                className="select focus:ring-foreground"
                value={formik.values.language}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="en">Choose a language</option>
                {languageData.map((item, index) => (
                  <option
                    value={item.code}
                    key={index}
                    className="py-2.5 block h-10"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              {formik.touched.language && formik.errors.language ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.language}
                </div>
              ) : null}
            </div>

            <div className="grid gap-1 lg:w-1/2">
              <Label htmlFor="currency" className="text-base font-medium">
                Currency
              </Label>
              <select
                id="currency"
                name="currency"
                className="select focus:ring-foreground"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="USD">Choose a currency</option>
                {currencyData.map((item, index) => (
                  <option
                    value={item.code}
                    key={index}
                    className="py-2.5 block h-10"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              {formik.touched.currency && formik.errors.currency ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.currency}
                </div>
              ) : null}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className={cn(
              "rounded-full bg-foreground text-white hover:bg-foreground hover:opacity-80 hover:shadow-4 hover:text-white"
            )}
            variant="outline"
            type="submit"
            // disabled={!formik.isValid || formik.isSubmitting}
          >
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LocationSettings;
