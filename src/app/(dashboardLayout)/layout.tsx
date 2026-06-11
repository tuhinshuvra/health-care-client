import LogOutButton from "@/components/shared/LogOutButton";
import { getCookie } from "@/services/auth/tokenHandlers";
import React from "react";

const CommonDashboardLayout = async ({ children, }: { children: React.ReactNode; }) => {
    const accessToken = await getCookie("accessToken");
    return (
        <div>
            {accessToken && <LogOutButton />}
            {children}
        </div>
    );
};

export default CommonDashboardLayout;