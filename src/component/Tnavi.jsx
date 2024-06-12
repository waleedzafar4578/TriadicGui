// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EditorPage from './EditorPage.jsx';
import ResultPage from './ResultPage.jsx';
import HelpPage from './HelpPAge.jsx';
import Overview from './Overview.jsx';
import '../design/Tnavi.css';

const AppRouter = () => {
    return (
        <Router basename="/TriadicGui"> {/* Replace 'your-repo-name' with the actual name of your GitHub repository */}
            <nav>
                <ul>
                    <li className='menu-item'><Link to="/">Overview</Link></li>
                    <li className='menu-item'><Link to="/editor">Play Ground</Link></li>
                    <li className='menu-item'><Link to="/result">Example</Link></li>
                    <li className='menu-item'><Link to="/help">Help</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/result" element={<ResultPage />} />
                <Route path="/help" element={<HelpPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
