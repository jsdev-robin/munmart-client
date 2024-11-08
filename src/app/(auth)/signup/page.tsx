import React from "react";
import AuthLayout from "@/components/roles/user/auth/layouts/AuthLayout";
import Signup from "@/components/roles/user/auth/Signup";

const SignupPage = () => {
  return (
    <AuthLayout>
      <Signup />
    </AuthLayout>
  );
};

export default SignupPage;
