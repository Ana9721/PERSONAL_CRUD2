-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-08-2023 a las 21:05:49
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crud2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tm_producto`
--

CREATE TABLE `tm_producto` (
  `prod_id` int(11) NOT NULL,
  `prod_nom` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `prod_desc` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `fech_crea` datetime NOT NULL,
  `fech_modi` datetime DEFAULT NULL,
  `fech_elim` datetime DEFAULT NULL,
  `est` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tm_producto`
--

INSERT INTO `tm_producto` (`prod_id`, `prod_nom`, `prod_desc`, `fech_crea`, `fech_modi`, `fech_elim`, `est`) VALUES
(1, 'Auriculares', 'ninguna', '2023-08-16 22:12:10', '2023-08-16 22:12:10', '2023-08-18 16:27:28', 0),
(2, 'Mouse', 'ninguna', '2023-08-16 22:13:59', NULL, '2023-08-18 17:16:01', 0),
(3, 'Teclado', 'ninguna', '2023-08-16 22:14:24', NULL, '2023-08-18 17:15:18', 0),
(4, 'Monitor1', 'ninguna', '2023-08-18 21:12:28', '2023-08-22 09:13:01', NULL, 1),
(5, 'test', 'ninguna', '2023-08-18 17:18:39', NULL, '2023-08-18 17:18:54', 0),
(6, 'test', 'ninguna', '2023-08-22 09:03:44', NULL, NULL, 1),
(7, 'test21', 'ninguna', '2023-08-22 14:49:42', '2023-08-22 14:49:46', NULL, 1),
(8, 'test45', 'gfgdg655', '2023-08-22 15:04:43', '2023-08-22 15:04:50', NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tm_producto`
--
ALTER TABLE `tm_producto`
  ADD PRIMARY KEY (`prod_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tm_producto`
--
ALTER TABLE `tm_producto`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
