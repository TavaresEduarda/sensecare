## 🏥 SenseCare - Sistema de Gerenciamento de Cuidados

[cite_start]Este documento descreve os requisitos e as prioridades de desenvolvimento para o projeto **SenseCare**[cite: 1], um sistema focado em facilitar e otimizar o gerenciamento e monitoramento de pacientes e tarefas por enfermeiros. [cite_start]O projeto visa implementar telas com uma **UX simples, priorizando velocidade e clareza**[cite: 2].

---

## ✨ Funcionalidades Principais do Sistema

[cite_start]O sistema SenseCare deve permitir que o sistema[cite: 3]:

* [cite_start]**Mostre alertas de pacientes**[cite: 4].
* [cite_start]**Gerencie horários de medicação**[cite: 5].
* [cite_start]**Envie notificações para a pulseira**[cite: 6].
* [cite_start]**Cadastre e edite pacientes**[cite: 7].
* [cite_start]**Monitore status dos enfermeiros**[cite: 8].

---

## 💻 Requisitos de Desenvolvimento de Telas

[cite_start]As telas devem ser funcionais [cite: 9] e seguir as seguintes especificações:

* [cite_start]Utilização de **HTML, CSS e JavaScript**[cite: 10].
* [cite_start]Garantia de **Responsividade** (adaptação a diferentes tamanhos de tela)[cite: 11].

---

## 📝 Telas Necessárias e Conteúdo

[cite_start]As seguintes telas são necessárias para o sistema[cite: 15]:

### [cite_start]1. Tela de Login [cite: 16]
* [cite_start]Campos: **e-mail e senha**[cite: 17].
* [cite_start]Ações: **Botão entrar** [cite: 18] [cite_start]e **recuperar senha**[cite: 19].

### [cite_start]2. Tela do Enfermeiro [cite: 20]
* [cite_start]**Lista de tarefa do dia**[cite: 21].
* [cite_start]**Medicações com horários**[cite: 22].
* [cite_start]**Notificações pendentes**[cite: 23].
* [cite_start]**Alertas**[cite: 24].

### [cite_start]3. Tela Dashboard [cite: 25]
* Informações de alto nível:
    * [cite_start]**Quantidade de pacientes**[cite: 26].
    * [cite_start]**Alertas recentes**[cite: 27].
    * [cite_start]**Horários próximos de medição**[cite: 28].

### [cite_start]4. Tela de Pacientes [cite: 29]
* [cite_start]**Listagem de pacientes**[cite: 30].
* [cite_start]**Botão adicionar pacientes**[cite: 31].
* [cite_start]**Dados do Paciente** (na listagem ou detalhe): **nome, leito, condições, remédios, decúbito, Geolocalização, riscos** (sinalizado com ícones)[cite: 32].

### [cite_start]5. Telas de Alertas [cite: 33]
* [cite_start]Exibição de **Emergências acionadas pela pulseira**[cite: 34, 35].

### [cite_start]6. Configurações [cite: 36]
* [cite_start]**Registrar nova pulseira**[cite: 37].
* [cite_start]**Mudar informações do enfermeiro/paciente**[cite: 38].

---

## 🎯 Prioridades de Desenvolvimento

[cite_start]O desenvolvimento será dividido em três prioridades: **Alta Prioridade (MVP)** [cite: 39][cite_start], **Média Prioridade** [cite: 51] [cite_start]e **Baixa Prioridade**[cite: 64].

### [cite_start]1. Alta Prioridade (MVP) [cite: 39]
Requisitos essenciais para a **Entrega Mínima Viável (MVP)**:

1.  [cite_start]**Tela de Login**[cite: 40].
2.  [cite_start]**Autenticação de usuário** (enfermeiro ou administrador)[cite: 41].
3.  [cite_start]**Dashboard inicial com informações básicas**[cite: 42]:
    * [cite_start]Alertas recentes[cite: 43].
    * [cite_start]Tarefas/medicações próximas[cite: 44].
4.  [cite_start]**Listagem de pacientes**[cite: 45].
5.  [cite_start]**Cadastro de pacientes**[cite: 46].
6.  [cite_start]**Listagem de tarefas/medicações**[cite: 47].
7.  [cite_start]**Cadastro de tarefas/medicações**[cite: 48].
8.  [cite_start]**Visualização de alertas gerados no sistema**[cite: 49].
9.  [cite_start]**Navegação entre as telas**[cite: 50].

### [cite_start]2. Média Prioridade [cite: 51]
[cite_start]Funcionalidades que deixam o sistema mais completo[cite: 52]:

1.  [cite_start]**Editar dados dos pacientes**[cite: 53].
2.  [cite_start]**Excluir pacientes**[cite: 54].
3.  [cite_start]**Editar tarefas/medicações**[cite: 55].
4.  [cite_start]**Excluir tarefas/medicações**[cite: 56].
5.  [cite_start]**Painel detalhado do paciente**[cite: 57]:
    * [cite_start]Histórico[cite: 58].
    * [cite_start]Observações[cite: 59].
    * [cite_start]Status[cite: 60].
6.  [cite_start]**Sistema de filtros e busca** (pacientes, tarefas, alertas)[cite: 61].
7.  [cite_start]**Tela de configurações do usuário**[cite: 62].
8.  [cite_start]**Histórico de alertas** (log simples)[cite: 63].

### [cite_start]3. Baixa Prioridade [cite: 64]
[cite_start]Requisitos que agregam valor, mas não são necessários para entrega inicial[cite: 65]:

1.  [cite_start]**Dashboard avançado com gráficos**[cite: 66].
2.  [cite_start]**Tema escuro/claro**[cite: 67].
3.  [cite_start]**Exportação de relatórios** (PDF, Excel)[cite: 68].
4.  [cite_start]**Notificações visuais animadas ou som personalizável**[cite: 69].
5.  [cite_start]**Personalização do layout** (cores, tamanho do texto)[cite: 70].
6.  [cite_start]**Histórico completo de ações no sistema** (log detalhado)[cite: 71].

---

## [cite_start]📚 Documentação Necessária [cite: 12]

A documentação deverá incluir:

* [cite_start]**Funcionalidades das telas**[cite: 13].
* [cite_start]**Objetivo da pulseira**[cite: 14].
