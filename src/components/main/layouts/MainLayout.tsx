import React from "react";
import Header from "./Header";
import HeaderResponsive from "./particles/HeaderResponsive";
import SubHeaderNav from "./particles/SubHeaderNav";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderResponsive />
      <SubHeaderNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
