import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../Actions/user';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const signup_url = 'http://localhost:3000/signup';
    const dispatch = useDispatch();

    const fetchUser = async() => {
        const user = {
            name,
            email,
            password,
            passwordConfirmation
        }
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        const response = await fetch(signup_url, config);
        const data = await response.json()
        console.log(data)
        dispatch(createUser(data))
    }

    const onSubmit = (e) => {
        fetchUser();
        e.preventDefault();
    }
    return(
        <div className="form-container">
        <h3>Signup</h3>
        <form onSubmit={onSubmit}>
            <input name="name" type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} required />
            <input name="email" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input name="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <input name="password_confirmation" type="password" value={passwordConfirmation} placeholder="Confirm password" onChange={(e) => setPasswordConfirmation(e.target.value)} required />
            <button type="submit">Create User</button>
        </form>
        </div>
    )
}

export default SignUp;
