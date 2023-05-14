import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    const location = useLocation();
    console.log(location);


    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;

};

export default PrivateRoute;

/* 
        STEPS

1. Check User is logged in or not
2. if user is logged in, then allow them to visit the route
3. if user is not logged in, then redirect them to login page
4. setup the Private Router


*/