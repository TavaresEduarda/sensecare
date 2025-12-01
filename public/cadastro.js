const form = document.getElementById("form");
const lista = document.getElementById("lista");

// Função para carregar pacientes
async function carregarPacientes() {
  const resposta = await fetch("/Paciente");
  const pacientes = await resposta.json();

  lista.innerHTML = "";
  pacientes.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.Nome} - ${p.CPF} - ${p.Genero} - ${p.Contato_emergencia}`;
    lista.appendChild(li);
  });
}

// Chama ao carregar a página
window.addEventListener("DOMContentLoaded", carregarPacientes);

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Pegue os valores dos campos do formulário
    const Nome = document.getElementById("nome").value;
    const Nome_mae = document.getElementById("nome_mae").value;
    const Data_nasc = document.getElementById("data").value;
    const CPF = document.getElementById("cpfCA").value;
    const Genero = document.querySelector('input[name="genero"]:checked')?.value;
    const Alergias = document.getElementById("alergias").value;
    const Neurodiv = document.getElementById("doenca").value || "";
    const Endereco = document.getElementById("historico").value || "";
    const Contato_emergencia = document.getElementById("telefone").value;
    const CNPJ_Hospital = ""; // Preencha conforme necessário
    const CorenFK = document.getElementById("enfermeira").value;


    // Envia o cadastro
    await fetch("/Paciente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            Nome,
            Nome_mae,
            Data_nasc,
            CPF,
            Genero,
            Alergias,
            Neurodiv,
            Endereco,
            Contato_emergencia,
            CNPJ_Hospital,
            CorenFK
        }),
    });

    form.reset();
    carregarPacientes(); // Atualiza lista logo abaixo
});


// nao consigo fazer esse lixo funcionar *pedir ajuda do sor na proxima aula :)*