DROP TABLE IF EXISTS `superheroes`;
CREATE TABLE `superheroes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `superheroes` (`id`, `name`) VALUES ('1', 'Iron Man'),
('2', 'Spider-Man'),
('3', 'Captain Marvel'),
('4', 'Supergirl'),
('5', 'Flash');
