import { ReactTabulator } from "react-tabulator";
import CodeBlock from "./CodeBlock";
export default function Example({exampleCode , language , heading , Tdata}){
    return (
        <>
            <h2>{heading}</h2>
            <div className="exapmleContainer">
                <CodeBlock code={exampleCode} lang={language}/>
                <ReactTabulator data={Tdata.data} columns={Tdata.columns} layout={"fitColumns"}/>
            </div>
        </>
    )
}