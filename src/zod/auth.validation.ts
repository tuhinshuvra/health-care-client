/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

export const registerPatientValidationZodSchema = z.object({
    name: z
        .string({ error: "Name is required" })
        .min(4, { message: "Name must be at least 4 characters long" })
        .max(30, { message: "Name must be at most 30 characters long" }),
    address: z.string().optional(),
    email: z.email({ error: "Email is required", }),
    password: z.string({
        error: "Password is required"
    }).min(6, {
        message: "Password must be at least 6 characters long",
    }).max(20, {
        message: "Password must be at most 20 characters long",
    }),
    confirmPassword: z.string({
        error: "Confirm Password is required",
    }).min(6, {
        message: "Confirm Password must be as like as Password",
    })
})
    .refine((data: any) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });


export const loginValidationZodSchema = z.object({
    email: z.email({
        message: "Email is required",
    }),
    password: z.string("Password is required").min(6, {
        error: "Password is required",
    })
});