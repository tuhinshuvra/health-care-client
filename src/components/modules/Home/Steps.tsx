import React from 'react';
import { Search, ClipboardList, CalendarCheck, ShieldCheck, FileText, Video, CreditCard, HeartPulse } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
    {
        icon: Search,
        title: 'Search Doctor',
        description: 'Find your doctor easily with minimal effort.',
    },
    {
        icon: ClipboardList,
        title: 'Check Doctor Profile',
        description: 'Learn more about your doctor before booking.',
    },
    {
        icon: CalendarCheck,
        title: 'Schedule Appointment',
        description: 'Choose a date and time that works for you.',
    },
    {
        icon: ShieldCheck,
        title: 'Get Your Solution',
        description: 'Receive expert guidance and treatment.',
    },
    {
        icon: FileText,
        title: 'Electronic Prescription',
        description: 'Get your prescription instantly online.',
    },
    {
        icon: Video,
        title: 'Video Consultation',
        description: 'Consult your doctor from anywhere.',
    },
    {
        icon: CreditCard,
        title: 'Easy Payment',
        description: 'Secure and flexible payment options.',
    },
    {
        icon: HeartPulse,
        title: 'Health Recovery',
        description: 'Start your journey toward better health.',
    },
];

const colorVariants = [
    { bg: 'bg-blue-50', icon: 'text-blue-500' },
    { bg: 'bg-pink-50', icon: 'text-pink-500' },
    { bg: 'bg-green-50', icon: 'text-green-500' },
    { bg: 'bg-yellow-50', icon: 'text-yellow-500' },
];

interface StepCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    index: number;
}

function StepCard({ icon: Icon, title, description, index, }: StepCardProps) {
    const variant = colorVariants[index % colorVariants.length];

    return (
        <Card className={variant.bg}>
            <CardContent className="flex items-center gap-4 p-5">
                <div className={`rounded-full bg-white p-3 shadow-sm ${variant.icon}`}>
                    <Icon size={24} />
                </div>

                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function Steps() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold">
                        Easy Steps to Get Your Solution
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Book appointments, consult doctors, and manage your
                        healthcare seamlessly in a few simple steps.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <StepCard
                            key={step.title}
                            {...step}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}