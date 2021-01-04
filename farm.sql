-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2021 at 10:20 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `farm`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `email`, `password`) VALUES
(1, 'amit kumar', '15amitbhagat@gmail.com', '[object Promise]'),
(2, 'amit kumar', 'kumar@gmail.com', '$2a$08$DNolH9DfuN0hITvSyyDsi.e4g6YjzKHvtGZOa6bePHyBm.Eg4W6ia'),
(3, 'amit kumar', 'itsshahamit@gmail.com', '$2a$08$nKtS1/cTXnzLUlcOQuBqP.3nXRmtDRCYwt.WiGAf1G.5z4Z8lhdOW'),
(4, 'amit kumar', '90amit25@gmail.com', '$2a$08$cX45o2gD9YVqPbIOB51FwuTwBXkFvlQqobImIvnXEE3toZqYSWKUy'),
(5, 'shreya', 'tiwari@gmail.com', '$2a$08$tCFvLlEJvhQBJU71lwRSUOiqWge7XqW.Y/xYdaASScnDgX0Xmd16m'),
(6, 'amit kumar', 'amit@gmail.com', '$2a$08$jIVBUQIsOhpvFreymlzeUegm8kp3X/j/2vW1ZKH4nvkhibKuawBgC');

-- --------------------------------------------------------

--
-- Table structure for table `farmer`
--

CREATE TABLE `farmer` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `farmer`
--

INSERT INTO `farmer` (`id`, `name`, `email`, `password`) VALUES
(1, 'amit kumar', '2512bhagatamit@gmail.com', '[object Promise]'),
(2, 'amit kumar', 'amit@gmail.com', '$2a$08$gXoHItJaCK59wX5ZNwfusuKro6JhNFOt2iEEgPObxA9ByjdazRLVm'),
(3, 'amit kumar', '', '$2a$08$iz2VwCkuyMvcGNXb9I9ON./iVo4SOIDs/rXdS1lYJ5fgiaCDUDDKW'),
(4, 'amit kumar', 'itsshahamit@gmail.com', '$2a$08$vXtq1di1Xp7y15Q0T2kFjOWTuSeqEisxElO0d2iQQzh9YFHG8R62u'),
(5, 'shreya', 'sha@gmail.com', '$2a$08$6ZbxfPyUMTaSdd5ZEwgKMOK.wyw5Ukm8g3LtcXbcrY3l28xTTurUu'),
(6, 'sh', 'as@gmail.com', '$2a$08$xKuwTrQ75sFLO/xUlOoglujrlkHWLyxRCeB2QhRwc4jfnD4TDuNGe');

-- --------------------------------------------------------

--
-- Table structure for table `labour`
--

CREATE TABLE `labour` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `labour`
--

INSERT INTO `labour` (`id`, `name`, `email`, `password`) VALUES
(1, 'amit kumar', 'itsshahamit@gmail.com', '[object Promise]'),
(2, 'amit kumar', 'sh@gmail.com', '$2a$08$HZ6yQOBJMevDgOxltZ2.D.NOBfYYrYyJdi9y7yYF9GqsR3DIxklMW'),
(3, 'amit kumar', '90amit25@gmail.com', '$2a$08$AJEFWJSjj.9HpgX0L.TeIO9rkOdSvQ8oAtyhfGFuzcydmCbPU3mJ6'),
(4, 'amit kumar', '18it012amit@ug.cusat.ac.in', '$2a$08$dHgxJYOCVgumIO24ls40r.nwy/jyVQxeuntErxCHmZxpQEg5Y4qXi'),
(5, 'shreya', 'tiwari@gmail.com', '$2a$08$g52G4qOUgC4GYI/vNP2K8uXf1lNFnUTGxgdrrReDENr/6FaAcMGEW');

-- --------------------------------------------------------

--
-- Table structure for table `seller`
--

CREATE TABLE `seller` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `seller`
--

INSERT INTO `seller` (`id`, `name`, `email`, `password`) VALUES
(1, 'amit kumar', '18it012amit@ug.cusat.ac.in', '[object Promise]'),
(2, 'amit kumar', 'bhagat@gmail.com', '$2a$08$nrekOiMSQRh/FLcvx74Maeoiv.//y4uDkkVpY.IJpxAMjl4gK20l6'),
(3, 'amit kumar', 'itsshahamit@gmail.com', '$2a$08$L3YktkBSVEXbg78KnfPJFedeWjyPHkQ0lGq3iDGBBXrjdbPx2cS02'),
(4, 'shreya', 'tiwari@gmail.com', '$2a$08$.JMdmIAUSeTtjJPqbrCA2uj7RMFfcWIWfSo4PNSVfehUGVE6r9uDK');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `farmer`
--
ALTER TABLE `farmer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `labour`
--
ALTER TABLE `labour`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller`
--
ALTER TABLE `seller`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `farmer`
--
ALTER TABLE `farmer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `labour`
--
ALTER TABLE `labour`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `seller`
--
ALTER TABLE `seller`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
