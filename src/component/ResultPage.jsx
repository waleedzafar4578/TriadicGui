// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import config from "./config.js";
import CodeBlock from './CodeBlock.jsx';
import Snippets from '../assets/codeSnippets.js';
import '../design/Result.css'
import Example from './Example.jsx';
import Descriptions from '../assets/descriptions.js';
import Tdata from '../assets/exampleTables.js';
import ShowCode from "./Example.jsx";
import { codeExamplesData } from '../data/codeExamples';


function ResultPage() {
    return (
        <div>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <h1 align="center">Quick Start</h1>
            {codeExamplesData.map((exampleData, index) => (
                <ShowCode
                    key={index}
                    title={exampleData.title}
                    intro={exampleData.intro}
                    command={exampleData.command}
                    description={exampleData.description}
                    examples={exampleData.examples}
                />
            ))}
        </div>
    );
}

export default ResultPage;