"use client";

import React from "react";
import Heading from "@/components/ui/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormValues {
  new_notable: boolean;
  feedback: boolean;
  coupons_promotions: boolean;
  forums: boolean;
  advocacy: boolean;
  seller_activity: boolean;
  news_features: boolean;
  shop_tips: boolean;
  pattern_news: boolean;
  premium_news: boolean;
}

const subscriptionsGeneralOptions = [
  {
    id: "new_notable",
    label: "New and Notable",
    description:
      "Get the very best of munMart - from new trends and recommendations, to our biggest sales events and collaborations - delivered right to your inbox.",
  },
  {
    id: "feedback",
    label: "Feedback",
    description:
      "Share feedback and help us improve your munMart experience through occasional marketing surveys or interviews.",
  },
  {
    id: "coupons_promotions",
    label: "Coupons and Promotions",
    description:
      "Stay in the know about the finds you love - be the first to learn about sales and special offers.",
  },
  {
    id: "forums",
    label: "Forums",
    description:
      "Keep up with the conversation through notifications for Forums and munMart Teams.",
  },
  {
    id: "advocacy",
    label: "munMart Advocacy",
    description:
      "Learn how you can support the munMart community. Join the munMart Advocacy movement.",
  },
];

const subscriptionsSellerOptions = [
  {
    id: "seller_activity",
    label: "My Seller Activity",
    description:
      "Get up-to-date shop and munMart insights - comprehensive reports and guides to push your business further. Plus, learn about our upcoming marketplace plans.",
  },
  {
    id: "news_features",
    label: "News and Features",
    description:
      "Receive regular updates on how munMart is doing - and how we’re growing.",
  },
  {
    id: "shop_tips",
    label: "Tips for Improving My Shop",
    description:
      "Learn from other sellers to share stories and advice on running a munMart shop.",
  },
  {
    id: "pattern_news",
    label: "Pattern News",
    description:
      "Get the most out of your Pattern site. Get our latest articles, tips, and seller resources delivered right to your inbox.",
  },
  {
    id: "premium_news",
    label: "munMart Plus and Premium News",
    description:
      "Receive information, updates, and special offers on munMart Plus and munMart Premium.",
  },
];

const EmailSubscriptionsSettings = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      new_notable: false,
      feedback: false,
      coupons_promotions: false,
      forums: false,
      advocacy: false,
      seller_activity: false,
      news_features: false,
      shop_tips: false,
      pattern_news: false,
      premium_news: false,
    },
    onSubmit: (values: FormValues) => {
      console.log("Form Values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Your Subscriptions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div className="space-y-4">
              <Heading variant="h5">General</Heading>
              <div className="space-y-2">
                {subscriptionsGeneralOptions.map((option, index) => (
                  <div className="flex gap-2" key={index}>
                    <input
                      type="checkbox"
                      id={`${option.id}-${index}`}
                      name={option.id}
                      checked={formik.values[option.id as keyof FormValues]}
                      onChange={formik.handleChange}
                      className="custom-checkbox"
                    />
                    <Label
                      htmlFor={`${option.id}-${index}`}
                      className="text-sm font-light cursor-pointer flex flex-col"
                    >
                      <span className="font-normal">{option.label}</span>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Heading variant="h5">For Sellers</Heading>
              <div className="space-y-2">
                {subscriptionsSellerOptions.map((option, index) => (
                  <div className="flex gap-2" key={index}>
                    <input
                      type="checkbox"
                      id={`${option.id}-${index}`}
                      name={option.id}
                      checked={formik.values[option.id as keyof FormValues]}
                      onChange={formik.handleChange}
                      className="custom-checkbox"
                    />
                    <Label
                      htmlFor={`${option.id}-${index}`}
                      className="text-sm font-light cursor-pointer flex flex-col"
                    >
                      <span className="font-normal">{option.label}</span>
                      <p className="text-xs text-muted-foreground">
                        {option.description}
                      </p>
                    </Label>
                  </div>
                ))}
              </div>
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
          >
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EmailSubscriptionsSettings;
