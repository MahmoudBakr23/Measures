import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeasure } from '../Actions/measure';

const Measure = () => {
    const { id } = useParams();
    const measure_url = `http://localhost:3000/measures/${id}`;
    const dispatch = useDispatch();

    const fetchMeasure = async() => {
        const response = await fetch(measure_url);
        const data = await response.json();
        dispatch(getMeasure(data.data))
        console.log(data);
    }

    const measure = useSelector((state) => state);

    useEffect(() => {
        fetchMeasure(); // eslint-disable-next-line
    }, []);

    const displayMeasure = () => {
        return measure.singleMeasureReducer
    }

    return(
        <div>
            <h3>{displayMeasure().name}</h3>
            <h3>{displayMeasure().count}</h3>
            <h3>{displayMeasure().time}</h3>
        </div>
    )
}

export default Measure;
