import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Measure = () => {
    const { id } = useParams();
    const measure_url = `http://localhost:3000/measures/${id}`;

    const getMeasure = async() => {
        const response = await fetch(measure_url);
        const data = await response.json();
        console.log(data);
    }

    useEffect(() => {
        getMeasure();
    });

    return(
        <h1>Ok!</h1>
    )
}

export default Measure;
