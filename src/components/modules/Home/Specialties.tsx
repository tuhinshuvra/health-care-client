import Link from "next/link";
import { HeartPulse, Brain, Bone, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specialties = [
    {
        name: "Cardiology",
        icon: HeartPulse,
        bgColor: "bg-red-100",
        iconColor: "text-red-500",
    },
    {
        name: "Neurology",
        icon: Brain,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-500",
    },
    {
        name: "Orthopedics",
        icon: Bone,
        bgColor: "bg-pink-100",
        iconColor: "text-pink-500",
    },
    {
        name: "Pediatrics",
        icon: Baby,
        bgColor: "bg-green-100",
        iconColor: "text-green-500",
    },
];

export default function Specialties() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Our Specialties
                        </h2>

                        <p className="mt-2 text-muted-foreground max-w-md">
                            Explore healthcare services across major medical
                            specialties and connect with experienced doctors.
                        </p>
                    </div>

                    <Link
                        href="/specialties"
                        className="font-semibold text-primary hover:underline"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specialties.map((specialty) => {
                        const Icon = specialty.icon;

                        return (
                            <Card
                                key={specialty.name}
                                className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <CardContent className="p-6 text-center">
                                    <div
                                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${specialty.bgColor}`}
                                    >
                                        <Icon
                                            size={32}
                                            className={specialty.iconColor}
                                        />
                                    </div>

                                    <h3 className="font-semibold text-lg">
                                        {specialty.name}
                                    </h3>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}