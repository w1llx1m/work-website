# Imagem oficial do Node
FROM node:22-alpine

# Diretório de trabalho dentro do container
WORKDIR /work-website

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o restante do projeto
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Inicia o projeto
CMD ["npm", "run", "dev", "--", "--host"]