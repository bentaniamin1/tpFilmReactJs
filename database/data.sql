-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : mer. 18 mai 2022 à 17:25
-- Version du serveur : 10.7.3-MariaDB-1:10.7.3+maria~focal
-- Version de PHP : 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `data`
--

-- --------------------------------------------------------

--
-- Structure de la table `Comment`
--

CREATE TABLE `Comment` (
  `authorId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `content` text NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Comment`
--

INSERT INTO `Comment` (`authorId`, `movieId`, `content`, `id`) VALUES
(2, 12, 'dddddddddddddddd', 1),
(2, 12, 'rrrrrrrrrrrrrrrrrr', 2),
(12, 1, 'fdddd', 3),
(2, 12, 'kkkkkkkkkk', 4),
(2, 12, 'ddddddddddddddddd', 5),
(2, 12, 'ss', 6),
(2, 12, 'kkkkkkkkk', 7),
(2, 12, 'xxxxxxxxxxxx', 8),
(2, 12, 'wwwwwwwwwww', 9),
(2, 12, 'cccccccccccccc', 10),
(2, 12, 'aqw', 11),
(2, 12, 'b', 12);

-- --------------------------------------------------------

--
-- Structure de la table `Movie`
--

CREATE TABLE `Movie` (
  `id` int(11) NOT NULL,
  `authorId` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Movie`
--

INSERT INTO `Movie` (`id`, `authorId`, `date`, `title`, `content`) VALUES
(12, 2, '2022-05-18 12:09:31', 'dfgedg', 'gdgerhrh'),
(13, 2, '2022-05-18 12:09:37', 'rgtetg', 'get'),
(14, 2, '2022-05-18 12:57:39', 'fze', 'erfgeg'),
(15, 2, '2022-05-18 12:59:23', 'rhtrthr', '\'\"htyryh'),
(16, 2, '2022-05-18 12:59:34', 't(\'\"(y\'y(', '\'y\'y\'y(\'y(yy');

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `User`
--

INSERT INTO `User` (`id`, `username`, `password`) VALUES
(1, 'FrancisHuster', '$2y$10$kgElSKkY9xgITrnfaAZLAee.5/JgHL9aRM3iZg27ShpOBsRA.h.Z.'),
(2, 'JohnBob', '$2y$10$4/1Iqkb/mbMB4wr9YOnkfegeRKszIPiSzVJ2Ik4G5kDPyjgsgQrI2');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Comment`
--
ALTER TABLE `Comment`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Movie`
--
ALTER TABLE `Movie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Comment`
--
ALTER TABLE `Comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `Movie`
--
ALTER TABLE `Movie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
