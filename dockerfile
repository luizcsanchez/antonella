# Usar a imagem base do Node.js 20
FROM node:20

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de dependência para o contêiner
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos da aplicação
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Expor a porta que o Vite usará
EXPOSE 5173

# Comando para iniciar a aplicação em modo de preview
CMD ["npm", "run", "preview", "--", "--host"]
