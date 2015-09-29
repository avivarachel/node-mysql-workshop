var mysql = require('mysql');
var Promise = require('bluebird');
var Table = require('cli-table');
var colors = require('colors');
Promise.promisifyAll(mysql);
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

var connection = mysql.createConnection({
  host     : process.env.IP,
  user     : process.env.C9_USER,
  password : '',
  database : 'mysql'
});

connection.queryAsync("SHOW DATABASES;").then(
    function(results) {
    	var rows = results[0];
    	// do something with rows...
    	for ( var i=0; i < rows.length; i++ ) {
            console.log(colors.purple(rows[i].Database));
        }
    }
).finally(
    function() {
        connection.end();
    }
);