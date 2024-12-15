FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENV VITE_PORT=8080

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]