import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from '../Actions/user';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginURL = 'http://localhost:3000/login';
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const user = {
      email,
      password,
    };
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    const response = await fetch(loginURL, config);
    const data = await response.json();
    localStorage.setItem('token', data.token);
    dispatch(getUsers(data));
    history.push('/');
  };

  const onSubmit = (e) => {
    fetchUser();
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h3 className="login-signup">Login</h3>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input name="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button className="submit-btn" type="submit">SUBMIT</button>
      </form>
      <a className="create-account" href="/signup">Create account?</a>
    </div>
  );
};

export default Login;
