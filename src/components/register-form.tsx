/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator, FieldSet } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useActionState, useEffect } from 'react';
import { registerPatient } from '@/services/auth/registerPatient';
import { toast } from 'sonner';
import InputFieldError from './shared/InputFieldError';

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerPatient, null);

    useEffect(() => {
        if (state && !state.success && state.message) {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <form action={formAction}>
            <FieldGroup>
                <FieldSet>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <Field>
                            <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <Input id="name" name="name" type='text' placeholder="John Doe" />
                            <InputFieldError field="name" state={state} />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input id="email" name="email" type='email' placeholder="example@email.com"></Input>
                            <InputFieldError field="email" state={state} />
                        </Field>
                    </div>

                    <div>
                        <Field>
                            <FieldLabel htmlFor="address">
                                Address <span className="text-muted-foreground">(Optional)</span>
                            </FieldLabel>
                            <Input id="address" name="address" type='text' placeholder="Dhaka, Bangladesh" />
                            <InputFieldError field="address" state={state} />
                        </Field>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Field>
                            <FieldLabel htmlFor="password"> Password </FieldLabel>
                            <Input id="password" name="password" type='password' />
                            <InputFieldError field="password" state={state} />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="confirmPassword"> Confirm Password </FieldLabel>
                            <Input id="confirmPassword" name="confirmPassword" type='password' />
                            <InputFieldError field="confirmPassword" state={state} />
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