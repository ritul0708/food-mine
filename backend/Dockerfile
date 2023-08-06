FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

# Use script specified in package,json
CMD ["npm", "start"]