import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PublicRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); // Redirect to home if authenticated
        }
    }, [isAuthenticated, navigate]);

    return !isAuthenticated ? children : null; // Render children if not authenticated
};

export default PublicRoute;
