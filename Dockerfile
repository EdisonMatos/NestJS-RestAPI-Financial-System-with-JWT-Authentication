FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g @nestjs/cli 

COPY prisma ./prisma/

RUN yarn install 

RUN yarn gen 

COPY . .

RUN yarn build

FROM node:18

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 8080

CMD [ "yarn", "start:prod" ]