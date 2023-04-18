const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "cat",
  password: "password678",
  database: "bucket_map",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows[0].solution);
});

connection.end();
