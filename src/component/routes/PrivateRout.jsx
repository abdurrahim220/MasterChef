import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {

    const { user } = useContext(AuthContext)
    const location = useLocation()

    if (user) {
        return children;
    }
    else {
        return <Navigate state={{ from: location.pathname  }} to='/login' replace></Navigate>
    }
};

export default PrivateRout;