CREATE DATABASE bookread CHARACTER SET utf8 COLLATE utf8_general_ci;
USE bookread; 

CREATE TABLE bookfeilei(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(30),
	img VARCHAR(50),
	link VARCHAR(30),
	num INT	
)ENGINE=INNODB DEFAULT CHARSET=utf8;
SELECT * FROM bookfeilei;
INSERT INTO bookfeilei (title,img,link,num) VALUES ('玄幻','https://www.37zw.net/d/image/0/761/761s.jpg','1',67803)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('修真','https://www.biqudu.tv/files/article/image/34/34513/34513s.jpg','2',25049)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('都市','https://www.biquge.info/files/article/image/55/55472/55472s.jpg','3',40154)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('穿越','https://www.biqudu.tv/files/article/image/43/43391/43391s.jpg','4',16093)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('网游','https://www.biqudu.tv/files/article/image/44/44418/44418s.jpg','5',16277)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('科幻','https://www.biqudu.tv/files/article/image/41/41985/41985s.jpg','6',25416)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('完结','https://www.biqudu.tv/files/article/image/43/43934/43934s.jpg','7',14225)
INSERT INTO bookfeilei (title,img,link,num) VALUES ('其他','https://www.biqudu.tv/files/article/image/43/43827/43827s.jpg','8',85643)
UPDATE bookfeilei SET title='仙侠' WHERE id=2;