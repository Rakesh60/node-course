import mysql from "mysql";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
  //   port: 3306,
});
db.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Database connection has been established.`);
  }
});
export default db;
