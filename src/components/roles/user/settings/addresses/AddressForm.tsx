"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { countryData } from "@/data/countryData";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface AddressFormProps {
  setOpen: (open: boolean) => void;
}

const AddressForm: React.FC<AddressFormProps> = ({ setOpen }) => {
  const [selectedCountry, setSelectedCountry] = useState("US");

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    streetAddress: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    postCode: Yup.string().optional(),
    flat: Yup.string().optional(),
    defaultAddress: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      country: selectedCountry,
      fullName: "",
      streetAddress: "",
      flat: "",
      city: "",
      postCode: "",
      defaultAddress: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      // setOpen(false);
    },
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-black/20 h-full  z-[99999] overflow-y-auto w-screen"
      onClick={() => setOpen(false)}
    >
      <div className="px-2">
        <form onSubmit={formik.handleSubmit}>
          <Card
            className="my-16 mx-auto max-w-xl rounded-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <CardHeader>
              <CardTitle className="text-34l font-lora font-light">
                Enter an address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <Label htmlFor="country" className="text-base font-medium">
                    Country
                  </Label>
                  <select
                    id="country"
                    className="select h-12 text-base"
                    value={formik.values.country}
                    onChange={(e) => {
                      formik.setFieldValue("country", e.target.value);
                      setSelectedCountry(e.target.value);
                    }}
                  >
                    <option value="US">Choose a country</option>
                    {countryData.map((item, index) => (
                      <option value={item.code} key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="fullName" className="text-base font-medium">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    className="h-12 text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.fullName}
                    </div>
                  )}
                </div>
                <div className="grid gap-1">
                  <Label
                    htmlFor="streetAddress"
                    className="text-base font-medium"
                  >
                    Street address
                  </Label>
                  <Input
                    id="streetAddress"
                    name="streetAddress"
                    className="h-12 text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.streetAddress}
                  />
                  {formik.touched.streetAddress &&
                    formik.errors.streetAddress && (
                      <div className="text-red-500 text-sm">
                        {formik.errors.streetAddress}
                      </div>
                    )}
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="flat" className="text-base font-medium">
                    Flat/Other{" "}
                    <span className="text-sm font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="flat"
                    name="flat"
                    className="h-12 text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.flat}
                  />
                  {formik.touched.flat && formik.errors.flat && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.flat}
                    </div>
                  )}
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="city" className="text-base font-medium">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    className="h-12 text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.city}
                    </div>
                  )}
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="postCode" className="text-base font-medium">
                    Post code{" "}
                    <span className="text-sm font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="postCode"
                    name="postCode"
                    className="h-12 text-base"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.postCode}
                  />
                  {formik.touched.postCode && formik.errors.postCode && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.postCode}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="defaultAddress"
                    name="defaultAddress"
                    className="custom-checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.defaultAddress}
                  />
                  <Label
                    htmlFor="defaultAddress"
                    className="text-base cursor-pointer"
                  >
                    Set as default
                  </Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button
                className={cn("rounded-full hover:shadow-4 hover:text-white")}
                variant="destructive"
                type="button"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button
                className={cn(
                  "rounded-full bg-foreground text-white hover:bg-foreground hover:opacity-80 hover:shadow-4 hover:text-white"
                )}
                variant="outline"
                type="submit"
              >
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
