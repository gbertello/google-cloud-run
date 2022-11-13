FROM node:19
ENV NODE_ENV=production
WORKDIR /app
COPY app/package.json ./
RUN npm install --omit=dev
COPY app/ .
CMD node app.js