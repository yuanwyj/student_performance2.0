/*
*数据库模块
*@autor: yuanzp
*@date : 2016/11/16
*/

var mysql = require('mysql');

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	database: 'mydb',
});

pool.on('connection',function(connection) {
	connection.query('SET SESSION auto_increment_increment=1');
});

module.exports = pool;