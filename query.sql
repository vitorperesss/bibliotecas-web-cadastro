	
CREATE DATABASE biblioteca;

CREATE TABLE cadastro_cad(
cadastro_ID varchar(20) AUTO_INCREMENT,
cadastro_email varchar(30) NOT NULL,
cadastro_csenha varchar(50) NOT NULL,
cadastro_nome varchar(100) NOT NULL,
cadastro_sobrenome varchar(100) NOT NULL,
cadastro_cpf varchar(20) NOT NULL,
cadastro_data_nascimento date NOT NULL,
cadastro_telefone varchar(20) NOT NULL,
PRIMARY KEY (cadastro_ID)
);
