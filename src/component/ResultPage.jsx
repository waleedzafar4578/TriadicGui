// eslint-disable-next-line no-unused-vars


import '../design/Result.css'

import ShowCode from "./Example.jsx";
//import { codeExamplesData } from '../data/codeExamples';


function ResultPage() {
    return (
        <>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <h2 className='QS' align="center">Quick Start</h2>
            <div className="content_quick">
                <h3 className='PTL'>Peirce’s Triadic Logic</h3>
                <div className="PTL-content">
                <p>
                    Peirce’s Triadic Logic is a unique logical framework developed by the American philosopher and
                    logician Charles Sanders Peirce. Unlike classical binary logic, which operates with two truth values
                    (TRUE and FALSE), Peirce’s logic introduces a third truth value: <strong>LIMIT</strong>. This
                    addition allows for a more nuanced representation of uncertainty and indeterminacy in logical
                    expressions.
                </p>
                </div>
                <h3>The Three Truth Values:</h3>
                <div className="TTV">
                <table border="1" cellPadding="10">
                    <thead>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><strong>TRUE</strong></td>
                        <td>Represents statements or conditions that are definitively correct or accurate. Corresponds
                            to the traditional binary logic value of TRUE.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>FALSE</strong></td>
                        <td>Represents statements or conditions that are definitively incorrect or inaccurate.
                            Corresponds to the traditional binary logic value of FALSE.
                        </td>
                    </tr>
                    <tr>
                        <td><strong>LIMIT</strong></td>
                        <td>Introduces a middle ground between TRUE and FALSE, representing a state of indeterminacy,
                            uncertainty, or partial truth.<br></br> Addresses scenarios where information is incomplete,
                            ambiguous, or where a definitive TRUE or FALSE value cannot be assigned.
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>


                <h3>Benefits of Triadic Logic:</h3>
                <div className="benefitList">
                <ul className='benefits'>
                    <li>
                        <strong>Handling Uncertainty</strong>: Triadic logic is particularly useful in scenarios where
                        binary logic falls short, such as in databases dealing with incomplete or ambiguous data. The
                        LIMIT value allows for a more flexible and accurate representation of such data.
                    </li>
                    <li>
                        <strong>Improved Data Analysis</strong>: By incorporating a third truth value, data analysis can
                        be more nuanced, accommodating degrees of truth and improving decision-making processes.
                    </li>
                    <li>
                        <strong>Enhanced Expressiveness</strong>: Triadic logic expands the expressiveness of logical
                        statements, allowing for a richer and more detailed representation of real-world phenomena.
                    </li>
                </ul>
                </div>

                <h3>Application in Your Database System:</h3>
                <p>
                    In the context of your relational database project:
                </p>
                <div className="applicationList">
                <ul className='application'>
                    <li>
                        <strong>Data Storage</strong>: Each cell in your database can have one of the three statuses:
                        TRUE, FALSE, or LIMIT. This enables a more sophisticated and accurate representation of the
                        stored data.
                    </li>
                    <li>
                        <strong>Queries and Operations</strong>: Users can perform queries and operations that take into
                        account the third truth value, allowing for more complex and meaningful data interactions.
                        Custom operators can be defined to handle the LIMIT value effectively, providing users with
                        powerful tools for data manipulation and analysis.
                    </li>
                </ul>
                </div>
                <h3>Example:</h3>
                <p>
                    Suppose you have a database storing sensor data, and some readings are ambiguous or incomplete.
                    Using binary logic, you would have to either exclude these readings or inaccurately classify them as
                    TRUE or FALSE. With triadic logic, you can assign a LIMIT value to these ambiguous readings,
                    maintaining the integrity and completeness of your data.
                </p>
                <pre>

               <ShowCode
                   code={"SELECT * FROM sensor_data WHERE status = 'LIMIT';"}
               />


                </pre>
                <p>
                    This query would retrieve all records where the sensor data is uncertain or incomplete, allowing for
                    targeted analysis and decision-making.
                </p>

                <strong>
                    In Peirce’s Triadic Logic, TRUE is abbreviated as T, FALSE as F, and LIMIT as L.
                </strong>
            </div>
            <div className='Queries'>
                <h2>SQL Query Categories</h2>

                <h3>Data Query Language (DQL)</h3>
                <p>DQL is used to query the database and retrieve data.</p>
                <div className="DQL">
                <ul className='DQL-list' style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li className='Working'>
                        <strong>SELECT</strong>: Retrieves data from the database.
                        <pre><code>SELECT * FROM table_name;</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                </ul>
                </div>

                <h3>Data Definition Language (DDL)</h3>
                <p>DDL is used to define and modify database structure.</p>
                <div className="DDL">
                <ul className='DDL-list' style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li className='Working'>
                        <strong>CREATE</strong>: Creates a new table or database.
                        <pre><code>CREATE TABLE table_name (column1 datatype, column2 datatype);</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='Working'>
                        <strong>ALTER</strong>: Modifies an existing database object.
                        <pre><code>ALTER TABLE table_name ADD column_name datatype;</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='notWorking'>
                        <strong>DROP</strong>: Deletes a table or database.
                        <pre><code>DROP TABLE table_name;</code></pre>
                        <p>Status: <strong>Not Working</strong></p>
                    </li>
                </ul>
                </div>

                <h3>Data Control Language (DCL)</h3>
                <p>DCL is used to control access to data in the database.</p>
                <div className="DCL">
                <ul className='DCL-list' style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li className='Working'>
                        <strong>GRANT</strong>: Gives a user access privileges to the database.
                        <pre><code>GRANT SELECT ON table_name TO user_name;</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='notWorking'>
                        <strong>REVOKE</strong>: Removes user access privileges to the database.
                        <pre><code>REVOKE SELECT ON table_name FROM user_name;</code></pre>
                        <p>Status: <strong>Not Working</strong></p>
                    </li>
                </ul>
                </div>

                <h3>Data Manipulation Language (DML)</h3>
                <p>DML is used to insert, update, and delete data in the database.</p>
                <div className="DML">
                <ul className='DML-list' style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li className='Working'>
                        <strong>INSERT</strong>: Adds new data into the database.
                        <pre><code>INSERT INTO table_name (column1, column2) VALUES (value1, value2);</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='Working'>
                        <strong>UPDATE</strong>: Modifies existing data in the database.
                        <pre><code>UPDATE table_name SET column1 = value1 WHERE condition;</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='notWorking'>
                        <strong>DELETE</strong>: Removes data from the database.
                        <pre><code>DELETE FROM table_name WHERE condition;</code></pre>
                        <p>Status: <strong>Not Working</strong></p>
                    </li>
                </ul>
                </div>

                <h3>Transaction Control Language (TCL)</h3>
                <p>TCL is used to manage transactions in the database.</p>
                <div className="TCL">
                <ul className='TCL-list' style={{ listStyle: 'square' , paddingLeft: '20px'}}>
                    <li className='Working'>
                        <strong>COMMIT</strong>: Saves the transaction in the database.
                        <pre><code>COMMIT;</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='Working'>
                        <strong>ROLLBACK</strong>: Reverts the transaction in the database.
                        <pre><code>ROLLBACK;</code></pre>
                        <p>Status: <strong>Working</strong></p>
                    </li>
                    <li className='notWorking'>
                        <strong>SAVEPOINT</strong>: Sets a savepoint within a transaction.
                        <pre><code>SAVEPOINT savepoint_name;</code></pre>
                        <p>Status: <strong>Not Working</strong></p>
                    </li>
                </ul>
                </div>
            </div>
        </>
    );
}

export default ResultPage;