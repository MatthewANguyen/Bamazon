var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",

	password: "",
	database: "bamazon"
});

connection.connect(function(err) {
	if(err) throw err;
	console.log("connected");
	afterConnection();
});

function afterConnection() {
	connection.query("SELECT * FROM `products`", function(err, res) {
		if(err) throw err;
		for(var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " | " + res[i].product_name  + " | " + res[i].price + " | " + res[i].stock_quantity);
		}
		inquirer.prompt([
		{
			type:"input",
			message: "What item would you like to purchase?",
			name:"purchase"
		},
		{
			type:"input",
			message: "How many would you like to buy?",
			name:"amount"
		}
		]).then(function(answers) {
			if(res[answers.purchase - 1].stock_quantity >= answers.amount) {
				var query = "UPDATE `products` SET `stock_quantity` = " + (res[answers.purchase - 1].stock_quantity - answers.amount) + " WHERE item_id = " + answers.purchase;
				connection.query(query, function(err2, res2) {
					if(err2) throw err2;
					console.log("Purchase successful!");
					console.log("Cost: " + (res[answers.purchase - 1].price * answers.amount));
					connection.end();
				})
			} else {
				console.log("Insufficient quantity!");
				connection.end();
			}
		})
	})
}