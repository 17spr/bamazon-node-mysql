
USE bamazon;

TRUNCATE TABLE products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("A home on the beach", "real estate", 1000000, 1), ("Flip flops", "Apparel", 10, 100);