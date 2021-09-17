import React, { useEffect } from 'react';
import '../App.css';
import SignUp from './SignUp';
import Login from './Login';
import MeasureForm from './MeasureForm';
import MeasureList from './MeasureList';
import Measure from './Measure';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../Actions/user';

const App = () => {
    const storedUser = useSelector((state) => state);
    const logout_url = 'http://localhost:3000/logout'
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
    }

    const logout = async() => {
      const response = await fetch(logout_url, {
          method: 'DELETE',
          headers: {
              Authorization: `bearer ${localStorage.getItem('token')}`
          }
      })
      const data = await response.json();
      console.log(data);
      dispatch(getUsers(data));
      localStorage.clear();
  }

  const onClick = () => {
      logout();
  }

  useEffect(() => {
    fetchLoggedInUser(); // eslint-disable-next-line
  }, [])

  const checkUser = () => {
    if(storedUser.userReducer.logged_in === true) {
      return(
        <div>
          <button onClick={onClick}><i className="fas fa-sign-out-alt"></i></button>
          <h6>Logout</h6>
        </div>
      )
    } else {
      return(
        <div>
          <a href="/login"><i className="fas fa-sign-out-alt"></i></a>
          <h6>Login</h6>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <header>
        <nav>
          <h2 className="app-text">Your Measures</h2>
        </nav>
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/measure/:id" component={Measure} />
          <Route path="/create/measure" component={MeasureForm} />
          <Route path="/measures" component={MeasureList} />
        </Switch>
      </BrowserRouter>
      <footer>
        <ul className="footer-list">
          <li>
            <div>
              <a href="/create/measure"><i className="fas fa-plus-square"></i></a>
              <h6>Add</h6>
            </div>
          </li>
          <li>
            <div>
              <a href="/measures"><i className="fas fa-chart-pie"></i></a>
              <h6>All</h6>
            </div>
          </li>
          <li>
            {checkUser()}
          </li>
          <li>
            <div>
              <a href="/create/measure"><i className="fas fa-ellipsis-h"></i></a>
              <h6>More</h6>
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
