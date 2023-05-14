import React from 'react';

const PrivateRoute = () => {
    return (
        <div>
            <h1>Private Route</h1>
        </div>
    );
};

export default PrivateRoute;

/* 
        STEPS

1. Check User is logged in or not
2. if user is logged in, then allow them to visit the route
3. if user is not logged in, then redirect them to login page


*/