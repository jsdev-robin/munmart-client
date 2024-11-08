import React from "react";
import MainLogo from "@/components/common/MainLogo";

const AuthHeader = () => {
  return (
    <header className="bg-background py-2.5 border-2">
      <div className="container">
        <MainLogo />
      </div>
    </header>
  );
};

export default AuthHeader;
