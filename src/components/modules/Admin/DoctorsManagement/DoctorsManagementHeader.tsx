"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import DoctorsFormDialog from "./DoctorsFormDialog";
import { Plus } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ISpecialty } from "@/types/specialties.interface";

interface DoctorsManagementHeaderProps {
    specialties: ISpecialty[];
}

const DoctorsManagementHeader = ({ specialties }: DoctorsManagementHeaderProps) => {
    const router = useRouter();
    const [, startTransition] = useTransition();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleSuccess = () => {
        startTransition(() => {
            router.refresh();
        })
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
                description="Manage Doctors Information and Details"
                action={{
                    label: "Add Doctors",
                    icon: Plus,
                    onClick: () => setIsDialogOpen(true),
                }}
            >

            </ManagementPageHeader>
        </>
    );
};

export default DoctorsManagementHeader;