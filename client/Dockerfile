FROM node:14.17.6
WORKDIR /app
COPY package.json package.json
RUN npm install
EXPOSE 3000
COPY . .
CMD ["npm", "start"]