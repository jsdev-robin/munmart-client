import React from "react";
import Text from "@/components/ui/text";
import Link from "next/link";

const footerLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy", href: "/privacy" },
  { label: "Interest-based ads", href: "/interest-based-ads" },
  { label: "Local Shops", href: "/local-shops" },
  { label: "Regions", href: "/regions" },
];

const FooterLegalLinks: React.FC = () => {
  return (
    <div className="bg-[#020818] text-white py-4">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Text className="mb-0 text-sm">Copyright MunShop@2024</Text>
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-normal">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm underline transition-all hover:no-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLegalLinks;
