# 🚀 Super Easy Backoffice API - Sistema de Gestão Financeira

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
- **JWT Token:** Json Web Tokens para autenticações.

<br>

## 📋 Pré-requisitos  

- **Node.js e npm:** Baixe em [https://nodejs.org/](https://nodejs.org/).
- **Git:** Baixe em [https://git-scm.com/](https://git-scm.com/).
- **Docker Desktop:** Necessário para o banco de dados PostgreSQL. Baixe em [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
- **Ferramentas de Teste de API:** <br>
Postman [https://www.postman.com/downloads/](https://www.postman.com/downloads/)<br>
Insomnia [https://insomnia.rest/download/](https://insomnia.rest/download/)<br>
Ou Thunder Client (extensão no Visual Studio Code).


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

## 📘 Documentação com Swagger

O Swagger UI é uma interface interativa que permite explorar e testar os endpoints da API de forma visual. Para acessar o Swagger UI e explorar os endpoints deste projeto, após ter iniciado a aplicação, acesse: [localhost:3000/swagger](localhost:3000/swagger).

<img src="https://static1.smartbear.co/swagger/media/images/tools/opensource/swagger_ui.png" alt="drawing" width="500"/></img>

<br>

## 🚀 Fazendo Requisições para a API

Para interagir com os endpoints da API, você pode usar ferramentas como Postman, Insomnia ou Thunder Client no Visual Studio Code. Acesse a documentação Swagger em [http://localhost:3000/swagger](http://localhost:3000/swagger) para obter detalhes sobre os endpoints e parâmetros necessários.


<br>

## 📄 **Autenticação - Token JWT**

Este serviço lida com a criação e validação de tokens JWT (JSON Web Tokens) para autenticação.

### **Métodos Principais:**

- `createToken(customer: Customer): { accessToken: string }`: Cria um token JWT com base nas informações do cliente.

- `checkToken(token: string)`: Verifica a validade de um token JWT.

- `isTokenValid(token: string): boolean`: Verifica se um token é válido.

- `login(email: string, password: string): { accessToken: string }`: Autentica um cliente com base no e-mail e senha fornecidos.

- `forget(email: string): boolean`: Envia um e-mail de recuperação de senha para o cliente.

- `reset(password: string, token: string): { accessToken: string }`: Reinicia a senha do cliente com base em um token válido.

- `register(data: AuthRegisterDTO): { accessToken: string }`: Registra um novo cliente e cria um token para autenticação.

### **AuthController (Controlador de Autenticação)**

Este controlador gerencia as rotas relacionadas à autenticação.

### **Principais Rotas:**

- **`POST /auth/login`**: Rota para autenticar um cliente com e-mail e senha.

- **`POST /auth/register`**: Rota para registrar um novo cliente.

- **`POST /auth/forget`**: Rota para solicitar recuperação de senha enviando um e-mail ao cliente.

- **`POST /auth/reset`**: Rota para redefinir a senha do cliente com base em um token válido.

- **`POST /auth/myself`**: Rota protegida para verificar os direitos de acesso do cliente (necessita de autenticação).

## **AuthGuard (Guarda de Autenticação)**

Este guarda (guard) protege rotas que exigem autenticação, verificando a validade e decodificando o token JWT presente no cabeçalho da solicitação.

### **Método Principal:**

- `canActivate(context: ExecutionContext): Promise<boolean>`: Verifica se o token JWT é válido e decodifica as informações do cliente, tornando-as disponíveis no objeto de solicitação (`request`).

<br>

## 📄 Endpoints

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

## 🧑‍💻 Autores

Este projeto foi desenvolvido por Edison Matos.

![Edison Matos](https://avatars.githubusercontent.com/u/17342047?s=200)

Edison Matos é um entusiasta da tecnologia, desenvolvedor backend de software e apaixonado por criar soluções inovadoras.<br>
Saiba mais sobre no [GitHub](https://github.com/EdisonMatos) para descobrir mais projetos e colaborações.

<br>

## 🤝 Contribuição

Se deseja contribuir para o desenvolvimento deste projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para suas alterações: `git checkout -b feature/nome-da-sua-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Adiciona nova feature'`.
4. Push para a branch: `git push origin feature/nome-da-sua-feature`.
5. Abra um pull request para revisão.


<br>

## 📄 Licença

Este projeto é licenciado sob a Licença MIT.

