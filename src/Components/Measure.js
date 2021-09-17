import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMeasure } from '../Actions/measure';

const Measure = () => {
    const { id } = useParams();
    const measure_url = `http://localhost:3000/measures/${id}`;
    const dispatch = useDispatch();

    const fetchMeasure = async() => {
        const response = await fetch(measure_url, {
            headers: {
              Authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json();
        dispatch(getMeasure(data.data))
    }

    const measure = useSelector((state) => state);

    useEffect(() => {
        fetchMeasure(); // eslint-disable-next-line
    }, []);

    const displayMeasure = () => {
        return measure.singleMeasureReducer
    }

    return(
        <div className="single-measure">
            <div className="measure-name">
                <h3>{displayMeasure().name}</h3>
            </div>
            <div className="measure-timing">
                <h3>{displayMeasure().time}</h3>
                <span>s</span>
            </div>
            <div className="measure-count">
                <h5>Count:</h5>
                <h3>{displayMeasure().count}</h3>
            </div>
        </div>
    )
}

export default Measure;
