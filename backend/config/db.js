const mysql = require("mysql2");

const connectDB = mysql.createConnection({
  host: "localhost",
  user: "cat",
  password: "password678",
  database: "bucket_map",
});

connectDB.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = connectDB;
