---

## 🏥 SenseCare - Sistema de Gerenciamento de Cuidados

Este documento descreve os requisitos e as prioridades de desenvolvimento para o projeto **SenseCare**, um sistema focado em facilitar e otimizar o gerenciamento e monitoramento de pacientes e tarefas por enfermeiros. O projeto visa implementar telas com uma **UX simples, priorizando velocidade e clareza**.

---

## ✨ Funcionalidades Principais do Sistema

O sistema SenseCare deve permitir que o sistema:

* **Mostre alertas de pacientes**.
* **Gerencie horários de medicação**.
* **Envie notificações para a pulseira**.
* **Cadastre e edite pacientes**.
* **Monitore status dos enfermeiros**.

---

## 💻 Requisitos de Desenvolvimento de Telas

As telas devem ser funcionais e seguir as seguintes especificações:

* Utilização de **HTML, CSS e JavaScript**.
* Garantia de **Responsividade** (adaptação a diferentes tamanhos de tela).

---

## 📝 Telas Necessárias e Conteúdo

As seguintes telas são necessárias para o sistema:

### 1. Tela de Login
* Campos: **e-mail e senha**.
* Ações: **Botão entrar** e **recuperar senha**.

### 2. Tela do Enfermeiro
* **Lista de tarefa do dia**.
* **Medicações com horários**.
* **Notificações pendentes**.
* **Alertas**.

### 3. Tela Dashboard
* Informações de alto nível:
    * **Quantidade de pacientes**.
    * **Alertas recentes**.
    * **Horários próximos de medição**.

### 4. Tela de Pacientes
* **Listagem de pacientes**.
* **Botão adicionar pacientes**.
* **Dados do Paciente** (na listagem ou detalhe): **nome, leito, condições, remédios, decúbito, Geolocalização, riscos** (sinalizado com ícones).

### 5. Telas de Alertas
* Exibição de **Emergências acionadas pela pulseira**.

### 6. Configurações
* **Registrar nova pulseira**.
* **Mudar informações do enfermeiro/paciente**.

---

## 🎯 Prioridades de Desenvolvimento

O desenvolvimento será dividido em três prioridades: **Alta Prioridade (MVP)**, **Média Prioridade** e **Baixa Prioridade**.

### 1. Alta Prioridade (MVP)
Requisitos essenciais para a **Entrega Mínima Viável (MVP)**:

1.  **Tela de Login**.
2.  **Autenticação de usuário** (enfermeiro ou administrador).
3.  **Dashboard inicial com informações básicas**:
    * Alertas recentes.
    * Tarefas/medicações próximas.
4.  **Listagem de pacientes**.
5.  **Cadastro de pacientes**.
6.  **Listagem de tarefas/medicações**.
7.  **Cadastro de tarefas/medicações**.
8.  **Visualização de alertas gerados no sistema**.
9.  **Navegação entre as telas**.

### 2. Média Prioridade
Funcionalidades que deixam o sistema mais completo:

1.  **Editar dados dos pacientes**.
2.  **Excluir pacientes**.
3.  **Editar tarefas/medicações**.
4.  **Excluir tarefas/medicações**.
5.  **Painel detalhado do paciente**:
    * Histórico.
    * Observações.
    * Status.
6.  **Sistema de filtros e busca** (pacientes, tarefas, alertas).
7.  **Tela de configurações do usuário**.
8.  **Histórico de alertas** (log simples).

### 3. Baixa Prioridade
Requisitos que agregam valor, mas não são necessários para entrega inicial:

1.  **Dashboard avançado com gráficos**.
2.  **Tema escuro/claro**.
3.  **Exportação de relatórios** (PDF, Excel).
4.  **Notificações visuais animadas ou som personalizável**.
5.  **Personalização do layout** (cores, tamanho do texto).
6.  **Histórico completo de ações no sistema** (log detalhado).

---

## 📚 Documentação Necessária

A documentação deverá incluir:

* **Funcionalidades das telas**.
* **Objetivo da pulseira**.

---



Este documento fornece as instruções necessárias para configurar e executar o projeto **SenseCare** localmente.

---

## 💻 Requisitos de Sistema e Instalação

Para rodar o projeto SenseCare em seu ambiente local, você precisará ter os seguintes softwares instalados:

* **Node.js**: Versão **14.x ou superior**.
* **XAMPP (ou similar)**: Para gerenciar o servidor **Apache** e o banco de dados **MySQL**.
* **Git**: Para clonar o repositório do projeto.

---

## 1. Preparação do Ambiente e Clonagem

### 1.1. Configuração do Banco de Dados (MySQL)

Esta etapa envolve a criação do banco de dados que será utilizado pelo SenseCare.

1.  **Inicie o XAMPP**:
    Abra o painel de controle do XAMPP e **inicie os serviços Apache e MySQL**.
2.  **Crie o Banco de Dados**

### 1.2. Clonagem do Projeto

Abra seu **terminal** ou **prompt de comando** e execute os comandos abaixo para clonar o repositório e navegar até a pasta do projeto:

```bash
git clone [https://github.com/SEU_USUARIO/sensecare.git](https://github.com/SEU_USUARIO/sensecare.git)
cd sensecare


2.1. Instalação das Dependências
Na pasta raiz do projeto (sensecare), instale as bibliotecas necessárias para o Node.js/Express:

Bash

npm init -y
npm install express mysql2

2.2. Rodar o Servidor Express
Com todas as dependências instaladas, inicie o backend do servidor Node.js/Express a partir do terminal (ainda dentro da pasta do projeto):

Bash

node server.js
O SenseCare estará agora acessível em seu navegador no endereço:

👉 http://localhost:3000 (assumindo a porta padrão).