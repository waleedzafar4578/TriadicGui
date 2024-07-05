// AppRouter.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EditorPage from './EditorPage.jsx';
import ResultPage from './ResultPage.jsx';
import Overview from './Overview.jsx';
import '../design/Tnavi.css';

const handleLogout = () => {
    // Remove token from localStorage
    console.log("Logout function");
    localStorage.removeItem('token');
    window.location.reload();
   // window.location.href = 'https://waleedzafar4578.github.io/TriadicGui/';
};
const AppRouter = () => {
    return (
        <Router basename="/TriadicGui"> {/* Replace 'your-repo-name' with the actual name of your GitHub repository */}
            <nav id={"menu_bar"}>
                <ul >
                    <li className='menu-item'><Link to="/">Overview</Link></li>
                    <li className='menu-item'><Link to="/editor">Play Ground</Link></li>
                    <li className='menu-item'><Link to="/result">Quick Start</Link></li>
                    <li className='menu-item-logout'>
                        <button onClick={handleLogout} className='logout-button'>Logout</button>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/result" element={<ResultPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
