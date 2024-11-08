import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(32, "First name cannot exceed 32 characters")
    .required("First name is required"),
  lname: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(32, "Last name cannot exceed 32 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
    )
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});

export const signinSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
