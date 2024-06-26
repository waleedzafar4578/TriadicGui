// eslint-disable-next-line no-unused-vars


import '../design/Result.css'

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