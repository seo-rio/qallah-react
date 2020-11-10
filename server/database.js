const mysql = require('mysql');

module.exports = function() {
    const pool = mysql.createPool({
        host: '118.67.128.222',
        port: 3306,
        user: 'root',
        password: 'P@ssw0rd',
        database: 'qallah'
      });

      return {
          getConnection: function (callback) {
              pool.getConnection(callback);
          },
          end: function(callback) {
              pool.end(callback);
          }
      }();
}
