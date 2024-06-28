
import "react-tabulator/css/tabulator_midnight.min.css"
import '../design/Example.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ShowCode = ({ code }) => {
    const customStyle = {
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#282c34',
        color: '#302f2f',
        overflowX: 'auto',
    };

    return (
        <div className="code_show_main">

                <SyntaxHighlighter language="sql" style={tomorrow} customStyle={customStyle}>
                    {code}
                </SyntaxHighlighter>

        </div>
    );
};

export default ShowCode;