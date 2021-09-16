import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { getUsers } from '../Actions/user';

const Home = () => {
    const storedUser = useSelector((state) => state);
    const logout_url = 'http://localhost:3000/logout'
    const dispatch = useDispatch();
    const history = useHistory();

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
        history.push('/');
    }

    const onClick = () => {
        logout();
    }

    const displayLinks = () => {
        if(storedUser.userReducer.logged_in === true){
            return(
                <nav>
                    <div className="username">
                        <h4>{storedUser.userReducer.data.name}</h4>
                    </div>
                    <ul className="link-list">
                        <li>
                            <Link to="/create/measure">Add Measure</Link>
                        </li>
                        <li>
                            <Link to="/measures">Your Measures</Link>
                        </li>
                        <li>
                            <button type="button" onClick={onClick}>logout</button>
                        </li>
                    </ul>
                </nav>
            )
        } else {
            return(
                <nav>
                    <ul className="signup-list">
                        <li>
                        <Link to="/signup">SIGNUP</Link>
                        </li>
                        <li>
                        <Link to="/login">LOGIN</Link>
                        </li>
                    </ul>
                </nav>
            )
        }
    }

    return(
        <header>
            {displayLinks()}
        </header>
    )
}

export default Home;