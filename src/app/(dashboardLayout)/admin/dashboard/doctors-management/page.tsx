import DoctorFilters from "@/components/modules/Admin/DoctorsManagement/DoctorsFilters";
import DoctorsManagementHeader from "@/components/modules/Admin/DoctorsManagement/DoctorsManagementHeader";
import DoctorsTable from "@/components/modules/Admin/DoctorsManagement/DoctorsTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getDoctors } from "@/services/admin/doctorsManagement";
import { getSpecialties } from "@/services/admin/specialtiesManagement";
import { Suspense } from "react";

const AdminDoctorsManagementPage = async ({ searchParams, }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const searchParamObj = await searchParams;
    const queryString = queryStringFormatter(searchParamObj);
    const specialtiesResult = await getSpecialties();
    const doctorsResult = await getDoctors(queryString);
    const totalPages = Math.ceil(doctorsResult?.meta?.total / doctorsResult?.meta?.limit);

    return (
        <div className="space-y-6">
            <DoctorsManagementHeader specialties={specialtiesResult?.data || []} />
            <DoctorFilters specialties={specialtiesResult?.data || []} />
            <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
                <DoctorsTable
                    doctors={doctorsResult.data}
                    specialties={specialtiesResult?.data || []}
                />
                <TablePagination currentPage={doctorsResult?.meta?.page} totalPages={totalPages} />
            </Suspense>
        </div>
    );
};

export default AdminDoctorsManagementPage;