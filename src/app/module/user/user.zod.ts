import { z } from "zod";

const createUserValidtionSchema = z.object({
  body: z.object({
    email: z.string({ required_error: "user email required" }),
    password: z.string({ required_error: "password required" }),
  }),
});

export default createUserValidtionSchema;
