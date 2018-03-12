var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readDatabase();
  });


  function readDatabase() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log([
                "Item ID: " + res[i].item_id,
                "Item Name: " + res[i].product_name,
                "Price: " + res[i].price
            ].join(' | '))
        }


        connection.end();
      });
  }

  




