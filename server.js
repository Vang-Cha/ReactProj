
// fs.mkdirSync(somename.name1);

var mysql = require('mysql'),
  fs = require('fs');

var connection = mysql.createConnection({
  host     : 'aa1jpce45opedin.ctfwyrb5otg2.us-east-2.rds.amazonaws.com',
  user     : 'username',
  password : 'password',
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

// connection.end();