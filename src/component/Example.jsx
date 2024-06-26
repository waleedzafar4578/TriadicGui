import { ReactTabulator } from "react-tabulator";
import CodeBlock from "./CodeBlock";
import '../design/Example.css'
export default function Example({exampleCode , language , heading , description , showTable, Tdata = undefined , showAfterExampleDescription , afterExampleDescription}){
    return (
        <div>
            <h2>{heading}</h2>
            <p>{description}</p>
            <div className="exapmleContainer">
                <CodeBlock code={exampleCode} lang={language}/>
                {showTable ? 
                <ReactTabulator data={Tdata.data} columns={Tdata.columns} layout={"fitColumns"}/>:
                null}
                {showAfterExampleDescription ?
                <p>{afterExampleDescription}</p>: null}
            </div>
        </div>
    )
}