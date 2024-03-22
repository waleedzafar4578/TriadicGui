import "../design/Output.css";
// eslint-disable-next-line react/prop-types
function OutputWindow({status,output}) {
    return(
        <>
            <h4>Triadic SQl Db Query Result</h4>
            <h6>{status}</h6>
            <p>{output}</p>
            {status === 'DDL' && (
                <div id={"oks"}>
                    <p>
                        {output}
                    </p>
                </div>
            )
            }
            {status === 'error' &&(
                <div id={"err"}>
                    <p>
                        {output}
                    </p>
                </div>
            )}
        </>
    )
}


export default OutputWindow;