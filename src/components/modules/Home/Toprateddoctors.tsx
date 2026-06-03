import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import cardioDoc from "../../../assets/images/doctor-cardiologist.jpg";
import neurolDoc from "../../../assets/images/doctor-neurologist.jpg";
import orthoDoc from "../../../assets/images/doctor-orthopedic.jpg";

type Doctor = {
    name: string;
    specialty: string;
    rating: number;
    reviews: number;
    image: any;
};

const doctors: Doctor[] = [
    {
        name: "Dr. Cameron Williamson",
        specialty: "Cardiologist",
        rating: 4.9,
        reviews: 23,
        image: cardioDoc,
    },
    {
        name: "Dr. Leslie Alexander",
        specialty: "Neurologist",
        rating: 4.8,
        reviews: 45,
        image: neurolDoc,
    },
    {
        name: "Dr. Robert Fox",
        specialty: "Orthopedic",
        rating: 4.9,
        reviews: 32,
        image: orthoDoc,
    },
];

const DoctorCard = ({ doctor }: { doctor: Doctor }) => (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="bg-blue-50 p-6 flex justify-center">
            <Image
                src={doctor.image}
                alt={doctor.name}
                width={100}
                height={100}
                className="rounded-full border-4 border-white shadow-md object-cover"
            />
        </div>

        <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold">{doctor.name}</h3>

            <p className="mt-1 text-primary font-medium">
                {doctor.specialty}
            </p>

            <div className="flex items-center justify-center gap-1 mt-3">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{doctor.rating}</span>
                <span className="text-sm text-muted-foreground">
                    ({doctor.reviews} reviews)
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-6">
                <Button variant="outline">Profile</Button>
                <Button>Book Now</Button>
            </div>
        </CardContent>
    </Card>
);

export default function TopRatedDoctors() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold">
                        Top Rated Doctors
                    </h2>

                    <p className="mt-4 text-muted-foreground">
                        Connect with experienced specialists and receive
                        quality healthcare from trusted medical professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {doctors.map((doctor) => (
                        <DoctorCard
                            key={doctor.name}
                            doctor={doctor}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button size="lg">
                        View All Doctors
                    </Button>
                </div>
            </div>
        </section>
    );
}