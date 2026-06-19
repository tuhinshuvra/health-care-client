/* eslint-disable @typescript-eslint/no-explicit-any */

import { loginUser } from "./loginUser";
import { serverFetch } from "@/lib/server-fetch";
import { zodValidators } from "@/lib/zodValidators";
import { registerPatientValidationZodSchema } from "@/zod/auth.validation";

export const registerPatient = async (_currentState: any, formData: any): Promise<any> => {
    try {
        const payload = ({
            name: formData.get('name'),
            address: formData.get('address'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirmPassword: formData.get('confirmPassword'),
        });

        if (zodValidators(payload, registerPatientValidationZodSchema).success === false) {
            return zodValidators(payload, registerPatientValidationZodSchema);
        }
        const validatedPayload: any = zodValidators(payload, registerPatientValidationZodSchema).data;

        const registerData = {
            password: validatedPayload.password,
            patient: {
                name: formData.get('name'),
                address: formData.get('address'),
                email: formData.get('email'),
            }
        }

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(registerData));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const res = await serverFetch.post("/user/create-patient", {
            body: newFormData,
        })


        const result = await res.json();

        if (result.success) {
            await loginUser(_currentState, formData);
        }
        // console.log("Response Data :  ", res);

        return result;

    } catch (error: any) {
        if (error?.digest?.startsWith("NEXT_REDIRECT")) {
            throw error;
        }
        console.log(error);
        return {
            success: false,
            message: `${process.env.NODE_ENV === "development" ? error.message : "Login failed. You might have entered wrong email or password."}`
        };
    }
};