import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);
    console.log('User in Private Route:', user);

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;

};

export default PrivateRoute;

/* 
_______________________
        STEPS
_______________________

1. Check User is logged in or not
2. if user is logged in, then allow them to visit the route
3. if user is not logged in, then redirect them to login page
4. setup the Private Router
5. Handle loading

*/