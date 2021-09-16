import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCountUp } from 'react-countup';

const MeasureForm = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState(0);
    const [count, setCount] = useState('');
    const measure_url = 'http://localhost:3000/create/measure';
    const history = useHistory();

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
        history.push('/measures');
        console.log(data);
    }

    const onSubmit = (e) => {
        createMeasure();
        e.preventDefault();
    }

    const {
        start, pauseResume, reset
    } = useCountUp({
        ref: 'timing',
        start: time,
        duration: 60,
        end: 60,
        startOnMount: false,
        onPauseResume: () => {
            document.getElementById('timer').value = document.getElementById('timing').textContent;
            setTime(document.getElementById('timer').value);
        }
    });

    // useEffect(() => {
    //     document.getElementById('timing').textContent = document.getElementById('timer').value;
    //     // setTime(document.getElementById('timer').value);
    // }, [])

    return(
        <div>
            <h2 id="timing" />
            <button onClick={start}>Start</button>
            <button onClick={pauseResume}>P/R</button>
            <button onClick={reset}>Reset</button>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <input id="timer" type="float" name="time" onChange={(e) => setTime(e.target.value)} />
                <input type="number" name="count" onChange={(e) => setCount(e.target.value)} />
                <button type="submit">GO</button>
            </form>
        </div>
    )
}

export default MeasureForm;
