import { Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import { auth } from './utils/auth';

function ProtectedRoute({ children }) {
    return auth.isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;
