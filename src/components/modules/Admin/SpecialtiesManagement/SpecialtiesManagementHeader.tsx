"use client";

import ManagementPageHeader from "@/components/shared/ManagementPageHeader";
import { Plus } from "lucide-react";
import SpecialtiesFormDialog from "./SpecialtiesFormDialog";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const SpecialtiesManagementHeader = () => {
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
            <SpecialtiesFormDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onSuccess={handleSuccess}
            />

            <ManagementPageHeader
                title="Specialties Management"
                description="Manage Specialties Information and Details"
                action={{
                    label: "Add Specialties",
                    icon: Plus,
                    onClick: () => setIsDialogOpen(true),
                }}
            >

            </ManagementPageHeader>
        </>
    );
};

export default SpecialtiesManagementHeader;