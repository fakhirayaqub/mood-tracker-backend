const express = require("express");
const app = express();
const port= process.env.PORT;
const mysql = require("mysql2");



async function startServer() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST, // address of the server
    user: process.env.DB_USER, // username
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });



















app.listen(port, ()=>{
  console.log(`your port is ${port}`)
});

}















