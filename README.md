# 🚀 Super Easy Backoffice API

## 📜 Descrição

Este repositório contém a API principal do Super Easy Backoffice, um sistema financeiro desenvolvido com NestJS, PostgreSQL (executando em um contêiner Docker), e diversas outras tecnologias para facilitar o controle financeiro de clientes.

<br>

## 🛠️ Tecnologias Utilizadas

- **Node.js e npm:** Ambiente de execução e gerenciador de pacotes para JavaScript.
- **NestJS:** Framework para construção de aplicativos server-side eficientes e escaláveis em Node.js.
- **Docker e Docker Compose:** Para facilitar a criação e gerenciamento de ambientes isolados.
- **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional.
- **Prisma ORM:** Mapeamento de dados e interação com o banco de dados.
- **Swagger:** Ferramenta para documentação de APIs.
- **Prettier e ESLint:** Ferramentas para manter o código limpo e consistente.
- **bcrypt:** Biblioteca para hash de senhas.

<br>

## 📋 Pré-requisitos  

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js e npm:** [Download Node.js](https://nodejs.org/).
- **Docker e Docker Compose:** [Download Docker](https://www.docker.com/products/docker-desktop).
- **Swagger Stats:** [Mais informações aqui](https://github.com/slanatech/swagger-stats).
- **Express Actuator:** [Mais informações aqui](https://www.npmjs.com/package/express-actuator).
- **Prometheus e Grafana:** [Mais informações aqui](https://prometheus.io/) e [Grafana](https://grafana.com/).
- **Jest e Supertest:** [Mais informações aqui](https://jestjs.io/) e [Supertest](https://www.npmjs.com/package/supertest).
- **Prettier e ESLint:** [Mais informações aqui](https://prettier.io/) e [ESLint](https://eslint.org/).
- **bcrypt:** [Mais informações aqui](https://www.npmjs.com/package/bcrypt).

<br>

## ⚙️ Configuração do Projeto

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/EdisonMatos/NestJS-RestAPI-Financial-System-with-Postgres-on-Docker.git
    ```

2. **Instalar Dependências:**

    ```bash
    npm install
    ```

3. **Configuração do Ambiente**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   DATABASE_URL=postgresql://postgres:6sp5VzcsrGhGGdlKDIa2@containers-us-west-94.railway.app:7625/railway
   API_PORT=7625
   JWT_SECRET=L9^Bvuns@XN7wwAC6u8qbcGQ4xPc^bGV
   ```

4. **Configuração da infraestrutura**

   Use Docker Compose para subir o banco de dados PostgreSQL e outros serviços:

   ```bash
   npm run infra:up
   ```

5. **Iniciando o Prisma ORM**

   Execute o Prisma generate para gerar o código SQL:

   ```bash
   npm run gen
   ```

   Em seguida, aplique as migrações com:

   ```bash
   npx prisma db push
   ```

6. **Iniciar o Projeto**

    ```bash
    npm start
    ```

7. Acesse [http://localhost:7625](http://localhost:7625).

<br>

## 📄 Código

### Endpoints

#### Criação de Receita

Endpoint para criar uma nova receita.

```typescript
POST /income

// Payload de exemplo
{
  "customerId": "123",
  "name": "Salário",
  "description": "Recebimento mensal",
  "dueDate": "2023-11-15",
  "receiptDate": "2023-11-15",
  "price": 5000,
  "isPaid": true
}
```

#### Listagem de Receitas

Endpoint para listar todas as receitas.

```typescript
GET /income
```

#### Detalhes de uma Receita

Endpoint para obter detalhes de uma receita específica.

```typescript
GET /income/:id
```

#### Atualização de Receita

Endpoint para atualizar os detalhes de uma receita.

```typescript
PUT /income/:id

// Payload de exemplo
{
  "description": "Recebimento mensal atualizado",
  "price": 5500
}
```

#### Exclusão de Receita

Endpoint para excluir uma receita.

```typescript
DELETE /income/:id
```

#### Criação de Associação (Membership)

Endpoint para criar uma nova associação.

```typescript
POST /membership

// Payload de exemplo
{
  "price": 100,
  "name": "Associado Ouro"
}
```

#### Listagem de Associações

Endpoint para listar todas as associações.

```typescript
GET /membership
```

#### Detalhes de uma Associação

Endpoint para obter detalhes de uma associação específica.

```typescript
GET /membership/:id
```

#### Atualização de Associação

Endpoint para atualizar os detalhes de uma associação.

```typescript
PUT /membership/:id

// Payload de exemplo
{
  "name": "Associado Platinum"
}
```

#### Exclusão de Associação

Endpoint para excluir uma associação.

```typescript
DELETE /membership/:id
```

#### Criação de Assinatura (Subscription)

Endpoint para criar uma nova assinatura.

```typescript
POST /subscription

// Payload de exemplo
{
  "membershipId": "456",
  "customerId": "123",
  "isPaid": true
}
```

#### Listagem de Assinaturas

Endpoint para listar todas as assinaturas.

```typescript
GET /subscription
```

#### Detalhes de uma Assinatura

Endpoint para obter detalhes de uma assinatura específica.

```typescript
GET /subscription/:id
```

#### Atualização de Assinatura

Endpoint para atualizar os detalhes de uma assinatura.

```typescript
PUT /subscription/:id

// Payload de exemplo
{
  "isPaid": false
}
```

#### Exclusão de Assinatura

Endpoint para excluir uma assinatura.

```typescript
DELETE /subscription/:id
```

#### Criação de Cliente (Customer)

Endpoint para criar um novo cliente.

```typescript
POST /

customer

// Payload de exemplo
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "phone": "1234567890",
  "birthdate": "1990-01-01"
}
```

#### Listagem de Clientes

Endpoint para listar todos os clientes.

```typescript
GET /customer
```

#### Detalhes de um Cliente

Endpoint para obter detalhes de um cliente específico.

```typescript
GET /customer/:id
```

#### Atualização de Cliente

Endpoint para atualizar os detalhes de um cliente.

```typescript
PUT /customer/:id

// Payload de exemplo
{
  "phone": "9876543210"
}
```

#### Exclusão de Cliente

Endpoint para excluir um cliente.

```typescript
DELETE /customer/:id
```

## 👨‍💻 Autor

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras.

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.
