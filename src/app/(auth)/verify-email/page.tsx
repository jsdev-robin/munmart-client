import React from "react";
import AuthLayout from "@/components/roles/user/auth/layouts/AuthLayout";
import VerifyEmail from "@/components/roles/user/auth/VerifyEmail";

const VerifyEmailPage = () => {
  return (
    <AuthLayout>
      <VerifyEmail />
    </AuthLayout>
  );
};

export default VerifyEmailPage;
