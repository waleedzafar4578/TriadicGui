import { ReactTabulator } from "react-tabulator";
import CodeBlock from "./CodeBlock";
import '../design/Example.css'
export default function Example({exampleCode , language , heading , showTable, Tdata = undefined}){
    return (
        <div>
            <h2>{heading}</h2>
            <div className="exapmleContainer">
                <CodeBlock code={exampleCode} lang={language}/>
                {showTable ? 
                <ReactTabulator data={Tdata.data} columns={Tdata.columns} layout={"fitColumns"}/>:
                null}
            </div>
        </div>
    )
}