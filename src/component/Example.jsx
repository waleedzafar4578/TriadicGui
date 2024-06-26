import { ReactTabulator } from "react-tabulator";
import "react-tabulator/css/tabulator_midnight.min.css"
import CodeBlock from "./CodeBlock";
import '../design/Example.css'
export default function Example({exampleCode , language , heading , description , showTable, Tdata = undefined , showAfterExampleDescription , afterExampleDescription = undefined , syntax}){
    return (
        <div>
            <h2 className="heading">{heading}</h2>
            <p className="description">{description}</p>
            <div className="exapmleContainer">
                <h4 className="syntax">Syntax</h4>
                <CodeBlock code={syntax} lang={language}/>
                <h4 className="example">Example</h4>
                <CodeBlock code={exampleCode} lang={language}/>
                {showTable ? 
                <div className="table">
                    <ReactTabulator data={Tdata.data} columns={Tdata.columns} layout={"fitColumns"}/>
                </div>:
                null}
                {showAfterExampleDescription ?
                <p className="description">{afterExampleDescription}</p>: null}
            </div>
        </div>
    )
}