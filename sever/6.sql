SET NAMES UTF8;
DROP DATABASE IF EXISTS tedu;
CREATE DATABASE tedu CHARSET=UTF8;
USE tedu;
CREATE TABLE banji(
	bid INT,
	bname VARCHAR(8),
	stuCount INT
);
INSERT INTO banji VALUES(10,'WEB1706',3);
INSERT INTO banji VALUES(20,'WEB1707',2);
INSERT INTO banji VALUES(30,'WEB1708',2);
CREATE TABLE student(
	sid INT,	
	sname VARCHAR(8),
	score DECIMAL(3,1),
	schoolDate DATE,
	bjId INT
);
INSERT INTO student VALUES(101,'回家',85.5,'2017-6-1',10);
INSERT INTO student VALUES(102,'客家话',80,'2017-6-1',10);
INSERT INTO student VALUES(103,'客户',78,'2017-6-1',10);
INSERT INTO student VALUES(104,'看看',95,'2017-7-1',20);
INSERT INTO student VALUES(105,'空间',86.5,'2017-7-1',20);
INSERT INTO student VALUES(106,'高于',90,'2017-8-1',30);
INSERT INTO student VALUES(107,'林肯',95.5,'2017-8-1',30);
UPDATE  banji SET stuCount=1 bid=30;
DELETE FROM student WHERE sid=106;
UPDATE  banji SET stuCount=2 WHERE bid=10;
UPDATE  banji SET stuCount=3 WHERE bid=20;
UPDATE student SET bjId=20 WHERE sid=101;
