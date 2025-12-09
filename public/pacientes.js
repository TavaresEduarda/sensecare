
// Função para criar o HTML do Card e adicioná-lo ao container
function criarCard(titulo, texto) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-sm-6 col-md-4 mb-3'; 

    // 2. Monta a estrutura HTML do Card
    colDiv.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="card-text">${texto}</p>
                <a href="#" class="btn btn-sm btn-primary">Detalhes</a>
            </div>
        </div>
    `;

    // 3. Adiciona o novo Card ao container na página
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.appendChild(colDiv);
}


async function carregarPacientes() {
  try {
    const resposta = await fetch("/Paciente");
    const pacientes = await resposta.json();

     const cardsContainer = document.getElementById('cardsContainer');
     cardsContainer.innerHTML = ''

  
    pacientes.forEach((p) => {
      const titulo = p.Nome;

      const texto = `
        <strong>Nome da Mãe:</strong> ${p.Nome_mae}<br>
        <strong>Data de Nascimento:</strong> ${new Date(p.Data_nasc).toLocaleDateString()}<br>
        <strong>CPF:</strong> ${p.CPF}<br>
        <strong>Gênero:</strong> ${p.Genero}<br>
        <strong>Alergias:</strong> ${p.Alergias}<br>
        <strong>Neurodivergência:</strong> ${p.Neurodiv}<br>
        <strong>Endereço:</strong> ${p.Endereco}<br>
        <strong>Contato de Emergência:</strong> ${p.Contato_emergencia}<br>
        <strong>Prioridade de Atendimento:</strong> ${p.Prioridade_Atendimento}<br>
        <strong>Condição Especial:</strong> ${p.Condicao_Especial}
      `;
      
      criarCard(titulo, texto);
    });

  } catch (error) {
    console.error("Erro ao carregar pacientes:", error);
    cardsContainer.innerHTML = "<p>Não foi possível carregar os dados.</p>";
  }
}

// Chama a função ao carregar a página
window.addEventListener("DOMContentLoaded", carregarPacientes);

