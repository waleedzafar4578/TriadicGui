// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import config from "./config.js";
import CodeBlock from './CodeBlock.jsx';
import Snippets from '../assets/codeSnippets.js';
import '../design/Result.css'
import Example from './Example.jsx';
import Descriptions from '../assets/descriptions.js';
import Tdata from '../assets/exampleTables.js';

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
            <Example exampleCode={Snippets.InsertValueTriadicSQL} language='sql' heading="INSERT INTO" description={Descriptions.InsertDescription} showTable={true} Tdata={Tdata.InsertCommand} showAfterExampleDescription={false} syntax={Snippets.InsertSyntax}/>
        </div>
    );
}

export default ResultPage;