import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';

const Login = ({ setUser }) => {
    const navigate = useNavigate();
    const [username, setUsernameInput] = useState(''); // Rename state variable to avoid confusion
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const credentials = { username, password };

        try {
            const response = await axios.post('http://localhost:8080/login', credentials);
            setUser(response.data.username); // Set the username in the parent state
            alert('Login successful! Welcome, ' + response.data.username);
            navigate('/'); // Redirect to the home page
        } catch (error) {
            console.error('There was an error logging in!', error.response || error.message);
            if (error.response && error.response.status === 401) {
                alert('Invalid username or password.');
            } else {
                alert('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsernameInput(e.target.value)} // Use renamed setter
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
