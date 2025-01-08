import * as Yup from "yup";

export const doctorValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(/^\+?\d{10,15}$/, "Phone Number must be valid"),
  branches: Yup.array()
    .of(
      Yup.object().shape({
        branch: Yup.string().required("Branch is required"),
        startingTime: Yup.string()
          .required("Starting Time is required")
          .matches(
            /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0]$/,
            "Time must be in 30-minute intervals (e.g., 08:00, 08:30)"
          ),
        endingTime: Yup.string()
          .required("Ending Time is required")
          .matches(
            /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0]$/,
            "Time must be in 30-minute intervals (e.g., 08:00, 08:30)"
          ),
        workingDays: Yup.array()
          .min(1, "At least one working day must be selected")
          .required("Working Days are required"),
      })
    )
    .min(1, "At least one branch must be added"),
});
