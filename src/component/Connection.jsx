import  { useState } from 'react';
import '../design/Connection.css'
import TriadicLogo from './Logo';
import config from './config.js';


function CreateAccount({ onCreateAccount , loginPageRender }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (password !== confirm) {
                throw new Error('Passwords do not match');
            }

            const response = await fetch(config.create_account_api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password,confirm }),
            });

            console.log(response);
            if (!response.ok) {
                throw new Error('Account creation failed');
            }

            const data = await response.json();

            // Assuming the server sends back a token upon successful account creation
            alert(data.related_info);

            // Call the onCreateAccount callback with the token
            onCreateAccount("");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="create-account-section">
            <div className='create-account-container'>
                <h2>Create Account</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='userName'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                        />
                    </div>
                    <div>
                        <input
                            className='password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                        
                    </div>
                    <div>    
                        <input
                            className='confirmPassword'
                            type="password"
                            value={confirm}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder='Confirm Password'
                        />
                        
                    </div>
                    <button className='create-account' type="submit">Create Account</button>
                    <a href='#' onClick={loginPageRender} className='alreadyAccount'>Already have an account? Login</a>
                </form>
            </div>
            <div className="right">
                <TriadicLogo mode="alternative"/>
            </div>
        </div>
    );
}

// Login.js


function Login( {onLogin , createPageRender} ) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(username);
        //console.log(password);
        try {
            const response = await fetch(config.login_api, {
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
                alert(data.related_info);
            }


        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login">
            <div className="left">
                <TriadicLogo mode="alternative"/>
            </div>
            <div className='login-container'>
                <h2 className='heading'>Login</h2>
             {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='userName'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='Username'
                        />
                    </div>
                    <div>
                        <input
                            className='password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                        />
                    </div>
                    <button className='login-button' type="submit">Login</button>
                    <button className='create-account' onClick={createPageRender}>Create new account</button>
                </form>
            </div>
        </div>
    );
}

function Connection( {onLogin , toggleRender , toggleFunction} ) {
    return (
        <>
        {toggleRender? (
            <div>
                <CreateAccount loginPageRender={toggleFunction}/>
            </div>
        ): (
            <div>
                <Login onLogin={onLogin} createPageRender = {toggleFunction}/>
            </div>
        )}
        </>
    );
}

export default Connection;

