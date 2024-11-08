import React from "react";
import AuthHeader from "./AuthHeader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
