import { z } from "zod";

export const moodSchema = z.object({
  mood: z.string().min(1, "Please tell us how you are feeling"),
  sleep: z.string().min(1, "Please enter your sleep hours"),
  description: z.string().max(150, "Cannot exceed 150 characters").optional(),
  tags: z
    .array(z.string())
    .min(1, "Select at least one tag")
    .max(3, "Select at most three tags"),
});
