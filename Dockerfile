FROM node:19
ENV NODE_ENV=production
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install --production
COPY . .
CMD node app.js