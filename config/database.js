const maria = require('mariadb');
const pool = maria.createPool({
    host: '118.67.128.222',
    port: 3306,
    user: 'root',
    password: 'P@ssw0rd',
    database: 'qallah',
});

async function getUserList() {
    let conn, rows;
    try {
        conn = await pool.getConnection();
        conn.query('USE qallah');
        rows = await conn.query('SELECT * FROM MEMBER');
    } catch (err) {
        throw err;
    } finally {
        if (conn) conn.end();
        return rows[0];
    }
}

module.exports = {
    getUserList: getUserList,
};
