SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE user(
	uid INT,
	uname VARCHAR(8),
	upwd VARCHAR(16),
	email VARCHAR(32),
	phone CHAR(11),
	avatar  VARCHAR(128),
	userName VARCHAR(16),
	sex CHAR(1),
	isOnline BOOL,
	registerTime DATETIME
);
INSERT INTO user VALUES
(1,'高级','123456','2125','12345678996','C:\Users\Public\Pictures\Sample Pictures\菊花.jpg','李璐','女',1,'2017-8-5 12:21:02'),
(2,'换个','123456','23','12541678945','C:\Users\Public\Pictures\Sample Pictures\沙漠.jpg','飞宇','男',1,'2017-8-5 12:21:02'),
(3,'交换机','123456','242','12534678954','C:\Users\Public\Pictures\Sample Pictures\八仙花.jpg','李娜','女',1,'2017-8-5 12:21:02'),
(4,'花岗岩','123456','51','14563978254','C:\Users\Public\Pictures\Sample Pictures\水母.jpg','李贺','男',0,'2017-8-5 12:21:02');
