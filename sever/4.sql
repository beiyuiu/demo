SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE laptop(
	id INT,
	title VARCHAR(16),
	price DECIMAL(7,2),
	count INT,
	shelfDate DATE
);
INSERT INTO laptop VALUES(101,'联想',4500,1,'2010-9-10');
INSERT INTO laptop VALUES(102,'惠普',5500,1,'2010-8-10');
INSERT INTO laptop VALUES(103,'华硕',9600,2,'2009-9-10');
SELECT * FROM laptop;