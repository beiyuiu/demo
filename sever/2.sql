#����һ�����ݿ�
DROP DATABASE IF EXISTS xuezi;
#�½�һ�����ݿ�
CREATE DATABASE xuezi CHARSET=UTF8;  #CHARSET=UTF8ָ�������ַ����õ��ַ���
#����ָ���Ŀ�
USE xuezi;
#���������û���Ϣ�ı�
CREATE TABLE user(
	uid INT,
	uname VARCHAR(32),
	upwd VARCHAR(16)
);
SHOW TABLES;