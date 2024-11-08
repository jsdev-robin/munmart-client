import React from "react";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com" },
  { icon: Facebook, href: "https://www.facebook.com" },
  { icon: Github, href: "https://www.github.com" },
  { icon: Youtube, href: "https://www.youtube.com" },
  { icon: Linkedin, href: "https://www.linkedin.com" },
];

const FooterSocialLinks: React.FC = () => {
  return (
    <div className="mt-5">
      <ul className="flex items-center gap-2">
        {socialLinks.map((social, index) => (
          <li key={index}>
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              <social.icon className="w-4 h-4 text-white" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocialLinks;
