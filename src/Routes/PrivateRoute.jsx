import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <progress className="progress progress-secondary mx-auto w-56"></progress>
    }
    if (user) {
        return children;
    }
    return (<Navigate to={'/login'} state={{ form: location }} replace></Navigate>);
};

export default PrivateRoute;