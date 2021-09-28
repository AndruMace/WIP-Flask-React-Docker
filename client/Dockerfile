FROM node:14.17.6
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
EXPOSE 3000
COPY . .
CMD ["npm", "start"]