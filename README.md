# Seus-Medicamentos

## Visão Geral

O projeto **Seus-Medicamentos** foi criado para ajudar as pessoas a entenderem a melhor forma de tomar seus medicamentos e a conhecerem possíveis interações medicamentosas entre múltiplos medicamentos. 

O projeto é dividido em duas fases:
1. **Primeira Fase**: Busca por medicamento ou princípio ativo, retornando informações detalhadas sobre eles.
2. **Segunda Fase**: Busca por interações medicamentosas entre dois ou mais medicamentos.

## Estrutura do Projeto

### Banco de Dados
O banco de dados utilizado é o MySQL.

### Backend
O backend é desenvolvido com as seguintes tecnologias e ferramentas:
- Docker
- Node.js
- Express
- Sequelize
- TypeScript
- ESLint (configuração de backend da Trybe)
- Testes unitários e de integração (usando Chai)

#### Rotas Disponíveis
- `/medicamentos`: Adiciona um novo medicamento.
- `/medicamentos/searchNome`: Permite buscar medicamentos pelo nome.
- `/medicamentos/searchPrincipioAtivo`: Permite buscar medicamentos pelo princípio ativo.

## Configuração e Execução

### Pré-requisitos
- Docker e Docker Compose instalados em sua máquina.

### Inicializando o Docker
1. Clone este repositório e entre na pasta do projeto:
   ```sh
   git clone <URL-do-repositório>
   cd seus-medicamentos
2. Usar o comando docker compose up -d. 
   Dois containers serão inicializados: seus-medicamentos-backend e db

### Testes
Para rodar os testes, utilize o comando: npm test



