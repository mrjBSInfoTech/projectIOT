-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Jan 16, 2026 at 02:22 AM
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
-- Database: `group-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `ph_level` decimal(5,2) NOT NULL,
  `turbidity` decimal(6,3) NOT NULL,
  `temperature` decimal(5,2) NOT NULL,
  `water_status` varchar(100) NOT NULL,
  `recorded_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `user_id`, `ph_level`, `turbidity`, `temperature`, `water_status`, `recorded_at`) VALUES
(8, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 19:57:29'),
(9, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 19:57:34'),
(10, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 19:57:35'),
(11, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 19:57:35'),
(12, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 19:57:35'),
(13, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 19:57:35'),
(14, 10, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 20:07:16'),
(15, 10, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 20:07:29'),
(16, 10, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 20:08:03'),
(17, 12, 0.00, 0.000, 0.00, 'Water is safe for external use.', '2026-01-13 21:43:54'),
(18, 12, 15.99, 2.420, 28.60, 'Water is safe for external use.', '2026-01-14 12:29:18'),
(19, 12, 11.55, 2.340, 28.50, 'Water is safe for external use.', '2026-01-14 17:13:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(50) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, 'Chris', '$2b$10$f6ej2bQqw4FEcyacIEvZSehO28DkFU/Dnse3CfCXQgg.nmpvMCkpK', 'User'),
(2, 'Amelia', '$2b$10$QyM3a9EFyDFZXWjLap0PreX9fQ6oGe9vqnuDMKaQLNdO1KNJNRPWK', 'User'),
(3, 'Randel', '$2b$10$f2kA15XsKAXd7aZ78CH8C.Zfh86d1PK86sZaHrF.o6SpaPNK4rGDK', 'User'),
(5, 'Ron', 'ronthekupal', 'User'),
(6, 'Argie', '$2b$10$uJYiMxpu0L.ncL7iDKeWf.x74v69IwkW1LhR3jP8eEYd4pxjj.yvC', 'User'),
(7, 'Miguel', '$2b$10$qYouWH5oI5FGjmHuEs976.uiRHjM9.KQ4PkhYilLib8T/8RuGVEmS', 'User'),
(8, 'Admin', '$2b$10$6u.98XTavGwoiLVsxtoks.0W0YpMWaUv6l0wyuD1jvpISl5Sq7t3W', 'Administrator'),
(9, 'Rob', '$2b$10$OfxL8vJRO448DN8ZbQTAAutO6BsMH3W3zH0uc56bZ5Kzanr2w1a/u', 'Administrator'),
(10, 'Justin', '$2b$10$pwDTwqbRMXqv9PBP1YzJ8eqSKliHz8Zp1BZyaflg.w.QD/qSs.PQO', 'User'),
(11, 'Rj', '$2b$10$/y0R1EOAOn.180ACNg27x.OzZ0c5x2cOLkDoDBYH1jF2fwY0lAGqe', 'Administrator'),
(12, 'Christian', '$2b$10$CUZRYND9MBbGSsTuAzFJnutVm4re/irR.4l3hrxjXpuYRQ5FvIdX2', 'Administrator'),
(14, 'Johnny', '$2b$10$sGMrD2leMcd2SiR.z.qZUu1TOzP8KR3cZjc3k4r5N.7For/aC2kMu', 'user'),
(15, 'Johnathan', '$2b$10$nr0f0NkRSA61KyR9uyR/x.FgSFCAOQyHLnXy060I17HBrka4zKipm', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_history_users` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `fk_history_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
