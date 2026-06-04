/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import z from "zod";

const registerValidationZodSchema = z
    .object({
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
            message: "Confirm Password must be at least 6 characters long",
        }).max(20, {
            message: "Confirm Password must be at most 20 characters long",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

export const registerPatient = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const validationResult = ({
            name: formData.get('name'),
            address: formData.get('address'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });

        console.log("Validation Result : ", validationResult);

        const validatedFields = registerValidationZodSchema.safeParse(validationResult);

        if (!validatedFields.success) {
            return {
                success: false,
                errors: validatedFields.error.issues.map(issue => {
                    return {
                        field: issue.path[0],
                        message: issue.message,
                    }
                })
            }
        }

        const registerData = {
            password: formData.get('password'),
            patient: {
                name: formData.get('name'),
                address: formData.get('address'),
                email: formData.get('email'),
            }
        }

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(registerData));

        const res = await fetch("http://localhost:5000/api/v1/user/create-patient", {
            method: "POST",
            body: newFormData,
        }).then(res => res.json())

        console.log("Response Data :  ", res);

        return res;

    } catch (error) {
        console.log(error);
        return { error: "Registration failed!" }
    }

};