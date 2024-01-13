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
      message: "What would you like to do?",
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



  inquirer.prompt([
    {
      type: 'Input',
      name: 'addDepartment',
      message: 'Which department do you want to add?',

    }

  ]).then(answer => {
    // Handle the selected department
    const selectedDepartment = answer.addDepartment;
    console.log(selectedDepartment)

    const sql = `INSERT INTO department (name) values (?)`;

    db.query(sql, [selectedDepartment], (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
      start()
    });


  })
}


function addRole() {
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    const dptarray = result.map(dpt => ({ name: dpt.name, value: dpt.id }))
    inquirer.prompt([
      {
        type: 'list',
        name: 'addRole',
        message: 'What department is your role in?',
        choices: dptarray
      },
      {
        type: 'input',
        name: 'title',
        message: 'Whats the title for this role?',

      },
      {
        type: 'input',
        name: 'salary',
        message: 'Whats the salary for this role?',

      },

    ]).then(answer => {
      // Handle the selected department
      const { addRole, title, salary } = answer;
      const sql = `INSERT INTO role (title, salary, department_id) values (?,?,?)`;

      db.query(sql, [title, salary, addRole], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.table(result);
        start()

      })
    });
    });
  }
