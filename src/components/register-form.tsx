/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldSet } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState, useEffect } from 'react';
import { registerPatient } from '@/services/auth/registerPatient';
import { toast } from 'sonner';

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerPatient, null);

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
    // console.log("Registration State: ", state);

    useEffect(() => {
        if (state && !state.success && state.message) {
            toast.error(state.message);
            // toast.success("Registration successful!");
        }

    }, [state]);

    return (
        <form action={formAction}>
            <FieldGroup>
                <FieldSet>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <Field>
                            <FieldLabel htmlFor="name">
                                Full Name
                            </FieldLabel>
                            <Input
                                id="name"
                                name="name"
                                type='text'
                                placeholder="Suddha Ram"
                            // required
                            />
                            {getFieldError("name") && (
                                <FieldDescription className=' text-red-600'>
                                    {getFieldError("name")}
                                </FieldDescription>
                            )}
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email">
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
                    </div>
                    <div className=''>

                        <Field>
                            <FieldLabel htmlFor="address">
                                Address
                            </FieldLabel>
                            <Input
                                id="address"
                                name="address"
                                type='text'
                                placeholder="172/4, Arambag, Motijhil, Dhaka"
                            // required
                            />
                            {getFieldError("address") && (
                                <FieldDescription className=' text-red-600'>
                                    {getFieldError("address")}
                                </FieldDescription>
                            )}
                        </Field>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        <Field>
                            <FieldLabel htmlFor="password">
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
                        <Field>
                            <FieldLabel htmlFor="confirmPassword">
                                Confirm Password
                            </FieldLabel>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type='password'
                            // required
                            />
                            {getFieldError("confirmPassword") && (
                                <FieldDescription className=' text-red-600'>
                                    {getFieldError("confirmPassword")}
                                </FieldDescription>
                            )}
                        </Field>
                    </div>
                </FieldSet>
                <FieldSeparator />
                <FieldGroup>
                    <Field>
                        <Button type="submit" disabled={isPending}>
                            {isPending ? "Creating Account..." : "Create Account"}
                        </Button>
                        <FieldDescription className="px-6 text-center text-blue-600">
                            Already have an account? <a href="/login">Sign in</a>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </FieldGroup>
        </form>
    );
};

export default RegisterForm;