const Snippets = {
    MySQLCreateTable: `CREATE TABLE STUDENT(
    Student_id INT PRIMARY KEY,
    Fname VARCHAR(50),
    Lname VARCHAR(50),
    CGPA FLOAT
    );`,
    TriadicSQLCreateTable: `CREATE TABLE STUDENT(
    Student_id INT PRIMARY KEY(T),
    Fname STRING,
    Lname STRING,
    CGPA FLOAT
    );`,
    InsertValuesMySQL: `INSERT INTO STUDENT (Student_id, Fname, Lname, CGPA)
    VALUES (1 , "Amanda" , "Andres" , 3.45),
           (2 , "Alehandro" , "Suarez" , 3.73),
           (3 , "Benjamin" , "Alvido" , 2.98),
           (4 , "Cotral" ,  "Jacobson" , 3.13);`,
    InsertValueTriadicSQL: `INSERT INTO STUDENT (Student_id, Fname, Lname, CGPA)
    VALUES (1:T , "Amanda":T , "Andres":T , 3.45:T),
           (2:T , "Alehandro":F , "Suarez":L , 3.73:T),
           (3:L , "Benjamin":L , "Alvido":T , 2.98:F),
           (4:F , "Cotral":T ,  "Jacobson":F , 3.13:L);`,
}
export default Snippets