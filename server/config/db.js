const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
});

const connectDB = async () => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database: ' + err);
            return;
        }
        if (connection) {
            connection.release();
            console.log('Database connected');
        }
    });
};

module.exports = { connectDB, pool };