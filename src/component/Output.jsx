import { useEffect, useState } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'tabulator-tables/dist/css/tabulator_site_dark.min.css';
import "../design/Output.css";

const OutputWindow = ({ status, output }) => {
    const [data, setData] = useState(null);
    console.log(data);

    useEffect(() => {
        if (status === "Table") {
            // Parse the JSON string to an object
            try {
                const parsedOutput = JSON.parse(output);
                setData(parsedOutput);
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        } else {
            setData(null); // Reset data when status is not "Table"
        }
    }, [status, output]);

    // Define table columns and data only if data is available
    const tableColumns = data
        ? data.column_name.map((col, index) => ({
            title: col,
            field: `field${index}`,
            width: 150,
        }))
        : [];

    const tableData = data
        ? data.row.map((r) => {
            const rowData = {};
            r.forEach((item, index) => {
                rowData[`field${index}`] = item;
            });
            return rowData;
        })
        : [];
    let words="";
        if (status==="Db" ||status==="Tb" ){
            words=output.split(' ');
        }

    return (
        <>
            <h6>{status}</h6>
            {status === "Table" && data && (
                <div>
                    <h2>Table: {data.table_name}</h2>
                    <h3>Columns: {data.column_name.join(', ')}</h3>
                    <ReactTabulator data={tableData} columns={tableColumns} layout={"fitColumns"} />
                </div>
            )}
            {status === "QP" && (
                <p>{output}</p>
            )}
            {status === "Db" && (
                <>
                    <h4>Available Databases</h4>
                    <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        {words.map((word, index) => (
                            // Step 2: Map each word to a JSX element
                            <li key={index}>{word}</li>
                        ))}
                    </ul>
                </>

            )}
            {status === "Tb" && (
                <>
                    <h4>Available Tables In Selected Database</h4>
                    <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                        {words.map((word, index) => (
                            <li key={index}>{word}</li>
                        ))}
                    </ul>
                </>

            )}
            {status === "Err" && (
                <p style={{color: 'red'}}>{output}</p>
            )}
        </>
    );
};

export default OutputWindow;
