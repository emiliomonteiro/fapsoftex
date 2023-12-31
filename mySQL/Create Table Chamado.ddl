CREATE TABLE `chamado` (
  `idchamado` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `local` varchar(45) NOT NULL,
  `data` date NOT NULL,
  `dataEncerra` date NOT NULL,
  `status` varchar(45) NOT NULL,
  `descricao` varchar(45) NOT NULL,
  `fk_funcionario` int NOT NULL,
  PRIMARY KEY (`idchamado`),
  UNIQUE KEY `idchamado_UNIQUE` (`idchamado`),
  KEY `fk_funcionario_idx` (`fk_funcionario`),
  CONSTRAINT `fk_funcionario` FOREIGN KEY (`fk_funcionario`) REFERENCES `funcionario` (`idFuncionario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
