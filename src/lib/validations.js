import { z } from "zod";

// Enum constants for reusability
export const MOOD_OPTIONS = [
  "Very Happy",
  "Happy",
  "Neutral",
  "Sad",
  "Very Sad",
];
export const SLEEP_OPTIONS = [
  "9+ hours",
  "7-8 hours",
  "5-6 hours",
  "3-4 hours",
  "0-2 hours",
];
export const TAG_OPTIONS = [
  "Joyful",
  "Down",
  "Anxious",
  "Calm",
  "Excited",
  "Frustrated",
  "Lonely",
  "Grateful",
  "Overwhelmed",
  "Motivated",
  "Irritable",
  "Peaceful",
  "Tired",
  "Hopeful",
  "Confident",
  "Stressed",
  "Content",
  "Disappointed",
  "Optimistic",
  "Restless",
];

export const moodSchema = z.object({
  mood: z.enum(MOOD_OPTIONS, {
    required_error: "Please select your mood",
    invalid_type_error: "Please select a valid mood option",
  }),
  sleepHours: z.enum(SLEEP_OPTIONS, {
    required_error: "Please select your sleep duration",
    invalid_type_error: "Please select a valid sleep duration option",
  }),
  reflection: z.string().max(150, "Cannot exceed 150 characters").optional(),
  tags: z
    .array(
      z.enum(TAG_OPTIONS, {
        invalid_type_error: "Please select valid tag options",
      })
    )
    .min(1, "Select at least one tag")
    .max(3, "Select at most three tags"),
});

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(8, "Password must be atleast 8 characters"),
});

export const onboardingSchema = z.object({
  name: z.string().optional(),
  file: z
    .any()
    .optional()
    .refine(
      (file) =>
        !file ||
        (file instanceof File &&
          /image\/(png|jpeg)/.test(file.type) &&
          file.size <= 250 * 1024),
      "Image must be PNG or JPEG and under 250KB"
    ),
});
