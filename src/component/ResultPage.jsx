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
                <h1>Peirce’s Triadic Logic</h1>
                <p>
                    Peirce’s Triadic Logic is a unique logical framework developed by the <strong> American
                    philosopher </strong> and
                    logician <strong className="nm1">Charles Sanders Peirce</strong>.Unlike classical binary logic,
                    which operates with two truth
                    values
                    (TRUE and FALSE), Peirce’s logic introduces a third truth value: <strong>LIMIT</strong>.This
                    addition allows for a more nuanced representation of uncertainty and indeterminacy in logical
                    expressions.
                </p>

                <h2>The Three Truth Values:</h2>
                <table>
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


                <h2>Benefits of Triadic Logic:</h2>

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


                <h2>Application in Your Database System:</h2>
                <p>
                    In the context of your relational database project:
                </p>


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


                <h2>Example:</h2>
                <p>
                    Suppose you have a database storing sensor data, and some readings are ambiguous or incomplete.
                    Using binary logic, you would have to either exclude these readings or inaccurately classify
                    them as
                    TRUE or FALSE. With triadic logic, you can assign a LIMIT value to these ambiguous readings,
                    maintaining the integrity and completeness of your data.
                </p>
                <ShowCode code={"SELECT * FROM sensor_data WHERE status = 'LIMIT';"}/>
                <p>
                    This query would retrieve all records where the sensor data is uncertain or incomplete, allowing
                    for targeted analysis and decision-making.
                </p>

                <strong className="nm2">
                    In Peirce’s Triadic Logic, TRUE is abbreviated as T, FALSE as F, and LIMIT as L.
                </strong>

                <h1>SQL Query Categories</h1>

                <h2>Data Definition Language (DDL)</h2>
                <p>Data Definition Language (DDL) is a subset of SQL (Structured Query Language) used to define and
                    manage all the structures in a database. It deals with the creation, alteration,
                    and deletion of database objects such as tables, indexes, and schemas.
                    DDL commands are crucial for setting up and maintaining the database schema.</p>


                <li>
                    <strong className="nm">CREATE</strong>
                    <p>The CREATE keyword in SQL is used to create new database objects such as tables, views, indexes,
                        and databases.
                        It is a part of the Data Definition Language (DDL), which deals with the structure of the
                        database.</p>
                    <div className="Inm">
                        <strong className="Innm">DATABASE</strong>
                        <p>CREATE DATABASE: Used to create a new database.</p>
                        <ShowCode code={"CREATE DATABASE _db_name"}/>
                    </div>
                    <div className="Inm">
                        <strong className="Innm">TABLE</strong>
                        <p>CREATE TABLE: Used to create a new table within a database.</p>
                        <h3>Only Inline Table Declaration Available</h3>
                        <ShowCode code={"CREATE TABLE _tb_name (  _column_name DATATYPE CONSTRAINT );"}/>
                        <div className={"In_datatype"}>
                            <h2>Supported Datatypes</h2>
                            <table>
                                <thead>
                                <tr>
                                    <th>Data Types</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>BOOL</strong></td>
                                    <td>A boolean data type can hold one of two values: TRUE or FALSE.
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    is_active BOOL\n" +
                                            ");\n" +
                                            "\n" +
                                            "INSERT INTO example (is_active) VALUES (TRUE :T), (FALSE :T);"}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>INT</strong></td>
                                    <td>An integer data type is used to store whole numbers (both positive and negative)
                                        without any decimal points.
                                        Commonly used integer types include INT, SMALLINT, and BIGINT, differing mainly
                                        by the range of values they can store.
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    age INT\n" +
                                            ");\n" +
                                            "\n" +
                                            "INSERT INTO example (age) VALUES (25 :F), (30 :L);"}/>
                                        INT is typically used for fields that require numerical data without fractions,
                                        such as counts, ages, and ID.
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>FLOAT</strong></td>
                                    <td>A floating-point number is a number that has a decimal point.
                                        It can represent fractional values as well as very large or very small numbers.
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    price FLOAT\n" +
                                            ");\n" +
                                            "\n" +
                                            "INSERT INTO example (price) VALUES (19.99 :L), (100.50 :L);"}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>STRING / TEXT</strong></td>
                                    <td>A variable-length character data type.
                                        Typically implemented as VARCHAR or TEXT in SQL.<br/>
                                        With String:
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    STRING\n" +
                                            ");\n" +
                                            "\n" +
                                            "INSERT INTO example (description) VALUES\n" +
                                            " ('A short text' :L), ('A longer description that can vary in length':T);\n"}/>
                                        With Text:
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    TEXT\n" +
                                            ");\n" +
                                            "\n" +
                                            "INSERT INTO example (description) VALUES\n" +
                                            " ('A short text' :L), ('A longer description that can vary in length':T);\n"}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <h2>Supported Constrains</h2>
                            <table>
                                <thead>
                                <tr>
                                    <th>Constrain Name</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><strong>PRIMARY KEY</strong></td>
                                    <td>A combination of NOT NULL and UNIQUE.
                                        Uniquely identifies each row in a table.
                                        Each table can have only one primary key, which can consist of one or more
                                        columns.
                                        <h3><br/>It work like old sql primary key:</h3>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    id INT PRIMARY KEY,\n" +
                                            "    gender CHAR\n" +
                                            ");"}/>

                                        <ShowCode
                                            code={"INSERT INTO example (id,gender)\n" +
                                                "VALUES\n" +
                                                "(1:T , M :T),\n" +
                                                "(2:T , M :L),\n" +
                                                "(3:T , M :L),\n"}/>
                                        <h3><br/><br/>Primary key with <strong>T</strong> Degree/Status:</h3>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    id INT PRIMARY KEY(T),\n" +
                                            "    gender CHAR\n" +
                                            ");"}/>
                                        Here primary key with T means,it only check values must be unique which have
                                        degree T.
                                        <br/>
                                        <h5>Example:</h5>
                                        <ShowCode
                                            code={"INSERT INTO example (id,gender)\n" +
                                                "VALUES\n" +
                                                "(1:T , M :T),\n" +
                                                "(2:T , M :L),\n" +
                                                "(3:T , M :L),\n" +
                                                "(3:L , M :T),\n" +
                                                "(4:F , M :T),\n" +
                                                "(4:T , F :T),\n"}/>
                                        <br/>
                                        <h3><br/><br/>Primary key with <strong>F</strong> Degree/Status:</h3>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    id INT PRIMARY KEY(F),\n" +
                                            "    gender CHAR\n" +
                                            ");"}/>
                                        Here primary key with T means,it only check values must be unique which have
                                        degree T.
                                        <h3><br/><br/>Primary key with <strong>L</strong> Degree/Status:</h3>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    id INT PRIMARY KEY(L),\n" +
                                            "    gender CHAR\n" +
                                            ");"}/>
                                        Here primary key with T means,it only check values must be unique which have
                                        degree T.
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>UNIQUE</strong></td>
                                    <td>Ensures that all values in a column (or a set of columns) are unique.
                                        No two rows can have the same value in the specified column(s).
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    cnic INT UNIQUE\n" +
                                            ");"}/>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    cnic INT UNIQUE(T)\n" +
                                            ");"}/>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    cnic INT UNIQUE(F)\n" +
                                            ");"}/>
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    cnic INT UNIQUE(L)\n" +
                                            ");"}/>
                                        INT is typically used for fields that require numerical data without fractions,
                                        such as counts, ages, and ID.
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>NOT NULL</strong></td>
                                    <td>Ensures that a column cannot have a NULL value.
                                        <ShowCode code={"CREATE TABLE example (\n" +
                                            "    id INT NOT NULL,\n" +
                                            "    name STRING NOT NULL\n" +
                                            ");"}/>
                                        In the above table, the id and name columns cannot be left empty (NULL).
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </li>

                <li>
                    <strong className="nm">ALTER</strong>
                    <h3>ADD COLUMN Into Table</h3>
                    <ShowCode code={"ALTER TABLE _table_name ADD _column_name DATATYPE;"}/>

                    <h3>Drop Column From Table</h3>
                    <ShowCode code={"ALTER TABLE _table_name DROP COLUMN _column_name ;"}/>
                </li>
                <li>
                    <strong className="nm">DROP</strong>
                    <h3>DROP DATABASE</h3>
                    <ShowCode code={"DROP DATABASE _name;"}
                    />
                    <h3>DROP TABLE</h3>
                    <ShowCode code={"DROP TABLE _name;"}
                    />
                </li>
                <li>
                    <strong className="nm">TRUNCATE</strong>
                    <h3>DATABASE</h3>
                    <ShowCode code={"TRUNCATE DATABASE;"}
                    />
                    <h3>TABLE</h3>
                    <ShowCode code={"TRUNCATE TABLE _name;"}
                    />
                </li>


                <h2>Data Query Language (DQL)</h2>
                <p>DQL is used to query the database and retrieve data.</p>


                <li>
                    <strong className="nm">SELECT</strong>: Retrieves data from the database.

                    <ShowCode code={"//Here fetching whole table from database." +
                        "\nSELECT * FROM table_name;"}/>
                    <ShowCode code={"//Here fetching only 2 column from database." +
                        "\nSELECT \n" +
                        "(column_name1,column_name2)\n" +
                        "FROM table_name;"}/>
                    <h3>At this time,system provide only apply condition on one column.</h3>
                    <p><br/>It get those column values where value and degree match</p>
                    <ShowCode code={"//Here fetching whole table from database but applying condition on column." +
                        "\nSELECT * " +
                        "\nFROM table_name \nWHERE \ncolumn_name Operator (values:Degree);"}/>
                    <p><br/>It get those column values where value match</p>
                    <ShowCode code={"//Here fetching whole table from database but applying condition on column." +
                        "\nSELECT * " +
                        "\nFROM table_name \nWHERE \ncolumn_name = (values);"}/>
                    <p><br/>It get those column values where degree match</p>
                    <ShowCode code={"//Here fetching whole table from database but applying condition on column." +
                        "\nSELECT * " +
                        "\nFROM table_name \nWHERE \ncolumn_name = (Degree);"}/>

                    <h2>Supported Operator</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Operator</th>
                            <th>Example</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><strong>Equal</strong></td>
                            <td>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE NAME =(Mia);"}/>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Not Equal</strong></td>
                            <td>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE NAME !=(Mia);"}/>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Less Then </strong></td>
                            <td>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID < (50:T);"}/>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Less Then  Equal</strong></td>
                            <td>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID <= (30:F);"}/>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID <= (50);"}/>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Greater Then </strong></td>
                            <td>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID > (50:T);"}/>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID > (90:L);"}/>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Greater Then Equal </strong></td>
                            <td>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID < (50:T);"}/>
                                <ShowCode code={"SELECT * FROM STUDENT WHERE ID < (50);"}/>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </li>

                <h2>Data Manipulation Language (DML)</h2>
                <p>DML is used to insert, update, and delete data in the database.</p>
                <li>
                    <strong className="nm">INSERT</strong>: Adds new data into the database.
                    <ShowCode
                        code={"INSERT INTO table_name (column1, column2) VALUES (value1:Degree, value2:Degree);"}
                    />

                    <ShowCode
                        code={"INSERT INTO STUDENT(ID,NAME,GENDER,Background,Fee,Allowed) VALUES \n" +
                            "( 4 :L , 'ALI'     :T  , 'M' :T , 'Vip person'     :L , 200.1 :T , true  :T   ),\n" +
                            "( 5 :F , 'Nomi'    :T  , 'M' :T , 'Vip person1'    :L , 200.1 :T , true  :T   ),\n" +
                            "( 6 :T , 'Mahnoor' :F  , 'F' :L , 'Nothing person' :L , 100.0 :L , false :L   );"}
                    />
                </li>
                <li>
                    <strong className="nm">UPDATE</strong>: Modifies existing data in the database.
                    <ShowCode code={"UPDATE table_name SET column1 = value1 WHERE condition;"}/>
                    <ShowCode code={"UPDATE MARKS SET Mark = (10.5 :L) WHERE ID = (1:T);"}/>
                </li>
                <li>
                    <strong className="nm">DELETE</strong>: Removes data from the database.
                    <ShowCode code={"DELETE FROM table_name WHERE condition;"}/>
                    <ShowCode code={"DELETE FROM MARKS WHERE ID > (2);"}/>
                    <ShowCode code={"DELETE FROM MARKS;"}/>
                </li>


                <h2>Other Helping Statement</h2>
                <p>These helping statement are different to different in system.</p>
                <li>
                    <strong className="nm">RENAME</strong>: Change name of existing database name.
                    <h3>DATABASE</h3>
                    <ShowCode
                        code={"RENAME DATABASE _old_database_name,_new_database_name;"}/>
                    <h3>TABLE</h3>
                    <ShowCode
                        code={"RENAME TABLE _old_table_name,_new_table_name;"}/>
                </li>
                <li>
                    <strong className="nm">SEARCH</strong>: Find database from login user container.
                    <ShowCode code={"SEARCH DATABASE _db_name;"}/>
                    <ShowCode code={"SEARCH TABLE _tb_name;"}/>
                </li>
                <li>
                    <strong className="nm">USE</strong>: It use for select database.
                    <ShowCode code={"USE DATABASE _database_name;"}/>
                </li>
                <li>
                    <strong className="nm">SHOW</strong>
                    <ShowCode code={"//It use for show all databases which belong to login user." +
                        "\nSHOW DATABASE;"}/>
                    <ShowCode code={"//It use for show all tables which belong to selected database." +
                        "\nSHOW DATABASE;"}/>
                </li>


            </div>
        </>
    );
}

export default ResultPage;