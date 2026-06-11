const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="admin-dashboard-layout">
            <h1>Admin Dashboard</h1>
            <div className="content">{children}</div>
        </div>
    );
}

export default AdminDashboardLayout;