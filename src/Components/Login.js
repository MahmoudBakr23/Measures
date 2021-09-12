import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createUser } from '../Actions/user';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login_url = 'http://localhost:3000/login';
    // const dispatch = useDispatch();

    const fetchUser = async() => {
        const user = {
            email,
            password
        }
        const config = {
            method: 'POST',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        const response = await fetch(login_url, config);
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log(localStorage.getItem('token'))
        console.log(data);
    }

    const onSubmit = (e) => {
        fetchUser();
        e.preventDefault();
    }
    return(
        <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={onSubmit}>
            <input name="email" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input name="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Create User</button>
        </form>
        </div>
    )
}

export default Login;
