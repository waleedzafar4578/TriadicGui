import  { useEffect, useState } from 'react';
import "../design/Output.css";


const OutputWindow = ({ status, output }) => {
    const [data, setData] = useState(null);

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

    return (
        <>
            <h6>{status}</h6>
            {status === "Table" && data && (
                <div>
                    <h2>Table: {data.table_name}</h2>
                    <h3>Columns: {data.column_name.join(', ')}</h3>
                    <table>
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
                    </table>
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
