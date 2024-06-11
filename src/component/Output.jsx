import  { useEffect, useState } from 'react';
import { ReactTabulator } from 'react-tabulator';
import 'tabulator-tables/dist/css/tabulator_site_dark.min.css'
import "../design/Output.css";


const OutputWindow = ({ status, output }) => {
    const [data, setData] = useState(null);
    console.log(data)
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
    const tableColumns = data.column_name.map((col , index) => ({
        title: col,
        field: `field${index}`,
        width: 150,
    }));
    const tableData = data.row.map((r) =>{
        const rowData = {};
        r.forEach((item , index)=>{
            rowData[`field${index}`] = item;
        });
        return rowData
    })
    return (
        <>
            <h6>{status}</h6>
            {status === "Table" && data && (
                <div>
                    <h2>Table: {data.table_name}</h2>
                    {/* <h3>Columns: {data.column_name.join(', ')}</h3> */}
                    {/* <table>
                        <thead>
                        <tr>
                            {data.column_name.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {data.row.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table> */}
                    <ReactTabulator data = {tableData} columns={tableColumns} layout={"fitColumns"}/>
                </div>
            )}
            {status === "QP" && (
                <p>
                    {output}
                </p>
            )}
        </>
    );
};

export default OutputWindow;
