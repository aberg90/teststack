FROM node:14

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# RUN npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]