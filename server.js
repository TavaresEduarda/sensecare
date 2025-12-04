const express = require("express"); // Framework para criar servidor e rotas
const mysql = require("mysql2"); // Biblioteca para conectar no MySQL
const path = require("path"); // Módulo nativo do Node para lidar com caminhos

const app = express(); // Cria a aplicação Express

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS da pasta public/)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco MySQL (via XAMPP)
const db = mysql.createConnection({
  host: "localhost", // Servidor do MySQL
  user: "root", // Usuário padrão do XAMPP
  password: "", // Senha (geralmente vazia no XAMPP)
  database: "sensecare", // Nome do banco que você criou
});

// ---------- ROTAS ----------


// app.post('/login', (req, res) => {
//   res.redirect('/home.html')
// })

// GET /pacientes → retorna todos os usuários do banco
app.get("/Paciente", (req, res) => {
  db.query("SELECT * FROM paciente", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

// POST /Paciente → insere um novo paciente no banco
app.post("/Paciente", (req, res) => {
  const {
    Nome,
    Nome_mae,
    Data_nasc,
    CPF,
    Genero,
    Alergias,
    Neurodiv,
    Endereco,
    Contato_emergencia,
    CorenFK,// O COREN da enfermeira que vem do front-end
    Prioridade_Atendimento,
    Condicao_Especial
  } = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO Paciente (Nome, Nome_mae, Data_nasc, CPF, Genero, Alergias, Neurodiv, Endereco, Contato_emergencia, CorenFK, Prioridade_Atendimento, Condicao_Especial) VALUES (?,?,? ?, ?, ?, ?, ?, ?, ?, ?, ?)", // Query SQL com placeholders
    [
    Nome,
    Nome_mae,
    Data_nasc,
    CPF,
    Genero,
    Alergias,
    Neurodiv,
    Endereco,
    Contato_emergencia,
    CorenFK, // O valor de CorenFK (o número)
    Prioridade_Atendimento, 
    Condicao_Especial
    ], // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
  
      res.json({ message: "Paciente adicionado com sucesso!" }); // Retorno de sucesso
    }
  );
});

// Inicia o servidor na porta 3000
app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
