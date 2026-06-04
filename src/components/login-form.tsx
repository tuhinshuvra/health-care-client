/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldSet } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState } from 'react';
import { loginUser } from '@/services/auth/loginUser';

const LoginForm = () => {

    const [state, formAction, isPending] = useActionState(loginUser, null);

    const getFieldError = (fieldName: string) => {
        if (state && state?.errors) {
            const error = state.errors.find(
                (err: any) => err.field === fieldName
            );
            return error?.message ?? null;
        } else {
            return null;
        }
    };
    console.log("Login State: ", state);

    return (
        <form action={formAction}>
            <FieldGroup>
                <FieldSet>
                    <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                            Email
                        </FieldLabel>
                        <Input
                            id="email"
                            name="email"
                            type='email'
                            placeholder="example@email.com"
                        // required
                        />
                        {getFieldError("email") && (
                            <FieldDescription className=' text-red-600'>
                                {getFieldError("email")}
                            </FieldDescription>
                        )}
                    </Field>

                    <Field className=' mt-2'>
                        <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                            Password
                        </FieldLabel>
                        <Input
                            id="password"
                            name="password"
                            type='password'
                        // required
                        />
                        {getFieldError("password") && (
                            <FieldDescription className=' text-red-600'>
                                {getFieldError("password")}
                            </FieldDescription>
                        )}
                    </Field>
                </FieldSet>
                <FieldSeparator />

                <FieldGroup>
                    <Field>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Logging in..." : "Login"}
                        </Button>

                        <FieldDescription className=' px-6 text-center'>
                            <a href="/forget-password" className=' text-blue-600 hover:underline'>
                                Forget password?
                            </a>
                        </FieldDescription>

                        <FieldDescription className="text-center text-blue-600">
                            Don&apos;t have an account? <a href="/register">Sign up</a>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
};
export default LoginForm;