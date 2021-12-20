const Sequelize = require("sequelize");
const sequelize = require("../connnection");

//Define the structure of EmployeeSequalize table...

let employeeTable = sequelize.define(
  "emptable",
  {
    emp_id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    dept: Sequelize.STRING,
    designation: Sequelize.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

// employeeTable
//   .sync()
//   .then((data) => {
//     console.log("Table created sucessfully");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = employeeTable;
