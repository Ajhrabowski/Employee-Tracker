const inquirer = require('inquirer')
// Import and require mysql2
const mysql = require('mysql2');
require("dotenv").config()

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: process.env.DB_PW,
    database: 'employee_tracker'
  },
  console.log(`Connected to the employee_tracker database.`)
);


start()



function start() {
  inquirer.prompt([
    {
      type: "list",
      name: "option",
      message: "what would you like to do",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
    }

  ]).then((answer) => {
    if (answer.option === "view all departments") {
      viewDepartments()
    }
    else if (answer.option === "view all roles") {
      viewRoles()
    }
    else if (answer.option === "view all employees") {
      viewEmployees()
    }
    else if (answer.option === "add a department") {
      addDepartment()
    }
    else if (answer.option === "add a role") {
      addRole()
    }
    else if (answer.option === "add a employee") {
      addEmployee()
    }
    else if (answer.option === "update an employee role") {
      updateRole()
    }

  })
}

function viewDepartments() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    start()
  });
}

function viewRoles() {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    start()
  });
}

function viewEmployees() {
  const sql = `SELECT * FROM employee`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    start()
  });
}

function addDepartment() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    start()
  });

  function addDepartment() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'addDepartment',
        message: 'Which department do you want to add?',
        choices: ["Marketing", "Human Resources", "Maintenance", "IT", "Operations", "Finance"]
      }

    ]).then(answer => {
      // Handle the selected department
      const selectedDepartment = answer.addDepartment;
      console.log(selectedDepartment)

    })
  }
  // Call the function to start the process
  addDepartment();

}


