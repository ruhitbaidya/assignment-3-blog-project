import z from "zod";

const validationBlogSchema = z.object({
  title: z.string(),
  content: z.string(),
  isPublished: z.boolean().default(true).optional(),
});

const updateValidationBlogSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
});
export const blogValidation = {
  validationBlogSchema,
  updateValidationBlogSchema,
};
