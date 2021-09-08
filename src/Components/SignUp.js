import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../Actions/user';

const SignUp = () => {
    const [username, setName] = useState('');
    const signup_url = 'http://localhost:3000/api/v1/users';
    const dispatch = useDispatch();

    const fetchUser = async() => {
        const user = { username }
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        const response = await fetch(signup_url, config);
        const data = await response.json()
        dispatch(createUser(data))
    }

    const onSubmit = (e) => {
        fetchUser();
        e.preventDefault();
    }
    return(
        <div className="form-container">
        <h3>ADD NEW BOOK</h3>
        <form onSubmit={onSubmit}>
            <input name="name" type="text" value={username} placeholder="Username" onChange={(e) => setName(e.target.value)} required />
            <button type="submit">Create User</button>
        </form>
        </div>
    )
}

export default SignUp;
