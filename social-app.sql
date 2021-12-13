# ************************************************************
# Sequel Pro SQL dump
# Version 5446
#
# https://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.35)
# Database: social-app
# Generation Time: 2021-12-13 14:26:51 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table app-users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `app-users`;

CREATE TABLE `app-users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(12) DEFAULT NULL,
  `user-bio` varchar(500) DEFAULT NULL,
  `user-email` varchar(30) DEFAULT NULL,
  `user-pw` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `app-users` WRITE;
/*!40000 ALTER TABLE `app-users` DISABLE KEYS */;

INSERT INTO `app-users` (`id`, `username`, `user-bio`, `user-email`, `user-pw`)
VALUES
	(1,'tim','g;negnak;gf','tim@tim.com','alwbdawjbd');

/*!40000 ALTER TABLE `app-users` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user-1-following
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user-1-following`;

CREATE TABLE `user-1-following` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `following-username` varchar(20) DEFAULT NULL,
  `following-id` int(11) DEFAULT NULL,
  `true` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `user-1-following` WRITE;
/*!40000 ALTER TABLE `user-1-following` DISABLE KEYS */;

INSERT INTO `user-1-following` (`id`, `following-username`, `following-id`, `true`)
VALUES
	(1,'tim',5,1),
	(2,'diana',7,0);

/*!40000 ALTER TABLE `user-1-following` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user-posts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user-posts`;

CREATE TABLE `user-posts` (
  `post-id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `post-Content` varchar(255) NOT NULL DEFAULT '',
  `post-user` varchar(12) NOT NULL DEFAULT '',
  `post-date-time` datetime NOT NULL,
  `post-time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `post-delete` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`post-id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
