// ===============================
// Preenche o select de enfermeiras
// ===============================

const listaEnfermeiros = [
    { coren: 'SP12345', nome: 'Ana Paula Souza' },
    { coren: 'SP23456', nome: 'Carlos Mendes' },
    { coren: 'SP34567', nome: 'Juliana Rocha' }
];

const selectElement = document.getElementById('corenEnfermeira');

function preencherEnfermeiros() {
    listaEnfermeiros.forEach(enfermeiro => {
        const option = document.createElement('option');
        option.value = enfermeiro.coren;
        option.textContent = enfermeiro.nome;
        selectElement.appendChild(option);
    });
}

preencherEnfermeiros();


// ===============================
// SUBMIT DO FORMULÁRIO
// ===============================

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Pega os valores
    const Nome = document.getElementById("nome").value;
    const Nome_mae = document.getElementById("nome_mae").value;
    const Data_nasc = document.getElementById("data").value;
    const CPF = document.getElementById("cpfCA").value;
    const Genero = document.querySelector('input[name="genero"]:checked')?.value;
    const Alergias = document.getElementById("alergias").value;
    const Neurodiv = document.getElementById("doenca").value;
    const Endereco = document.getElementById("historico").value;
    const Contato_emergencia = document.getElementById("telefone").value;
    const CorenFK = document.getElementById("corenEnfermeira").value;

    // CORRIGIDO: nomes exatos dos campos no HTML
    const Prioridade_Atendimento = document.querySelector('input[name="Prioridade_Atendimento"]:checked')?.value;
    const Condicao_Especial = document.querySelector('input[name="Condicao_Especial"]:checked')?.value;

    // Envia o POST
    const response = await fetch("/Paciente", {
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

    // Resposta do servidor
    if (response.ok) {
        alert("Paciente cadastrado com sucesso!");
        form.reset(); // limpa o form
    } else {
        alert("Erro ao cadastrar paciente.");
    }
});
