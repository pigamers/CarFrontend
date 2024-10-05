import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            setIsRedirecting(true);
        }
    }, [isAuthenticated]);

    if (isRedirecting) {
        return navigate('/');
    }

    return children;
};

export default PrivateRoute;
