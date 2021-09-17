import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveMeasure } from '../Actions/measure';

const MeasureList = () => {
    const measures_url = 'https://dry-hamlet-99385.herokuapp.com/all/measures';
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
        <div className="measure-list">
            {measureDisplay().map((measure) => (
                <div className="measure-show" key={measure.id}>
                <a href={'/measure/'+measure.id}>{measure.name}</a>
                <h4 className="measure-time">{measure.time} s</h4>
                </div>
            ))}
        </div>
    )
}

export default MeasureList;
