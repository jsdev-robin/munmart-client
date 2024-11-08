"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Heading from "@/components/ui/heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FooterSocialLinks from "./FooterSocialLinks";

const footerSections = [
  {
    heading: "Shop",
    links: [
      { label: "Gift cards", href: "/gift-cards" },
      { label: "MunShop Registry", href: "/registry" },
      { label: "Sitemap", href: "/sitemap" },
      { label: "MunShop blog", href: "/blog" },
      { label: "MunShop United Kingdom", href: "/uk" },
      { label: "MunShop Germany", href: "/de" },
      { label: "MunShop Canada", href: "/ca" },
    ],
  },
  {
    heading: "Sell",
    links: [
      { label: "Sell on MunShop", href: "/seller" },
      { label: "Teams", href: "/teams" },
      { label: "Forums", href: "/forums" },
      { label: "Affiliates & Creators", href: "/affiliates" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Muntaha, Inc.", href: "/about" },
      { label: "Policies", href: "/policies" },
      { label: "Investors", href: "/investors" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Impact", href: "/impact" },
      { label: "Legal imprint", href: "/legal-imprint" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "Privacy settings", href: "/privacy-settings" },
    ],
    socailLink: true,
  },
];

const FooterLinks = () => {
  const pathName = usePathname();

  return (
    <div className="group/logo-animation">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-3">
          <div className="h-full md:col-span-1">
            <div className="bg-blue-900 h-full flex items-center justify-center">
              <Link
                href="/"
                className="text-4xl font-lora font-black transition-all text-white duration-500 group-hover/logo-animation:tracking-[14px] group/logo-link"
              >
                <span className="group-hover/logo-link:text-primary">Mun</span>
                <span className="text-primary group-hover/logo-link:text-white">
                  taha
                </span>
              </Link>
            </div>
          </div>
          <div className="h-full md:col-span-2">
            <div className="bg-blue-800 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {footerSections.map((section, index) => (
                  <article key={index}>
                    <Heading className="text-white" variant="h5">
                      {section.heading}
                    </Heading>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className={cn(
                              "text-white text-sm transition-all font-normal hover:underline",
                              pathName === link.href && "underline"
                            )}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      {section.socailLink && <FooterSocialLinks />}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
