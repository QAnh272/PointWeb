const mysql = require('mysql2');
const {pool} = require('../config/db');

function getStudentScoresById(id) {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM info WHERE sbd = ?';
        pool.query(query, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results.length ? results[0] : null);
        });
    });
}

module.exports = { getStudentScoresById };


