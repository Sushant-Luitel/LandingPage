import { z } from "zod";

export const SignupSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(30, "Name cannot exceed 30 characters")
    .regex(/^[A-Za-z\s]+$/i, "Name can only contain letters and spaces"),

  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^[^\s]+@[^\s]+\.[^\s]+$/, "Invalid email address"),

  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits")
    .regex(/^[0-9]+$/, "Phone number can only contain digits"),

  password: z.string().min(6, "Password must be at least 6 characters long"),

  confirmpassword: z.string().min(6, "Password must be at least 6 characters long"),
})
.refine((data) => data.password === data.confirmpassword, {
  message: "Passwords do not match",
  path: ["confirmpassword"],
});
