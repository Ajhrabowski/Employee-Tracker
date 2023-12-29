const inquirer = require('inquirer')
// Import and require mysql2
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
  );


  app.get('/api/department', (req, res) => {
    const sql = `SELECT id, name`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        console.log (err);
      }
      console.table(result);
    });
  });
  
  