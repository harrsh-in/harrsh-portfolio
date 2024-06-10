import ProtectedRoute from '@/components/ProtectedRoute';

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    );
};

const Dashboard = () => {
    return (
        <ProtectedRoute>
            <DashboardPage />
        </ProtectedRoute>
    );
};

export default Dashboard;
