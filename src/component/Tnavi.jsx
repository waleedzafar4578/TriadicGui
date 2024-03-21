
// Router.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import EditorPage from "./EditorPage.jsx";
import ResultPage from "./ResultPage.jsx";
import HelpPage from "./HelpPAge.jsx";

import "../design/Tnavi.css"
import Overview from "./Overview.jsx";


const AppRouter = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Overview</Link></li>
                    <li><Link to="/editor">Play Ground</Link></li>
                    <li><Link to="/result">Example</Link></li>
                    <li><Link to="/help">Help</Link></li>
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



