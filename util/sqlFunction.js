const mysql = require('mysql2');
const {pool} = require('../config/db');

function createTable(schema){
    return new Promise((resolve, reject) => {
        pool.query(schema, (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}

function checkRecord(table, column, value){
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${table} WHERE ${column} = ?`;

        pool.query(query, [value], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results.length? results[0] : null);
        });
    });
}

function insertRecord (tableName, record){
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${tableName} SET ?`;

        pool.query(query, [record], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

function updateRecord(tableName, updates, column, value) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${tableName} SET ? WHERE ${column} = ?`;
        pool.query(query, [updates, value], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {createTable, checkRecord, insertRecord, updateRecord};

