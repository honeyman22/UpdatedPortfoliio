import * as Yup from "yup";
export const contactSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Fullname is required")
    .matches(/^[a-zA-Z ]+$/, "Fullname must contain only alphabets")
    .min(3, "Fullname must be at least 3 characters long")
    .max(50, "Fullname must be at most 50 characters long"),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Valid email is required."
    )
    .email("Valid email is required.")
    .required("Email is required"),
  number: Yup.string().required("Phone number is required"),
  message: Yup.string()
    .required("Message is required")
    .max(500, "Message must be at most 500 characters long"),
});
