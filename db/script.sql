CREATE DATABASE eshop;

--
-- Seleccionar la base de datos a usar 
--

USE eshop;

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id_category` int(10) UNSIGNED NOT NULL,
  `id_parent` int(10) UNSIGNED NOT NULL,
  `id_shop_default` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `level_depth` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `active` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `date_add` datetime NOT NULL,
  `date_upd` datetime NOT NULL,
  `name` varchar(250) NOT NULL
) DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id_category`, `id_parent`, `id_shop_default`, `level_depth`, `active`, `date_add`, `date_upd`, `name`) VALUES
(1, 0, 1, 1, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'TV y Video'),
(2, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Televisores'),
(3, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'DVD y Blu-Ray Players'),
(4, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Home Theater'),
(5, 836, 836, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Sonido Automotriz'),
(7, 3279, 3279, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'MP3 y MP4 Players'),
(10, 11, 1, 3, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Conversores Digitales'),
(11, 1, 1, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Accesorios para TVs'),
(12, 336, 336, 2, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Otras Consolas'),
(13, 0, 13, 1, 1, '2018-10-22 00:00:00', '2018-10-22 00:00:00', 'Eletrodomesticos');


ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`),
  ADD KEY `category_parent` (`id_parent`),
  ADD KEY `level_depth` (`level_depth`);

ALTER TABLE `category`
MODIFY `id_category` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3388;