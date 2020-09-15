const mysql = require('promise-mysql');

const connection = {
    host: process.env.DB_HOST, // 로컬 호스트 주소
    port: process.env.DB_PORT,         // 포트번호
    user: process.env.DB_NAME,
    password: '1234',
    database: 'serverstudy'
};

module.exports = mysql.createPool(connection)