const mysql = require('mysql');
const logger = require('./logger');

const pool = mysql.createPool({
    host: '118.67.128.222',
    port: 3306,
    user: 'root',
    password: 'P@ssw0rd',
    database: 'qallah',
    connectionLimit: 4,
});

logger.info('Connection pool created.');

pool.on('acquire', function (connection) {
    logger.info(`Connection ${connection.threadId} acquired`);
});

pool.on('enqueue', function () {
    logger.info('Waiting for available connection slot');
});

pool.on('release', function (connection) {
    logger.info(`Connection ${connection.threadId} released`);
});

const getConn = function (callback) {
    pool.getConnection(function (err, connection) {
        callback(err, connection);
    });
};

module.exports = pool;
