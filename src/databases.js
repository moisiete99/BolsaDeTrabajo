const mysql = require('mysql');

const { promisify } = require('util');

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: '',
    database: 'bolsadetrabajo'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err)
    }
    if (connection) connection.release();
    console.log('DB is connected');
    return;
});

// Promisify Pool Query
pool.query = promisify(pool.query);

module.exports = pool;