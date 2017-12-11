#丢弃一个数据库
DROP DATABASE IF EXISTS xuezi;
#新建一个数据库
CREATE DATABASE xuezi CHARSET=UTF8;  #CHARSET=UTF8指定保存字符所用的字符集
#进入指定的库
USE xuezi;
#创建保存用户信息的表
CREATE TABLE user(
	uid INT,
	uname VARCHAR(32),
	upwd VARCHAR(16)
);
SHOW TABLES;