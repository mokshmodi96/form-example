import {Navigate, Route, Routes} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Store from './pages/Store';
import {auth} from './utils/auth';
import Cart from "./pages/Cart.jsx";
import NavBar from "./components/NavBar.jsx";

function ProtectedRoute({ children }) {
    return auth.isAuthenticated ? <><NavBar />{children}</> : <Navigate to="/" />;
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/store" element={<ProtectedRoute><Store /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        </Routes>
    );
}

export default App;
