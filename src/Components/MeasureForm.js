import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCountUp } from 'react-countup';

const MeasureForm = () => {
    const [name, setName] = useState('');
    const [time, setTime] = useState(0);
    const [count, setCount] = useState('');
    const measure_url = 'https://dry-hamlet-99385.herokuapp.com/create/measure';
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
        return data;
    }

    const onSubmit = (e) => {
        createMeasure();
        e.preventDefault();
    }

    const {
        start, pauseResume
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

    return(
        <div>
            <div className="timing-container">
            <div className="timing-btns">
            <button className="time-green" onClick={start}>Start</button>
            <button className="time-red" onClick={pauseResume}>Stop</button>
            </div>
            <div className="time-circle">
            <p id="timing" />
            <span>s</span>
            </div>
            </div>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Measure name" />
                <input id="timer" type="float" name="time" onChange={(e) => setTime(e.target.value)} hidden />
                <input type="number" name="count" onChange={(e) => setCount(e.target.value)} placeholder="How many counts?" />
                <button className="submit-btn" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default MeasureForm;
