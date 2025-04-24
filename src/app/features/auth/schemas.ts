import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Required password"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Required name"),
  email: z.string().email(),
  password: z.string().min(6, "Minimum 6 characters required"),
});
