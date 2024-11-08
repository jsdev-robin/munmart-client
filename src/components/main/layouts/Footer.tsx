import React from "react";
import FooterSubscribe from "./particles/FooterSubscribe";
import FooterLinks from "./particles/FooterLinks";
import FooterLegalLinks from "./particles/FooterLegalLinks";

const Footer = () => {
  return (
    <footer>
      <FooterSubscribe />
      <FooterLinks />
      <FooterLegalLinks />
    </footer>
  );
};

export default Footer;
