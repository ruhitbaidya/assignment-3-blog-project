import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Your Password give Atlist 6 charecter" }),
  role: z.enum(["admin", "user"]).optional(),
});

export const userValidation = {
  userValidationSchema,
};
