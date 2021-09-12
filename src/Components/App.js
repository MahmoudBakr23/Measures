import React, { useEffect } from 'react';
import '../App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import MeasureForm from './MeasureForm';
import MeasureList from './MeasureList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getUsers } from '../Actions/user';
import { useDispatch } from 'react-redux';

const App = () => {
  const loggedIn_url = 'http://localhost:3000/logged_in';
  const dispatch = useDispatch();

  const fetchLoggedInUser = async() => {
    const response = await fetch(loggedIn_url, {
      headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`
      }
    })
    const data = await response.json();
    dispatch(getUsers(data));
    console.log(data);
  }

  useEffect(() => {
    fetchLoggedInUser();
  })

  return (
    <div className="App">
      <h1>Welcome API</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/create/measure" component={MeasureForm} />
          <Route path="/measures" component={MeasureList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
