-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2025 at 03:42 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myterask_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cafe_branch`
--

CREATE TABLE `cafe_branch` (
  `id_branch` bigint(20) UNSIGNED NOT NULL,
  `branch_name` varchar(250) NOT NULL,
  `address_branch` varchar(255) NOT NULL,
  `contact` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE `inventory` (
  `item_id` bigint(20) UNSIGNED NOT NULL,
  `item_name` varchar(225) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price_per_pcs` int(11) NOT NULL,
  `AddedAt` varchar(255) DEFAULT NULL,
  `updatedAt` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`item_id`, `item_name`, `quantity`, `price_per_pcs`, `AddedAt`, `updatedAt`) VALUES
(34, 'Kopi Robusta Aroma Bubuk ¼ kg', 0, 35000, NULL, NULL),
(35, 'Kopi Robusta  Aroma Biji ¼ kg', 0, 35000, NULL, NULL),
(36, 'Gula Aren Bubuk 1000 g', 0, 52500, NULL, NULL),
(37, 'Gula Aren Cair 1100 gr', 0, 60000, NULL, NULL),
(38, 'Cocoa Granule', 0, 180000, NULL, NULL),
(39, 'Max creamer', 0, 45000, NULL, NULL),
(40, 'Red Boat Lychee', 0, 23000, NULL, NULL),
(41, 'Matcha Pure 100 gr', 1, 60000, NULL, NULL),
(42, 'UHT Bendera 946 mL', 5, 149000, NULL, NULL),
(43, 'Susu Kental Manis Bendera 545 gr', 4, 12500, NULL, NULL),
(44, 'Melon Sirup', 0, 105000, NULL, NULL),
(46, 'TOFICO Caramel Sirup 1L', 0, 105000, NULL, NULL),
(47, 'Manggo Delifru', 0, 111000, NULL, NULL),
(48, 'Kopi Moka Arabica Aroma 1/4 kg', 0, 45000, NULL, NULL),
(49, 'Chicken spicy 500g', 1, 10000, NULL, NULL),
(50, 'Krim Kafe', 1, 29500, NULL, NULL),
(51, 'UHT ULTRA MILK 750 ML', 1, 13500, NULL, NULL),
(53, 'Sirup Marjan Vanila 460 mL', 1, 17000, NULL, NULL),
(54, 'MaxTea Lemon tea 30 sachet @ 25g(750 g)', 1, 45000, NULL, NULL),
(57, 'SUSU UHT DIAMOND', 4, 21000, 'December 5, 2024', 'December 15, 2024');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_name` varchar(255) DEFAULT NULL,
  `quantity_order` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `total_price` int(11) DEFAULT NULL,
  `order_date` varchar(50) DEFAULT NULL,
  `product_category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_name`, `payment_method`, `product_id`, `product_name`, `quantity_order`, `price`, `total_price`, `order_date`, `product_category`) VALUES
(152, 'sihab', 'QRIS', 22, 'Americano ', 1, 15000, 15000, '26 September 2024', NULL),
(153, 'sihab', 'QRIS', 22, 'Americano ', 1, 17000, 17000, '26 September 2024', NULL),
(154, 'sihab', 'QRIS', 22, 'Americano ', 1, 35000, 35000, '26 September 2024', NULL),
(155, 'sihab', 'QRIS', 22, 'Americano ', 1, 34000, 34000, '26 September 2024', NULL),
(156, 'pito', 'Cash', 25, 'Matcha Late', 1, 18000, 18000, '26 September 2024', NULL),
(157, 'pito', 'Cash', 25, 'Matcha Late', 1, 20000, 20000, '26 September 2024', NULL),
(158, 'sihab', 'QRIS', 25, 'Matcha Late', 3, 20000, 60000, '26 September 2024', NULL),
(159, 'Sihab', 'QRIS', 22, 'Americano ', 1, 17000, 17000, '26 September 2024', NULL),
(160, 'Sihab', 'QRIS', 22, 'Americano ', 1, 17000, 17000, '26 September 2024', NULL),
(161, 'Sihab', 'Cash', 22, 'Americano ', 1, 17000, 17000, '26 September 2024', NULL),
(162, 'Sihab', 'Cash', 24, 'Long Black', 1, 15000, 15000, '26 September 2024', NULL),
(163, 'Sihab', 'QRIS', 22, 'Americano ', 1, 17000, 17000, '26 September 2024', NULL),
(164, 'Sihab', 'QRIS', 23, 'Espresso', 1, 0, 0, '26 September 2024', NULL),
(165, 'Sihab', 'QRIS', 24, 'Long Black', 1, 15000, 15000, '26 September 2024', NULL),
(166, 'Sihab', 'QRIS', 25, 'Matcha Late', 1, 20000, 20000, '26 September 2024', NULL),
(167, 'Sihab', 'QRIS', 22, 'Americano ', 1, 17000, 17000, '26 September 2024', NULL),
(168, 'eko', 'Cash', 26, 'Espresso', 1, 12000, 12000, '27 September 2024', NULL),
(169, 'Edi', 'QRIS', 26, 'Espresso', 1, 12000, 12000, '27 September 2024', NULL),
(170, 'Edi', 'QRIS', 27, 'Doopia/Double espresso', 1, 24000, 24000, '27 September 2024', NULL),
(171, 'edi', 'QRIS', 26, 'Espresso', 1, 12000, 12000, '27 September 2024', NULL),
(172, 'edi', 'QRIS', 27, 'Doopia/Double espresso', 1, 24000, 24000, '27 September 2024', NULL),
(173, 'faris', 'Cash', 26, 'Espresso', 1, 12000, 12000, '27 September 2024', NULL),
(174, 'faris', 'Cash', 27, 'Doopia/Double espresso', 1, 0, 0, '27 September 2024', NULL),
(175, 'salsa', 'Cash', 29, 'Bon-Bon', 3, 10000, 30000, '30 October 2024', NULL),
(176, 'Adjan', 'Cash', 52, 'Kopi Susu Gula Aren', 2, 15, 30, '30 October 2024', NULL),
(177, 'Adnan', 'Cash', 33, 'Vanila Latte', 1, 15000, 15000, '30 October 2024', NULL),
(178, 'agus', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(179, 'Agus', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(180, 'Asd', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(181, 'Ahdh', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(182, 'Akis', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(183, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(184, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(185, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(186, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(187, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(188, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(189, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(190, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(191, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(192, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(193, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(194, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(195, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(196, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(197, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(198, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(199, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(200, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(201, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(202, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(203, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(204, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(205, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(206, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(207, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(208, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(209, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(210, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(211, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(212, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(213, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(214, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(215, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(216, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(217, 'Fito', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(218, 'Fito', 'Cash', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(219, 'ywuwu', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(220, 'Fito', 'Cash', 36, 'Mix Bento', 1, 0, 0, '9 November 2024', NULL),
(221, 'nsnsn', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(222, 'Jajs', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(223, 'Uwhwha', 'QRIS', 27, 'Doopia/Double espresso', 1, 20000, 20000, '9 November 2024', NULL),
(224, 'Jasj', 'Cash', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(225, 'jwjwj', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(226, 'jejej', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(227, 'jsjsj', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(228, 'ueueu', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(229, 'jsjs', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(230, 'dhava', 'QRIS', 53, 'Le mineral 600ml', 1, 5000, 5000, '9 November 2024', NULL),
(231, 'dhava', 'QRIS', 35, 'Chicken Katsu', 1, 18000, 18000, '9 November 2024', NULL),
(232, '-', 'Cash', 45, 'Nasi telur', 2, 15000, 30000, '9 November 2024', NULL),
(233, '-', 'QRIS', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(234, '-', 'Cash', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '9 November 2024', NULL),
(235, '-', 'Cash', 33, 'Vanila Latte', 1, 15000, 15000, '9 November 2024', NULL),
(236, '-', 'Cash', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(237, '-', 'Cash', 30, 'Long Black Hot', 1, 0, 0, '9 November 2024', NULL),
(238, '-', 'Cash', 53, 'Le mineral 600ml', 1, 5000, 5000, '9 November 2024', NULL),
(239, '-', 'Cash', 45, 'Nasi telur', 2, 15000, 30000, '9 November 2024', NULL),
(240, '-', 'Cash', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(241, '-', 'QRIS', 45, 'Nasi telur', 1, 15000, 15000, '9 November 2024', NULL),
(242, '-', 'QRIS', 38, 'Spicy Chicken ', 1, 15000, 15000, '9 November 2024', NULL),
(243, '-', 'QRIS', 39, 'Chicken Teriyaki', 1, 15000, 15000, '9 November 2024', NULL),
(244, '-', 'QRIS', 53, 'Le mineral 600ml', 2, 5000, 10000, '9 November 2024', NULL),
(245, '-', 'QRIS', 51, 'Mix Platter', 1, 25000, 25000, '9 November 2024', NULL),
(246, '-', 'QRIS', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '9 November 2024', NULL),
(247, '-', 'QRIS', 56, 'Matcha Latte', 1, 15000, 15000, '9 November 2024', NULL),
(248, '-', 'QRIS', 40, 'Blackpepper Chicken', 1, 15000, 15000, '9 November 2024', NULL),
(249, 'Hab', 'Cash', 36, 'Mix Bento', 4, 18000, 72000, '9 November 2024', NULL),
(250, 'Mamat', 'QRIS', 43, 'Teh tarik', 1, 10000, 10000, '9 November 2024', NULL),
(251, '-', 'QRIS', 58, 'Sop Kikil Sapi', 1, 25000, 25000, '9 November 2024', NULL),
(252, '.', 'Cash', 38, 'Spicy Chicken ', 1, 15000, 15000, '9 November 2024', NULL),
(253, '-', 'QRIS', 35, 'Chicken Katsu', 1, 18000, 18000, '9 November 2024', NULL),
(254, '.', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '9 November 2024', NULL),
(255, '-', 'Cash', 42, 'Lemon tea', 1, 10000, 10000, '9 November 2024', NULL),
(256, '-', 'QRIS', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(257, '.', 'QRIS', 45, 'Nasi telur', 1, 0, 0, '9 November 2024', NULL),
(258, '.', 'QRIS', 43, 'Teh tarik', 1, 10000, 10000, '9 November 2024', NULL),
(259, '.', 'Cash', 43, 'Teh tarik', 1, 10000, 10000, '9 November 2024', NULL),
(260, '-', 'Cash', 59, 'Mie Kuah', 1, 15000, 15000, '9 November 2024', NULL),
(261, '-', 'Cash', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(262, '.', 'QRIS', 35, 'Chicken Katsu', 1, 18000, 18000, '9 November 2024', NULL),
(263, '..', 'QRIS', 36, 'Mix Bento', 1, 18000, 18000, '9 November 2024', NULL),
(264, '.', 'QRIS', 43, 'Teh tarik', 3, 10000, 30000, '9 November 2024', NULL),
(265, '-', 'QRIS', 28, 'Americano', 1, 12000, 12000, '9 November 2024', NULL),
(266, '-', 'QRIS', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(267, '-', 'QRIS', 56, 'Matcha Latte', 1, 15000, 15000, '9 November 2024', NULL),
(268, '-', 'QRIS', 39, 'Chicken Teriyaki', 1, 15000, 15000, '9 November 2024', NULL),
(269, '-', 'Cash', 53, 'Le mineral 600ml', 1, 5000, 5000, '9 November 2024', NULL),
(270, '-', 'Cash', 55, 'Kerupuk Kulit Ikan', 4, 7000, 28000, '9 November 2024', NULL),
(271, '.', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '9 November 2024', NULL),
(272, '.', 'QRIS', 37, 'Egg Chicken roll', 1, 15000, 15000, '9 November 2024', NULL),
(273, '-', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(274, '-', 'QRIS', 55, 'Kerupuk Kulit Ikan', 4, 7000, 28000, '9 November 2024', NULL),
(275, '-', 'QRIS', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '9 November 2024', NULL),
(276, '-', 'Cash', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(277, '-', 'QRIS', 39, 'Chicken Teriyaki', 1, 15000, 15000, '9 November 2024', NULL),
(278, '-', 'QRIS', 28, 'Americano', 1, 12000, 12000, '9 November 2024', NULL),
(279, '.', 'Cash', 35, 'Chicken Katsu', 1, 18000, 18000, '9 November 2024', NULL),
(280, '-', 'Cash', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(281, '.', 'QRIS', 35, 'Chicken Katsu', 1, 18000, 18000, '9 November 2024', NULL),
(282, '.', 'QRIS', 53, 'Le mineral 600ml', 1, 5000, 5000, '9 November 2024', NULL),
(283, '.', 'Cash', 34, 'Carramel Latte', 2, 15000, 30000, '9 November 2024', NULL),
(284, '.', 'Cash', 34, 'Carramel Latte', 1, 15000, 15000, '9 November 2024', NULL),
(285, '.', 'QRIS', 36, 'Mix Bento', 1, 18000, 18000, '9 November 2024', NULL),
(286, '.', 'QRIS', 37, 'Egg Chicken roll', 1, 15000, 15000, '9 November 2024', NULL),
(287, '.', 'QRIS', 36, 'Mix Bento', 1, 18000, 18000, '9 November 2024', NULL),
(288, '.', 'QRIS', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(289, '.', 'QRIS', 37, 'Egg Chicken roll', 1, 15000, 15000, '9 November 2024', NULL),
(290, '-', 'QRIS', 60, 'Susu', 1, 5000, 5000, '9 November 2024', NULL),
(291, '-', 'QRIS', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '9 November 2024', NULL),
(292, '-', 'QRIS', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(293, '.', 'QRIS', 36, 'Mix Bento', 7, 18000, 126000, '9 November 2024', NULL),
(294, '.', 'QRIS', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '9 November 2024', NULL),
(295, '-', 'QRIS', 43, 'Teh tarik', 2, 10000, 20000, '9 November 2024', NULL),
(296, '-', 'Cash', 60, 'Susu', 1, 5000, 5000, '9 November 2024', NULL),
(297, '.', 'Cash', 53, 'Le mineral 600ml', 1, 5000, 5000, '9 November 2024', NULL),
(298, '.', 'QRIS', 45, 'Nasi telur', 1, 15000, 15000, '9 November 2024', NULL),
(299, '-', 'QRIS', 56, 'Matcha Latte', 1, 15000, 15000, '9 November 2024', NULL),
(300, '-', 'QRIS', 55, 'Kerupuk Kulit Ikan', 1, 7000, 7000, '9 November 2024', NULL),
(301, '.', 'Cash', 35, 'Chicken Katsu', 1, 18000, 18000, '9 November 2024', NULL),
(302, '-', 'QRIS', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(303, '.', 'QRIS', 38, 'Spicy Chicken ', 1, 15000, 15000, '9 November 2024', NULL),
(304, '-', 'Cash', 45, 'Nasi telur', 2, 15000, 30000, '9 November 2024', NULL),
(305, '-', 'Cash', 45, 'Nasi telur', 2, 15000, 30000, '9 November 2024', NULL),
(306, '-', 'Cash', 56, 'Matcha Latte', 1, 15000, 15000, '9 November 2024', NULL),
(307, '-', 'Cash', 55, 'Kerupuk Kulit Ikan', 2, 7000, 14000, '9 November 2024', NULL),
(308, '-', 'Cash', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '9 November 2024', NULL),
(309, '-', 'Cash', 33, 'Vanila Latte', 1, 15000, 15000, '9 November 2024', NULL),
(310, '-', 'Cash', 54, 'Nasi goreng', 1, 15000, 15000, '9 November 2024', NULL),
(311, '-', 'Cash', 40, 'Blackpepper Chicken', 1, 15000, 15000, '9 November 2024', NULL),
(312, '-', 'Cash', 53, 'Le mineral 600ml', 1, 5000, 5000, '9 November 2024', NULL),
(313, '.', 'QRIS', 36, 'Mix Bento', 18, 18000, 324000, '9 November 2024', NULL),
(314, '.', 'QRIS', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(315, '.', 'Cash', 45, 'Nasi telur', 1, 15000, 15000, '9 November 2024', NULL),
(316, '.', 'QRIS', 60, 'Susu', 1, 5000, 5000, '9 November 2024', NULL),
(317, 'Fito', 'QRIS', 26, 'Espresso', 2, 10000, 20000, '9 November 2024', NULL),
(318, 'Ss', 'QRIS', 29, 'Bon-Bon', 1, 10000, 10000, '9 November 2024', NULL),
(319, 'Ggh', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(320, 'Fito', 'QRIS', 26, 'Espresso', 2, 10000, 20000, '9 November 2024', NULL),
(321, 'asd', 'Cash', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(322, 'iwwj', 'Cash', 26, 'Espresso', 1, 0, 0, '9 November 2024', NULL),
(323, 'ygy', 'Cash', 28, 'Americano', 1, 10000, 10000, '9 November 2024', NULL),
(324, 'ojkoko', 'Credit Card', 26, 'Espresso', 1, 10000, 10000, '9 November 2024', NULL),
(325, 'kmko', 'Credit Card', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(326, 'kmko', 'Credit Card', 29, 'Bon-Bon', 1, 0, 0, '9 November 2024', NULL),
(327, 'ikjij', 'Cash', 31, 'Tubruk', 1, 10000, 10000, '9 November 2024', NULL),
(328, 'uhuhu', 'Credit Card', 36, 'Mix Bento', 1, 18000, 18000, '9 November 2024', NULL),
(329, 'jajw', 'Cash', 29, 'Bon-Bon', 1, 10000, 10000, '9 November 2024', NULL),
(330, '-', 'Cash', 29, 'Bon-Bon', 1, 10000, 10000, '9 November 2024', NULL),
(331, 'Fito', 'QRIS', 33, 'Vanila Latte', 1, 15000, 15000, '9 November 2024', NULL),
(332, 'Tbbb', 'Cash', 32, 'Empal Gentong', 1, 25000, 25000, '9 November 2024', NULL),
(333, 'Anak ips', 'Cash', 56, 'Matcha Latte', 1, 15000, 15000, '10 November 2024', NULL),
(334, 'Temen faris', 'QRIS', 32, 'Empal Gentong', 1, 25000, 25000, '10 November 2024', NULL),
(335, 'Temen faris', 'QRIS', 53, 'Le mineral 600ml', 1, 5000, 5000, '10 November 2024', NULL),
(336, 'Temen faris', 'QRIS', 32, 'Empal Gentong', 1, 25000, 25000, '10 November 2024', NULL),
(337, 'Temen faris', 'QRIS', 53, 'Le mineral 600ml', 1, 5000, 5000, '10 November 2024', NULL),
(338, 'Temen faris', 'Cash', 32, 'Empal Gentong', 1, 25000, 25000, '10 November 2024', NULL),
(339, 'Temen faris', 'Cash', 53, 'Le mineral 600ml', 1, 5000, 5000, '10 November 2024', NULL),
(340, 'Firas', 'Cash', 54, 'Nasi goreng', 1, 15000, 15000, '10 November 2024', NULL),
(341, 'Ms ganteng', 'QRIS', 31, 'Tubruk', 1, 10000, 10000, '10 November 2024', NULL),
(342, 'Ms ganteng', 'QRIS', 39, 'Chicken Teriyaki', 1, 15000, 15000, '10 November 2024', NULL),
(343, 'Riza', 'Cash', 45, 'Nasi telur', 1, 15000, 15000, '10 November 2024', NULL),
(344, 'Anak ips', 'Cash', 39, 'Chicken Teriyaki', 1, 15000, 15000, '13 November 2024', NULL),
(345, 'Ips', 'Cash', 52, 'Kopi Susu Gula Aren', 1, 15000, 15000, '13 November 2024', NULL),
(346, 'Tentara ', 'Cash', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(347, 'Ips', 'Cash', 43, 'Teh tarik', 1, 10000, 10000, '13 November 2024', NULL),
(348, 'Ips', 'QRIS', 56, 'Matcha Latte', 1, 15000, 15000, '13 November 2024', NULL),
(349, 'Tentara ', 'Cash', 33, 'Vanila Latte', 1, 15000, 15000, '13 November 2024', NULL),
(350, 'Teknik', 'QRIS', 38, 'Spicy Chicken ', 1, 15000, 15000, '13 November 2024', NULL),
(351, 'Teknik', 'QRIS', 53, 'Le mineral 600ml', 1, 5000, 5000, '13 November 2024', NULL),
(352, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(353, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(354, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(355, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(356, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(357, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(358, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(359, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(360, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(361, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(362, 'Ips', 'Cash', 56, 'Matcha Latte', 3, 15000, 45000, '13 November 2024', NULL),
(363, 'Ips', 'Cash', 56, 'Matcha Latte', 2, 15000, 30000, '13 November 2024', NULL),
(364, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(365, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(367, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(368, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(369, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(370, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(374, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(375, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(376, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(377, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(378, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(379, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(380, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(384, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(385, 'Ips', 'Cash', 56, 'Matcha Latte', 5, 15000, 75000, '13 November 2024', NULL),
(386, 'Ips', 'Cash', 36, 'Mix Bento', 1, 18000, 18000, '13 November 2024', NULL),
(387, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(388, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(389, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(390, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(391, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(392, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(393, 'Ips', 'Cash', 43, 'Teh tarik', 1, 10000, 10000, '13 November 2024', NULL),
(394, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(395, 'Ips', 'Cash', 43, 'Teh tarik', 1, 10000, 10000, '13 November 2024', NULL),
(396, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(397, 'Ips', 'Cash', 43, 'Teh tarik', 1, 10000, 10000, '13 November 2024', NULL),
(398, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(399, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(400, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(401, 'Ips', 'QRIS', 34, 'Carramel Latte', 1, 15000, 15000, '13 November 2024', NULL),
(402, 'Cewek putih', 'Cash', 38, 'Spicy Chicken ', 1, 15000, 15000, '13 November 2024', NULL),
(403, 'Cewek putih', 'Cash', 42, 'Lemon tea', 1, 10000, 10000, '13 November 2024', NULL),
(404, 'Cewek putih', 'Cash', 38, 'Spicy Chicken ', 1, 15000, 15000, '13 November 2024', NULL),
(405, 'Cewek putih', 'Cash', 42, 'Lemon tea', 1, 10000, 10000, '13 November 2024', NULL),
(406, NULL, NULL, 27, 'Doopia/Double espresso', 2, 10000, 20000, 'December 5, 2024', NULL),
(407, 'uwi', 'Cash', 61, 'Tempe Mendoan', 2, 5000, 25000, '15 December 2024', NULL),
(408, 'uwi', 'Cash', 62, 'Caramel ', 1, 15000, 25000, '15 December 2024', NULL),
(409, 'uwi', 'QRIS', 62, 'Caramel ', 1, 15000, 15000, '15 December 2024', NULL),
(410, 'uwi', 'Debit', 60, 'Susu', 1, 5000, 5000, '15 December 2024', NULL),
(411, 'asdsadsa', 'Cash', 61, 'Tempe Mendoan', 1, 5000, 5000, '15 December 2024', NULL),
(412, 'kjoijoi', 'Cash', 61, 'Tempe Mendoan', 1, 5000, 5000, '15 December 2024', NULL),
(413, 'plplplplplpl', 'Cash', 60, 'Susu', 2, 5000, 25000, '15 December 2024', NULL),
(414, 'plplplplplpl', 'Cash', 61, 'Tempe Mendoan', 3, 5000, 25000, '15 December 2024', NULL),
(415, 'uwi', 'Cash', 60, 'Susu', 2, 5000, 40000, '20 December 2024', NULL),
(416, 'uwi', 'Cash', 62, 'Caramel ', 2, 15000, 40000, '20 December 2024', NULL),
(417, 'asdsadsa', 'Debit', 49, 'Kentang Goreng', 2, 10000, 20000, '20 December 2024', NULL),
(418, 'asdsadsa', 'Cash', 43, 'Teh tarik', 5, 10000, 50000, '20 December 2024', NULL),
(419, '423erew', 'Cash', 52, 'Kopi Susu Gula Aren', 2, 15000, 30000, '20 December 2024', NULL),
(420, 'dasda', 'Cash', 59, 'Mie Kuah', 1, 15000, 29000, '20 December 2024', NULL),
(421, 'dasda', 'Cash', 56, 'Matcha Latte', 1, 0, 29000, '20 December 2024', NULL),
(422, 'dasda', 'Cash', 55, 'Kerupuk Kulit Ikan', 2, 7000, 29000, '20 December 2024', NULL),
(423, 'qwewqe', 'Cash', 62, 'Caramel ', 4, 15000, 60000, '20 December 2024', NULL),
(424, 'dasda', 'Cash', 34, 'Carramel Latte', 4, 15000, 60000, '20 December 2024', NULL),
(425, 'asdsa', 'Debit', 61, 'Tempe Mendoan', 3, 5000, 15000, '20 December 2024', NULL),
(426, 'jiij', 'Cash', 62, 'Caramel ', 3, 15000, 45000, '20 December 2024', NULL),
(427, 'juji', 'Cash', 56, 'Matcha Latte', 2, 0, 0, '20 December 2024', NULL),
(428, 'uwi', 'Cash', 56, 'Matcha Latte', 3, 0, 0, '20 December 2024', NULL),
(429, 'uwi', 'Cash', 56, 'Matcha Latte', 3, 0, 0, '20 December 2024', NULL),
(430, '-', 'Cash', 62, 'Caramel ', 3, 15000, 75000, '2024-12-20 17:25:51', NULL),
(431, '-', 'Cash', 52, 'Kopi Susu Gula Aren', 2, 15000, 75000, '2024-12-20 17:25:51', NULL),
(432, 'Ada', 'Cash', 52, 'Kopi Susu Gula Aren', 1, 15000, 50000, '2024-12-20 17:34:43', NULL),
(433, 'Ada', 'Cash', 51, 'Mix Platter', 1, 25000, 50000, '2024-12-20 17:34:43', NULL),
(434, 'Ada', 'Cash', 43, 'Teh tarik', 1, 10000, 50000, '2024-12-20 17:34:43', NULL),
(435, 'abey', 'QRIS', 28, 'Americano', 1, 10000, 30000, '2024-12-20 21:54:26', NULL),
(436, 'abey', 'QRIS', 27, 'Doopia/Double espresso', 1, 20000, 30000, '2024-12-20 21:54:26', NULL),
(437, 'zon', 'QRIS', 57, 'Mix Bento', 1, 18000, 28000, '2024-12-20 21:57:08', NULL),
(438, 'zon', 'QRIS', 28, 'Americano', 1, 10000, 28000, '2024-12-20 21:57:08', NULL),
(439, 'ikbal', 'Cash', 62, 'Caramel ', 4, 15000, 60000, '2024-12-21 09:22:39', NULL),
(440, 'nigger', 'QRIS', 54, 'Nasi goreng', 5, 15000, 105000, 'December 22, 2024', NULL),
(441, 'nigger', 'QRIS', 34, 'Carramel Latte', 2, 15000, 105000, 'December 22, 2024', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_category` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_category`, `price`, `image_url`) VALUES
(27, 'Doopia/Double espresso', 'Black Coffee', 20000, 'image-1727396116198.jpg'),
(28, 'Americano', 'Black Coffee', 10000, 'image-1727574699216.webp'),
(29, 'Bon-Bon', 'White Coffee', 10000, 'image-1730274675854.jpg'),
(31, 'Tubruk', 'Black Coffee', 10000, 'image-1730274996801.jpg'),
(32, 'Empal Gentong', 'Makanan Berat', 25000, 'image-1728215090547.jpeg'),
(33, 'Vanila Latte', 'White coffee', 15000, 'image-1730270469885.jpg'),
(34, 'Carramel Latte', 'White Coffee', 15000, 'image-1730270955052.jpeg'),
(35, 'Chicken Katsu', 'Makanan', 18000, 'image-1730272882528.jpg'),
(36, 'Mix Bento', 'Makanan', 18000, 'image-1730272925416.jpg'),
(37, 'Egg Chicken roll', 'Makanan', 15000, 'image-1730272961259.jpg'),
(38, 'Spicy Chicken ', 'Makanan', 15000, 'image-1730272995247.jpg'),
(39, 'Chicken Teriyaki', 'Makanan', 15000, 'image-1730273044202.jpg'),
(40, 'Blackpepper Chicken', 'Makanan', 15000, 'image-1730273099343.jpg'),
(41, 'Rosella', 'Mocktail', 0, 'image-1730273847528.jpg'),
(42, 'Lemon tea', 'Minuman ', 0, 'image-1730274104402.jpg'),
(43, 'Teh tarik', 'Minuman', 10000, 'image-1731544659532.webp'),
(44, 'Gombyang ikan Manyung', 'Makanan', 60000, 'image-1730274247612.jpg'),
(45, 'Nasi telur', 'Makanan', 15000, 'image-1730274314133.jpg'),
(46, 'Nasi ayam goreng', 'Makanan', 25000, 'image-1730274370921.jpg'),
(47, 'Roti Bakar Coklat Keju', 'Makanan', 10000, 'image-1730274483369.jpg'),
(48, 'Roti Bakar Ayam Krispy', 'Makanan', 18000, 'image-1730274541634.jpg'),
(49, 'Kentang Goreng', 'Makanan ', 10000, 'image-1731165924067.webp'),
(50, 'Sosis Goreng', 'Makanan', 15000, 'image-1731165596540.jpeg'),
(51, 'Mix Platter', 'Makanan', 25000, 'image-1730274647204.jpg'),
(52, 'Kopi Susu Gula Aren', 'Kopi', 15000, 'image-1730278959673.jpeg'),
(53, 'Le mineral 600ml', 'Minuman', 5000, 'image-1731142301710.jpg'),
(54, 'Nasi goreng', 'Makanan', 15000, 'image-1731163955072.jpg'),
(55, 'Kerupuk Kulit Ikan', 'Makanan', 7000, 'image-1731164328533.jpg'),
(56, 'Matcha Latte', 'Minuman', 0, 'image-1731164924777.jpg'),
(57, 'Mix Bento', 'Makanan Berat', 18000, 'image-1731145283605.jpg'),
(58, 'Sop Kikil Sapi', 'Makanan', 25000, 'image-1731150330512.jpe'),
(59, 'Mie Kuah', 'Makanan', 15000, 'image-1731544281185.webp'),
(60, 'Susu', 'Minuman', 5000, 'image-1731146891513.jpg'),
(61, 'Tempe Mendoan', 'Makanan', 5000, 'image-1731148365641.webp');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(100) NOT NULL,
  `password_hash` text NOT NULL,
  `contact` varchar(20) NOT NULL,
  `created_at` varchar(50) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `userImage` varchar(255) DEFAULT NULL,
  `role` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password_hash`, `contact`, `created_at`, `refreshToken`, `userImage`, `role`) VALUES
