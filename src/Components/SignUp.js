import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const signupURL = 'http://localhost:3000/signup';
  const history = useHistory();

  const fetchUser = async () => {
    const user = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    };
    const response = await fetch(signupURL, config);
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };

  const onSubmit = (e) => {
    fetchUser();
    e.preventDefault();
    history.push('/');
  };

  return (
    <div className="form-container">
      <h3 className="login-signup">Signup</h3>
      <form onSubmit={onSubmit}>
        <input name="name" type="text" value={name} placeholder="Username" onChange={(e) => setName(e.target.value)} required />
        <input name="email" type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input name="password" type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <input name="password_confirmation" type="password" value={passwordConfirmation} placeholder="Confirm password" onChange={(e) => setPasswordConfirmation(e.target.value)} required />
        <button className="submit-btn" type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default SignUp;
