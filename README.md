# Seus-Medicamentos

## Visão Geral

O projeto **Seus-Medicamentos** foi criado com a finalidade de ajudar as pessoas a conhecerem a melhor forma de tomar seus medicamentos e se informarem sobre possíveis interações medicamentosas entre múltiplos medicamentos. 

O projeto é dividido em duas fases:
1. **Primeira Fase**: Busca por medicamento ou princípio ativo, retornando informações detalhadas sobre eles.
2. **Segunda Fase**: Busca por interações medicamentosas entre dois ou mais medicamentos.

## Estrutura do Projeto

### Banco de Dados
O banco de dados utilizado é o MySQL.

### Backend é dividido em 2 partes: 

##### Backend-TS
Essa parte do backend é desenvolvido com:
- Docker
- Node.js
- Express
- Sequelize
- TypeScript
- ESLint (configuração de backend da Trybe)
- Testes unitários e de integração (usando Mocha, Chai, Sinon e Supertest)

##### Rotas Disponíveis
- `/medicine`: Adiciona um novo medicamentos.
- `/medicine/searchName`: Permite buscar medicamentos pelo nome.
- `/medicine/searchActivePrinciple`: Permite buscar medicamentos pelo princípio ativo.

#### Backend-PY
Essa parte do backend é desenvolvida com: 
- Docker 
- Python 
- BeautifulSoup 

## Configuração e Execução

### Pré-requisitos
- Docker e Docker Compose instalados em sua máquina.

### Inicializando o Docker
1. Clone este repositório e entre na pasta do projeto:
   ```sh
   git clone <URL-do-repositório>
   cd seus-medicamentos

2. Usar o comando: 
    ```sh
   docker compose up -d
   
3. Serão inicializados dois containers: 
    seus-medicamentos-backend
    db

## Testes

1. Entre na pasta Backend do projeto e utilize o comando: 
     ```sh
   cd Backend
   npm test

## 




