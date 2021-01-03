require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
const mysql = require("mysql2");
const createTables = require("./db/createTables");
const createMoodsRouter = require("./routes/moods");

async function startServer() {
  const app = express();
  app.use(express.json());

  const db = await mysql.createConnection({
    host: process.env.DB_HOST, // address of the server
    user: process.env.DB_USER, // username
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  const moodsRouter = createMoodsRouter(db);
  app.use(moodsRouter);

  await createTables(db);

  app.listen(port, () => {
    console.log(`your port is ${port}`);
  });
}

startServer();
