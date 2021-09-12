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
                <div>
                    <h4>{storedUser.userReducer.data.name}</h4>
                    <button type="button" onClick={onClick}>logout</button>
                </div>
            )
        } else {
            return(
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )
        }
    }

    return(
        displayLinks()
    )
}

export default Home;