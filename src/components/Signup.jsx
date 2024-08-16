import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'; // For redirection
import './Style.css';

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const validateInput = () => {
        const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

        if (!usernameRegex.test(username)) {
            setErrorMessage('Username must be 3-15 characters long and can only contain letters and numbers.');
            return false;
        }

        if (!passwordRegex.test(password)) {
            setErrorMessage('Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
            return false;
        }

        setErrorMessage('');
        return true;
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        if (!validateInput()) {
            return;
        }

        const user = { username, password, phoneNumber, email };

        try {
            await axios.post('http://localhost:8080/signup', user);
            alert('Signup successful! Confirmation sent to phone and email.');
            navigate('/login'); // Redirect to the login page
        } catch (error) {
            console.error('There was an error signing up!', error);
            setErrorMessage('Signup failed. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h2>Signup</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
