import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <h2>Left Side Navigation...</h2>
        </div>
    );
};

export default LeftNav;