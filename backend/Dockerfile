FROM node:18-alpine

WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy application code
COPY index.js .

EXPOSE 5000

CMD ["npm", "start"]

