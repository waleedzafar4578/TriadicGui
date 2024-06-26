// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import config from "./config.js";
import CodeBlock from './CodeBlock.jsx';
import Snippets from '../assets/codeSnippets.js';
import '../design/Result.css'

function ResultPage() {
    const [helpData, setHelpData] = useState(null);

    useEffect(() => {
        fetch(config.result_api)
            .then(response => response.json())
            .then(data => {
                setHelpData(data);
            })
            .catch(error => {
                console.error('Error fetching help data:', error);
            });
    }, []);

    return (
        <div className='pop'>
            <CodeBlock code={Snippets.InsertValueTriadicSQL} lang='sql' />
        </div>
    );
}

export default ResultPage;