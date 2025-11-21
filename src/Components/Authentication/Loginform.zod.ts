import { z } from "zod";

export const LoginFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .refine((data) => data === "Pranawa", {
      message: "Incorrect Name",
    }),
  password: z
    .string()
    .min(6, "Password is required")
    .refine((data) => data === "pranawa123", {
      message: "Incorrect Password",
    }),
});
