import { ManagementPageLoading } from '@/components/shared/ManagementPageLoader';
import React from 'react';

const DoctorsManagementLoading = () => {
    return (
        <ManagementPageLoading
            columns={10}
            hasActionButton
            filterCount={5}
            filterWidths={["w-40", "w-28", "w-40", "w-20", "w-30"]}
        />
    );
};

export default DoctorsManagementLoading;