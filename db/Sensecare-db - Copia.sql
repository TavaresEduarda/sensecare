CREATE DATABASE Sensecare;

use Sensecare;

CREATE TABLE Hospital(
	Nome varchar(100) not null,
    CNPJ char(14) not null primary key,
    Endereço varchar(150) not null, 
    Capacidade_leito int not null
);

CREATE TABLE Paciente(
	Nome varchar(70),
    Nome_mae varchar(70),
    Data_nasc date not null,
    CPF char(11) not null primary key,
    Genero varchar(20) check(Genero in('Masculino', 'Feminino', 'Outro')),
    Alergias varchar(70),
    Neurodiv varchar(70),
    Endereco varchar(100),
    Contato_emergencia char(11),
    CNPJ_Hospital char(14),
	CorenFK char(7),
	foreign key(CNPJ_Hospital) references Hospital(CNPJ),
    foreign key(Corenfk) references Enfermeiros(Coren)
);

DESCRIBE Paciente;
-- Use este comando SOMENTE se você confirmar que a coluna 'Prioridade' é a duplicada
ALTER TABLE Paciente DROP COLUMN Prioridade;

ALTER TABLE Paciente
ADD COLUMN Prioridade_Atendimento VARCHAR(5) CHECK (Prioridade_Atendimento IN ('Baixa', 'Media', 'Alta')) NULL;

ALTER TABLE Paciente 
ADD COLUMN Prioridade_Atendimento VARCHAR(5) NULL 
CHECK (Prioridade_Atendimento IN ('Alta', 'Media', 'Baixa'));

ALTER TABLE Paciente 
ADD COLUMN Condicao_Especial VARCHAR(20) NULL 
CHECK (Condicao_Especial IN ('+60 anos', 'Gestante', 'Neurodivergente', 'Nenhuma'));

ALTER TABLE Paciente
ADD COLUMN Doencas_Cronicas VARCHAR(100),
ADD COLUMN Historico_Familiar VARCHAR(100);

ALTER TABLE Paciente
DROP FOREIGN KEY CNPJ_Hospital;

ALTER TABLE paciente
DROP INDEX CNPJ_Hospital;

CREATE TABLE Enfermeiros(
	Nome varchar(70) not null,
    CPF char(11) not null,
    Coren char(7) not null primary key,
    Telefone char(11) not null,
    Especializacao varchar(70),
    Turno varchar(20) check(Turno in('Manhã', 'Tarde', 'Noite', 'Integral')),
    data_admissao date,
    CNPJ_Hospital char(14),
    foreign key(CNPJ_Hospital) references Hospital(CNPJ)
);


CREATE TABLE Clientes(
	Nome varchar(100) not null,
    CPF char(11) not null primary key,
    CNPJ char(14),
    Tipo_cliente varchar(20) check(Tipo_cliente in('Pessoa Física', 'Pessoa Jurídica')),
    Telefone char(11) not null,
    Endereco varchar(150) not null
);


CREATE TABLE Pulseira(
	CNPJ_Hospital char(14),
	CorenFK char(7),
    CPFpaciente char (11),
	foreign key(CNPJ_Hospital) references Hospital(CNPJ),
    foreign key(Corenfk) references Enfermeiros(Coren),
    foreign key(CPFpaciente) references Paciente(CPF)
);

select * FROM Hospital;
select * FROM Enfermeiros;
select * FROM Paciente;
select * FROM Clientes;
select * FROM Pulseira;

ALTER TABLE Paciente
MODIFY COLUMN CNPJ_Hospital VARCHAR(14) NULL;


INSERT INTO Hospital (CNPJ, Nome, Endereço, Capacidade_leito)
VALUES
('12345678000199', 'Hospital São Lucas', 'Rua das Flores, 120 - Centro', 150),
('98765432000155', 'Hospital Vida Plena', 'Av. Brasil, 450 - Jardim América', 200),
('11223344000188', 'Clínica Bem Cuidar', 'Rua João Silva, 75 - Vila Nova', 80);

INSERT INTO Enfermeiros (Nome, CPF, Coren, Telefone, Especializacao, Turno, data_admissao, CNPJ_Hospital)
VALUES
('Ana Paula Souza', '12345678901', 'SP12345', '11987654321', 'UTI Geral', 'Manhã', '2022-05-10', '12345678000199'),
('Carlos Mendes', '23456789012', 'SP23456', '11999887766', 'Pediatria', 'Tarde', '2023-03-15', '98765432000155'),
('Juliana Rocha', '34567890123', 'SP34567', '11988776655', 'Emergência', 'Noite', '2021-09-01', '12345678000199');

INSERT INTO Paciente (Nome, Nome_mae, Data_nasc, CPF, Genero, Alergias, Neurodiv, Endereco, Contato_emergencia, CNPJ_Hospital, CorenFK)
VALUES
('Lucas Oliveira', 'Maria Oliveira', '2010-06-15', '11122233344', 'Masculino', 'Amendoim', 'TDAH', 'Rua A, 123', '11999999999', '12345678000199', 'SP12345'),
('Fernanda Lima', 'Claudia Lima', '2005-10-03', '55566677788', 'Feminino', 'Nenhuma', 'Autismo leve', 'Rua B, 45', '11888888888', '98765432000155', 'SP23456'),
('João Pedro Santos', 'Carla Santos', '1998-12-21', '99988877766', 'Masculino', 'Lactose', 'Nenhuma', 'Av. Central, 500', '11777777777', '12345678000199', 'SP34567');

INSERT INTO Clientes (Nome, CPF, CNPJ, Tipo_cliente, Telefone, Endereco)
VALUES
('Clínica Bem Cuidar', '00000000000', '11222333000100', 'Pessoa Jurídica', '51999999999', 'Rua das Acácias, 80'),
('Maria Fernandes', '44455566677', NULL, 'Pessoa Física', '51988887777', 'Av. Bento Gonçalves, 1020'),
('Laboratório Vida', '00000000001', '99887766000111', 'Pessoa Jurídica', '51977776666', 'Rua Silva Jardim, 300');

INSERT INTO Pulseira (CNPJ_Hospital, CorenFK, CPFpaciente, Id_pulseira)
VALUES
('12345678000196', 'SP12346', '11122233345'),
('12345678000199', 'SP23456', '55566677788'),
('98765432000155', 'SP34567', '99988877766');

insert into Pulseira () values ('0002');


select * from Enfermeiros  where year (data_admissao) = 2021;

select * from Enfermeiros where Especializacao like 'Pediatria%';

select * from Clientes where Tipo_cliente like 'Pessoa Jurídica%';

