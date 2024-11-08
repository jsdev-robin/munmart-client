import React from "react";
import AuthLayout from "@/components/roles/user/auth/layouts/AuthLayout";
import Signin from "@/components/roles/user/auth/Signin";

const SigninPage = () => {
  return (
    <AuthLayout>
      <Signin />
    </AuthLayout>
  );
};

export default SigninPage;
