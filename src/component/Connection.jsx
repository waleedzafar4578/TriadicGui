// CreateAccount.js

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function CreateAccount({ onCreateAccount }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }

            const response = await fetch('your-api-endpoint/create-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Account creation failed');
            }

            const data = await response.json();

            // Assuming the server sends back a token upon successful account creation
            const token = data.token;

            // Call the onCreateAccount callback with the token
            onCreateAccount(token);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Create Account</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

// Login.js


function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        try {
            const response = await fetch('http://localhost:8080/ln', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();

            if (data.related_info ==="-1"){
                // Assuming the server sends back a token upon successful login
                const token = data.token;
                alert("Welcome back");
                // Call the onLogin callback with the token
                onLogin(token);
            }else {
                alert(data.ans);
            }


        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

function Connection({ onLogin }) {
    return (
        <div>
            <Login onLogin={onLogin} />
            <p>Don't have an account? </p>
        </div>
    );
}

export default Connection;

