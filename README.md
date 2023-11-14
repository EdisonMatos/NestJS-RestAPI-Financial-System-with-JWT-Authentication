## Instalation proccess

> git init 

> git clone https://github.com/Super-Easy-Softwares/backoffice.git

> cd backoffice

> git checkout >> branch alvo

> yarn install

## Criar env:

 DATABASE_URL=postgresql://postgres:12345@localhost:5432/postgres

API_PORT=8080

JWT_SECRET=L9^Bvuns@XN7wwAC6u8qbcGQ4xPc^bGV

## Rodar local

- Finalizar processos postgress no pc

- Abrir docker engine desktop

> yarn infra:up

> npx prisma db push

> yarn start:dev

