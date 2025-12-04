# Dockerfile
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json si existe
COPY package*.json ./

# Instalar dependencias (producción)
RUN npm ci --only=production

# Copiar el resto del código
COPY . .

# Exponer puerto (Render inyecta PORT en runtime)
EXPOSE 3000

# Comando por defecto
CMD ["node", "index.js"]
