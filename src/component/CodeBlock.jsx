import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../design/CodeBlock.css'
function CodeBlock({code , lang}){
    return (
        <div className="CBContainer">
            <SyntaxHighlighter language={lang} style={a11yLight} customStyle={{padding: "15px 0px"}}>
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
export default CodeBlock;