// Simulação dos dados que viriam do seu back-end (Node.js)
const listaEnfermeiros = [
    { coren: '123456', nome: 'Márcia Silva' },
    { coren: '654321', nome: 'João Santos' },
    { coren: '987654', nome: 'Ana Carolina' }
];

const selectElement = document.getElementById('corenEnfermeira');

// Função para preencher o <select>
function preencherEnfermeiros() {
    listaEnfermeiros.forEach(enfermeiro => {
        const option = document.createElement('option');
        // O valor enviado é o COREN
        option.value = enfermeiro.coren; 
        // O texto visível é o Nome
        option.textContent = enfermeiro.nome; 
        selectElement.appendChild(option);
    });
}

preencherEnfermeiros();



const form = document.querySelector("form");
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
    const CorenFK = document.getElementById("corenEnfermeira").value;
    const Prioridade_Atendimento = document.querySelector('input[name="prioridade_atendimento"]:checked')?.value; 
    const Condicao_Especial = document.querySelector('input[name="condicao_especial"]:checked')?.value;


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
            CorenFK,
            Prioridade_Atendimento, 
            Condicao_Especial
        }),
    });

    form.reset();
    carregarPacientes(); // Atualiza lista logo abaixo

    
});


