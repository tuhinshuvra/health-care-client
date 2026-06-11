"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
    const user = {
        name: "John Doe",
        email: "john@example.com",
        phone: "+880 1712345678",
        gender: "Male",
        bloodGroup: "O+",
        dateOfBirth: "15 Jan 1995",
        address: "Dhaka, Bangladesh",
    };

    return (
        <div className="container mx-auto max-w-5xl px-4 py-8">
            <div className="grid gap-6 md:grid-cols-3">
                {/* Left Side */}
                <Card>
                    <CardContent className="flex flex-col items-center pt-6">
                        <Avatar className="h-28 w-28">
                            <AvatarImage src="/profile.jpg" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>

                        <h2 className="mt-4 text-xl font-bold">
                            {user.name}
                        </h2>

                        <p className="text-muted-foreground">
                            {user.email}
                        </p>

                        <Button className="mt-4 w-full">
                            Edit Profile
                        </Button>
                    </CardContent>
                </Card>

                {/* Right Side */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Full Name
                                </p>
                                <p className="font-medium">{user.name}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Phone Number
                                </p>
                                <p className="font-medium">{user.phone}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Email Address
                                </p>
                                <p className="font-medium">{user.email}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Gender
                                </p>
                                <p className="font-medium">{user.gender}</p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Date of Birth
                                </p>
                                <p className="font-medium">
                                    {user.dateOfBirth}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Blood Group
                                </p>
                                <p className="font-medium">
                                    {user.bloodGroup}
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="text-sm text-muted-foreground">
                                    Address
                                </p>
                                <p className="font-medium">
                                    {user.address}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Extra Sections */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Consultations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            No consultations found.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Health Plan</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-medium">
                            Premium Health Plan
                        </p>
                        <p className="text-muted-foreground">
                            Active until Dec 31, 2026
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}