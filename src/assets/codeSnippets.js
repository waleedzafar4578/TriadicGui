const Snippets = {
    
    TriadicSQLCreateTable: `CREATE TABLE STUDENT(
    Student_id INT PRIMARY KEY(T),
    Fname STRING,
    Lname STRING,
    CGPA FLOAT
    );`,
    InsertValueTriadicSQL: `INSERT INTO STUDENT (Student_id, Fname, Lname, CGPA)
    VALUES (1:T , "Amanda":T , "Andres":T , 3.45:T),
           (2:T , "Alehandro":F , "Suarez":L , 3.73:T),
           (3:L , "Benjamin":L , "Alvido":T , 2.98:F),
           (4:F , "Cotral":T ,  "Jacobson":F , 3.13:L);`,
    InsertSyntax: `INSERT INTO table_name (column_1 , column_2, ...)
    VALUES (value_1, value_2, ...);`
}
export default Snippets