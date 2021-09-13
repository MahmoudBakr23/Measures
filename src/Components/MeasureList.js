import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
        fetchMeasures(); // eslint-disable-next-line
    }, []);

    const measureDisplay = () => {
        return measures.measureReducer;
    }

    return(
        <div>
            <Link to="/create/measure">Add measure</Link>
            {measureDisplay().map((measure) => ( 
                <div key={measure.id}>
                    <Link to={'/measure/'+measure.id}>{measure.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default MeasureList;
