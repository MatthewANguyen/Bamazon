DROP DATABASE IF EXISTS `bamazon`;
CREATE DATABASE `bamazon`;

USE `bamazon`;

SELECT * FROM `products`;

CREATE TABLE `products` (
	`item_id` INTEGER(10) NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(50) NOT NULL,
    `department_name` VARCHAR(50) NOT NULL,
    `price` DOUBLE NOT NULL,
    `stock_quantity` INTEGER(10) NOT NULL,
    PRIMARY KEY (`item_id`)
    );
    
INSERT INTO `products`(`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES('headphones', 'electronics', 49.99, 40),
			('shoes', 'apparel', 39.99, 25),
            ('basketball', 'sports', 29.99, 50),
            ('notebook', 'office products', 5.99, 200),
            ('rug', 'furniture', 84.99, 10),
            ('television', 'electronics', 299.99, 15),
            ('camera', 'electronics', 259.99, 10),
            ('skateboard', 'skateboards', 109.99, 30),
            ('backpack', 'travel', 49.99, 70),
            ('mug', 'kitchen', 9.99, 80);
            