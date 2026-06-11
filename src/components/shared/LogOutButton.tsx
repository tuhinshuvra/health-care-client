"use client"

import { logoutUser } from "@/services/auth/logoutUser";
import { Button } from "../ui/button";

const LogOutButton = () => {
    const handleLogout = async () => {
        await logoutUser();

    };
    return <Button onClick={handleLogout} variant="destructive">
        Log Out
    </Button>;
};
export default LogOutButton