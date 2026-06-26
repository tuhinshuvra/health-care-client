"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { ISpecialty } from "@/types/specialties.interface";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import DoctorsFormDialog from "./DoctorsFormDialog";

interface DoctorsManagementHeaderProps {
    specialties?: ISpecialty[];
}

const DoctorsManagementHeader = ({ specialties }: DoctorsManagementHeaderProps) => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        });
    };
    return (
        <>
            <DoctorsFormDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSuccess={handleSuccess}
                specialties={specialties}
            />

            <ManagementPageHeader
                title="Doctors Management"
                description="Manage Doctors information and details"
                action={{
                    label: "Add Doctor    ",
                    icon: Plus,
                    onClick: () => setIsDialogOpen(true),
                }}
            />
        </>
    );
};

export default DoctorsManagementHeader;