const mysql = require('mysql');

const pool = mysql.createPool({
  host: '118.67.128.222',
  port: 3306,
  user: 'root',
  password: 'P@ssw0rd',
  database: 'qallah'
});

module.exports = pool;