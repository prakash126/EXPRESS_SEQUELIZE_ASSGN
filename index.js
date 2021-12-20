/*
In This Assignment I created two table in different ways (code format is different)
*/

const express = require("express");
// const Sequelize = require("sequelize");
// const dbConfig = require("./db.config");
const sequelize = require("./connnection");
const db = require("./model/index");
const empRoute = require("./route/emp");

const app = express();

app.use(express.json());
const port = 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database successfully..");
  })
  .catch((err) => {
    console.error("Unable to connect to db,beacuse" + err);
  })
  .finally(() => {
    //sequelize.close();
  });

//syncing table
db.sequelize.sync();

app.use("/emp", empRoute);

app.listen(port, () => {
  console.log("Server is listening at http://localhost:3000");
});
