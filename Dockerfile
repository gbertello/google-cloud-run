FROM node:19
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY app/ app/
CMD node app/app.js