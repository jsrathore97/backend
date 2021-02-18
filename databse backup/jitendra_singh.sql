-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 18, 2021 at 11:22 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jitendra_singh`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(11) NOT NULL,
  `class_fullName` text NOT NULL,
  `class_shortName` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `class_fullName`, `class_shortName`) VALUES
(1, 'huuu', 'hi'),
(2, 'vbvb', 'vbvbv'),
(3, 'vbvbv', 'vcb'),
(4, 'bvbv', 'bvbv'),
(5, 'dfdf', 'scacsa'),
(6, 'cvbvcbvcb', 'bcvb'),
(7, 'vcbvcbvc', 'cvbvcb'),
(8, 'bcvbcvbv', 'cvbccv'),
(9, 'vcbvcbvc', 'vcbvcb'),
(10, 'qwqwqwq', 'qwqwqw'),
(11, 'cdcd', 'sdcdc');

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL,
  `first_Name` text NOT NULL,
  `last_Name` text NOT NULL,
  `email` text NOT NULL,
  `password` int(11) NOT NULL,
  `city` text NOT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `first_Name`, `last_Name`, `email`, `password`, `city`, `role`) VALUES
(1, 'Jitendra ', 'Singh', 'jiten@gmail.com', 123, 'Gurugram', 'admin'),
(2, 'Mohit ', 'Baghel', 'mohit@gmail.com', 123, 'Palwal', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `school`
--

CREATE TABLE `school` (
  `id` int(11) NOT NULL,
  `school_name` text NOT NULL,
  `city` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `school`
--

INSERT INTO `school` (`id`, `school_name`, `city`) VALUES
(6, 'vcxvcv', 'cvcxvcxv'),
(8, 'vvdf', 'vdf'),
(9, 'vfvfd', 'cvd'),
(10, 'vdfv', 'dvfvf'),
(11, 'vfdfvvvfv', 'vfvfvv'),
(12, 'cvfdvv', 'vdfvv'),
(13, 'vfdfv', 'zvfc'),
(14, 'fvfvfv', 'fvfvfv'),
(15, 'vfvfc', 'fcv'),
(16, 'fvcfvfv', 'fvfvf'),
(17, 'fvfvfv', 'vfvfv'),
(19, '11223', '665544');

-- --------------------------------------------------------

--
-- Table structure for table `university`
--

CREATE TABLE `university` (
  `id` int(11) NOT NULL,
  `univ_full_name` text NOT NULL,
  `univ_short_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `university`
--

INSERT INTO `university` (`id`, `univ_full_name`, `univ_short_name`) VALUES
(1, ' Delhi', 'Delhi University'),
(2, 'rtrtrtrt', 'trrtrrttrtr'),
(3, 'trtrtrtrtr', 'trtrtrtrtr'),
(4, 'hjgfbvc', 'jhgfbvc'),
(5, 'hgfbvcs', 'nhgfbvcsx'),
(6, 'ghds', 'hngfbvcs'),
(7, 'dcas', 'gfvds'),
(8, 'fdsfds', 'adsaf'),
(9, 'sdc', 'cdsc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `university`
--
ALTER TABLE `university`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `school`
--
ALTER TABLE `school`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `university`
--
ALTER TABLE `university`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
