import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMeasure } from '../Actions/measure';

const MeasureList = () => {
    const measures_url = 'http://localhost:3000/all/measures';
    const dispatch = useDispatch();
    
    const fetchMeasures = async() => {
        const response = await fetch(measures_url, {
            headers: {
              Authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json();
        dispatch(saveMeasure(data.data))
    }

    const measures = useSelector((state) => state);
    
    useEffect(() => {
        fetchMeasures();
    });

    const measureDisplay = () => {
        return measures.measureReducer;
    }

    return(
        <div>
            {measureDisplay().map((measure) => (
                <div key={measure.id}>
                    <h3>{measure.name}</h3>
                    <h3>{measure.time}</h3>
                    <h3>{measure.count}</h3>
                </div>
            ))}
        </div>
    )
}

export default MeasureList;
