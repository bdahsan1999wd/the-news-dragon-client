import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Terms and Conditions</h1>

            <p>It's important to note that these terms and conditions can vary significantly based on the specific purpose of registration, such as event registration, online service registration, or membership registration. Always review the terms and conditions provided by the organization or website you are registering with to ensure you understand and agree to them.</p>

            <p>Go Back To <Link to="/register">Register</Link> </p>
        </div>
    );
};

export default Terms;