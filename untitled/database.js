var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost', // assign your host name
    user: 'root',      //  assign your database username
    password: 'Buddha'   ,  // assign your database password
    database: 'nodeapp' // assign database Name
});
conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
/*conn.query("create database nodeapp",function(err){
    if (err) throw err;
    console.log("Db created");
})
/*

var sql="CREATE TABLE `registration` (\n" +
    "  `id` int(10) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,\n" +
    "  `first_name` varchar(30) DEFAULT NULL,\n" +
    "  `last_name` varchar(30) DEFAULT NULL,\n" +
    "  `gender` varchar(10) DEFAULT NULL,\n" +
    "  `email_address` varchar(50) DEFAULT NULL,\n" +
    "  `password` varchar(20) DEFAULT NULL,\n" +
    "  `created_at` datetime NOT NULL\n" +
    ") ENGINE=InnoDB DEFAULT CHARSET=latin1;";
conn.query(sql,function(err){
    if (err) throw err;
    console.log("Table created");
})
*/

module.exports = conn;