import { z } from "zod";

export const NEEDS = ["A new website", "Redesign my current site", "Online menu / ordering", "Website management", "Something else"] as const;
export const BUDGETS = ["Under $1,000", "$1,000 – $2,500", "$2,500 – $5,000", "$5,000+", "Not sure yet"] as const;
export const TIMELINES = ["As soon as possible", "Within a month", "1–3 months", "Just exploring"] as const;

export const projectRequestSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  business_name: z.string().trim().max(150).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  need: z.enum(NEEDS),
  budget: z.enum(BUDGETS),
  timeline: z.enum(TIMELINES),
  message: z.string().trim().min(1, "Tell us a little about your business").max(2000),
});
export type ProjectRequest = z.infer<typeof projectRequestSchema>;
