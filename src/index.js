// import cors from "cors";
// import * as sql from "mysql";

const express = require("express");
const mysql = require("mysql");

const PORT = 8080;

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const { fname, lname, age } = req.body;
  const ID = 2;

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "bims",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = `INSERT INTO bims.customers VALUES (${ID}, '${fname}', '${lname}', ${age})`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });

  res.json({ ID, fname, lname, age });
});

// app.put

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
