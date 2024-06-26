
import "react-tabulator/css/tabulator_midnight.min.css"
import '../design/Example.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ShowCode = ({ title, intro, command, description, examples }) => {
    const customStyle = {
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#282c34',
        color: '#302f2f',
        overflowX: 'auto',
    };

    return (
        <div className="code_show_main">
            <h3>{title}</h3>
            <h6>{intro}</h6>
            <div className="code-container">
                <SyntaxHighlighter language="sql" style={tomorrow} customStyle={customStyle}>
                    {command}
                </SyntaxHighlighter>
            </div>
            <p>{description}</p>
            {examples.map((example, index) => (
                <div key={index} className="code-container">
                    <SyntaxHighlighter language="sql" style={tomorrow} customStyle={customStyle}>
                        {example.code}
                    </SyntaxHighlighter>
                    <p>{example.explain}</p>
                </div>
            ))}

        </div>
    );
};

export default ShowCode;