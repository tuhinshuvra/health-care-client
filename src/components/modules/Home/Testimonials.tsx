import Image, { StaticImageData } from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import samplePhoto from "../../../assets/images/hero-doctor.jpg";

type Testimonial = {
    name: string;
    role: string;
    image: StaticImageData;
    quote: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        name: "Robert Fox",
        role: "Patient",
        image: samplePhoto,
        quote:
            "The care and professionalism I received were outstanding. The doctors were knowledgeable and the staff was incredibly supportive throughout my treatment.",
        rating: 5,
    },
    {
        name: "Jane Cooper",
        role: "Patient",
        image: samplePhoto,
        quote:
            "A seamless experience from booking an appointment to the consultation. The use of technology for prescriptions and follow-ups is very convenient.",
        rating: 5,
    },
    {
        name: "Wade Warren",
        role: "Patient",
        image: samplePhoto,
        quote:
            "I highly recommend their services. The specialists are top-notch, and they truly focus on preventive care which has greatly improved my health.",
        rating: 5,
    },
];

const TestimonialCard = ({
    testimonial,
}: {
    testimonial: Testimonial;
}) => (
    <Card className="relative h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
            <Quote
                size={36}
                className="absolute top-6 right-6 text-primary/20"
            />

            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                    />
                ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
                {testimonial.quote}
            </p>

            <div className="flex items-center gap-4">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                />

                <div>
                    <h4 className="font-semibold">
                        {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">
                        What Our Clients Say
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Real experiences from patients who trust us with their
                        healthcare journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.name}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}