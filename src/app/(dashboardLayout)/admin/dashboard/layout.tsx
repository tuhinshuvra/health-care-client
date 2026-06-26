const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="admin-dashboard-layout">
            <div className="content">{children}</div>
        </div>
    );
}

export default AdminDashboardLayout;