(13, 'uwi123', '$2b$10$lHBJDxjNTMdYc6TwnylmjeQJ2yk.qJJSLFqG6KOwBL/4HBDFaL.2C', '123213123', 'December 13, 2024', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InV3aTEyMyIsImlhdCI6MTczNDY3MjkyMywiZXhwIjoxNzM1Mjc3NzIzfQ.7SQ5iPkxHyRNUzFDWCi2Yb1kA_JWTXUR2-xQgj-XwG0', NULL, NULL),
(14, 'barista123', '$2b$10$VFjy0a4jL9D/GQKnQSM8wesX1U4Q7UyUzksOWBLusN/YiqbjPMrGy', '08561231232', 'December 19, 2024', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsInVzZXJuYW1lIjoiYmFyaXN0YTEyMyIsInJvbGUiOiJCYXJpc3RhIiwiaWF0IjoxNzM0ODU5NjE5LCJleHAiOjE3MzU0NjQ0MTl9.NNlo3yfQYXz-Sdu74O63SghBVR0i8TPYwv0MIOc9vNU', NULL, 'Barista'),
(15, 'AdminUWI', '$2b$10$GBMiXHfgqwSoK4C.yiMk8..MriSylR1dZj.PVlnYiPTfHZ.eRqAKq', '08123123', 'December 19, 2024', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoiQWRtaW5VV0kiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE3MzQ4NjY3NjAsImV4cCI6MTczNTQ3MTU2MH0.z7ovRt7P2deso096EtqOoMcYj8suC3Vbko6drrgtDqE', 'image-1734813023191.jpg', 'Admin'),
(16, 'Manager123', '$2b$10$YjGOobktl0aRoQ4OUiPwsud5d0EJivYULxsg8ocnPKA4FFKtNfPxa', '08561231232', 'December 19, 2024', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsInVzZXJuYW1lIjoiTWFuYWdlcjEyMyIsInJvbGUiOiJNYW5hZ2VyIiwiaWF0IjoxNzM0ODU1MDM1LCJleHAiOjE3MzU0NTk4MzV9.PL72UlikOcVeu4zNfuZwysbUbe192rNWnOze3IQcq-k', NULL, 'Manager'),
(17, 'nahruluwi', '$2b$10$gZgEgkx/399Y.6qrzUtp9.pk0tEJYidM3OLVFNqqfDoztX9pVq5gO', '089123123', 'December 22, 2024', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTcsInVzZXJuYW1lIjoibmFocnVsdXdpIiwicm9sZSI6IkJhcmlzdGEiLCJpYXQiOjE3MzQ4NjIwNTIsImV4cCI6MTczNTQ2Njg1Mn0.GMuTYkXau2djDGKt7G-9GAGlP1wSBoiQ8qt7OunE68U', NULL, 'Barista');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cafe_branch`
--
ALTER TABLE `cafe_branch`
  ADD PRIMARY KEY (`id_branch`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cafe_branch`
--
ALTER TABLE `cafe_branch`
  MODIFY `id_branch` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `item_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=442;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
