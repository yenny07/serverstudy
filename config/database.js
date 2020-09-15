const mysql = require('promise-mysql');

const connection = {
    host: '127.0.0.1',  // 로컬 호스트 주소
    post: 3306,         // 포트번호
    user: 'root',
    password: '1234',
    database: 'yein'
};

module.exports = mysql.createPool(connection)