SET NAMES UTF8;
DROP DATABASE IF EXISTS xuezi;
CREATE DATABASE xuezi CHARSET=UTF8;
USE xuezi;
CREATE TABLE laptop(
	lid INT,
	title VARCHAR(70),
	price DECIMAL(7,2),
	spec VARCHAR(20),
	shelfTime DATE,
	isOnsale BOOL,
	stockCount SMALLINT
);
INSERT INTO laptop VALUES(1,'Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)',6988,'双核i5/8GB内存/128GB闪存','2016-9-2',1,2000);
INSERT INTO laptop VALUES(2,'Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/256GB SSD闪存 MMGG2CH/A)',8268,'双核i5/8GB内存/256GB闪存','2016-10-2',0,5000);
INSERT INTO laptop VALUES(3,'Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i7 处理器/8GB内存/128GB SSD闪存 Z0TA0002L)',7488,'定制款:双核i7/8GB内存/128GB闪存','2016-9-1',1,3000);
INSERT INTO laptop VALUES(4,'Apple MacBook Air 13.3英寸笔记本电脑 银色(Core i7 处理器/8GB内存/256GB SSD闪存 Z0TA0002L)',7888,'定制款:双核i7/8GB内存/256GB闪存','2017-2-2',0,5000);