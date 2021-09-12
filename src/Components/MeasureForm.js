import React, { useState } from 'react';

const MeasureForm = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [count, setCount] = useState('');
    const measure_url = 'http://localhost:3000/create/measure'

    const createMeasure = async() => {
        const measure = {
            name,
            time,
            count
        }
        const config = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(measure)
        }
        const response = await fetch(measure_url, config);
        const data = await response.json();
        console.log(data);
    }

    const onSubmit = (e) => {
        createMeasure();
        e.preventDefault();
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <input type="float" name="time" onChange={(e) => setTime(e.target.value)} />
                <input type="number" name="count" onChange={(e) => setCount(e.target.value)} />
                <button type="submit">GO</button>
            </form>
        </div>
    )
}

export default MeasureForm;
