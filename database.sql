-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for wibuhub
CREATE DATABASE IF NOT EXISTS `wibuhub` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `wibuhub`;

-- Dumping structure for table wibuhub.user_credential
CREATE TABLE IF NOT EXISTS `user_credential` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table wibuhub.user_credential: ~20 rows (approximately)
DELETE FROM `user_credential`;
INSERT INTO `user_credential` (`id`, `user_name`, `password`) VALUES
	(4, 'ryansugitha', '$2a$10$rxp4MVAr2pZYff4.fVSih.TQNBSicpE2o.shP4QAtAE'),
	(6, 'jacobsugitha', '$2a$10$oa.cRUrxeR0JKBq20y0UVuYSXo3JFbVF1Pdp6aqMDp5'),
	(7, 'juansalim', '$2a$10$dkYL3cwEGqfkYpj82hzQ5OAaiSd9AcKRH.10oFI81l8'),
	(8, 'gilbert', '$2a$10$Kvte2liCIDX.10EA6y1zPuZCBN5RWatKXKwGdUqWBO/'),
	(9, 'admin123', '$2a$10$H5frbirQtKmCimwyTum9beuocdJfZlEnozuK7jNpxhy'),
	(10, 'admin1', '$2a$10$LrGxWU2DBsMeVEUU36CtIOtMx923mvZuqNY3KXeUV3M'),
	(11, 'admin2', '$2a$10$ZHZYBX7qa.2d1qDkpbun8Olsmh.qmSXbLrhLAvCsg87'),
	(12, 'admin3', '$2a$10$QfHuhQQhnEgHUH/n6B.F4u5zrxLA6Jui4c7PP/KVRhM'),
	(13, 'admin4', '$2a$10$YGMqYkleA2UeKEgaI6acxOHXPgBA2IITEicwOfUxyGs'),
	(14, 'admin5', '$2a$10$uwlY5dApDwVW5gXsRE4J0.an5vXuDIL8u77pSe4rOEw'),
	(15, 'admin6', '$2a$10$d9OGntGpqj/Y3DFIcHviuuq0Mj34kgis/cJvL99VpW5'),
	(16, 'admin7', '$2a$10$980JEqaylj8RCPjNvjp39ekx7oll0dVdeO6aKZKON1P'),
	(17, 'admin8', '$2a$10$rhQoSAm.JwAgX7zARhan/OnLRogFo.7fZmTJLntd6Qt'),
	(18, 'admin9', '$2a$10$2JbtjD1CpuJz6K/tED.a5eGlyQrzuGvYBybG8JCUG43'),
	(19, 'admin10', '$2a$10$KEZ4CrYB4fWHEhFrRodxdu07V0ETUWc6S2nLXYMl9.F'),
	(20, 'admin11', '$2a$10$hEaXz0.L0K2A1V2/UoRWX.KZ9QjWRXWaTTYTp4fWJw2'),
	(21, 'admin20', '$2a$10$cFEomhAsowVtlBmoFUdMb.F.J8CZfjiN4N0jxSkknUa'),
	(22, 'admin99', '$2a$10$nsBYTmDXlAQzGM/KFA2rU.X2kyeC5nUlX.FVQoUZVkS'),
	(23, 'admin100', '$2a$10$3GLTz5YFKzx.bF424Lo23.vkz9EfL4i/Ksp/9llWMr1'),
	(24, 'admin999', '$2a$10$cd6iMeX77TEbk/K/ncNfw.qWUlmrmZWNtYRRPpfDICSU18xzKPUFu');

-- Dumping structure for table wibuhub.user_detail
CREATE TABLE IF NOT EXISTS `user_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table wibuhub.user_detail: ~19 rows (approximately)
DELETE FROM `user_detail`;
INSERT INTO `user_detail` (`id`, `user_name`, `user_email`) VALUES
	(4, 'ryansugitha', 'ryansugitha@gmail.com'),
	(6, 'jacobsugitha', 'jacobsugitha@gmail.com'),
	(7, 'juansalim', 'juansalim@gmail.com'),
	(8, 'gilbert', 'gilbert@gmail.com'),
	(9, 'admin123', 'admin123@gmail.com'),
	(10, 'admin1', 'admin1@gmail.com'),
	(11, 'admin2', 'admin2@gmail.com'),
	(12, 'admin3', 'admin3@gmail.com'),
	(13, 'admin4', 'admin4@gmail.com'),
	(14, 'admin5', 'admin5@gmail.com'),
	(15, 'admin6', 'admin6@gmail.com'),
	(16, 'admin7', 'admin7@gmail.com'),
	(17, 'admin8', 'admin8@gmail.com'),
	(18, 'admin9', 'admin9@gmail.com'),
	(19, 'admin10', 'admin10@gmail.com'),
	(20, 'admin11', 'admin11@gmail.com'),
	(21, 'admin20', 'admin20@gmail.com'),
	(22, 'admin99', 'admin99@gmail.com'),
	(23, 'admin100', 'admin100@gmail.com'),
	(24, 'admin999', 'admin999@gmail.com');

-- Dumping structure for table wibuhub.user_favorite
CREATE TABLE IF NOT EXISTS `user_favorite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `mal_id` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table wibuhub.user_favorite: ~9 rows (approximately)
DELETE FROM `user_favorite`;
INSERT INTO `user_favorite` (`id`, `user_name`, `mal_id`) VALUES
	(1, 'ryansugitha', '40333'),
	(2, 'ryansugitha', '40333'),
	(3, 'ryansugitha', '40333'),
	(4, 'ryansugitha', '40333'),
	(5, 'ryansugitha', '40333'),
	(6, 'ryansugitha', '40333'),
	(7, 'ryansugitha', '40333'),
	(8, 'ryansugitha', '40333'),
	(9, 'ryansugitha', '40333');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
