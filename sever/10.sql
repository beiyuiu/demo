/*删除并重建数据库xuezi；
创建笔记本型号表laptop_family，包含如下列：
	fid	型号编号，自增主键
	fname	型号名称，非空
	laptopCount 	该型号下笔记本的数量，非空，默认值为1
插入3个笔记本型号，如“戴尔燃7000”、“联想小新”、“MacBook”
创建笔记本信息表laptop，包含如下列：
	lid  笔记本编号，自增主键
	title  标题，非空
	price  价格，非空，默认值为99999.99
	pic	图片，非空，默认值为'img/default.png'
 	isOnsale  是否特价，非空，默认为FALSE
	familyId  所属型号编号，外键，参考型号表的主键
插入若干条笔记本信息，并尝试违反各种约束的插入语句。
*/
SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE laptop_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(16) NOT NULL,
	laptopCount INT NOT NULL DEFAULT 1
);
INSERT INTO laptop_family VALUES(1,'戴尔燃7000',1);
INSERT INTO laptop_family VALUES(2,'联想小新',1);
INSERT INTO laptop_family VALUES(3,'MacBook',1);
CREATE TABLE laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(128) NOT NULL,
	price DECIMAL(7,2) NOT NULL DEFAULT 99999.99,
	pic VARCHAR(128) NOT NULL DEFAULT 'img/default.png',
	isOsale BOOL NOT NULL DEFAULT FALSE,
	familyId INT,
	FOREIGN KEY(familyId) REFERENCES laptop_family(fid)
);
INSERT INTO laptop VALUES(101,'戴尔燃7000',5000,DEFAULT,DEFAULT,1);