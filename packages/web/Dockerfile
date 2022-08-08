FROM node:13-alpine

WORKDIR /app/web
ARG NODE_ENV

ENV PATH /app/web/node_modules/.bin:$PATH

COPY package.json /app/web/package.json

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

CMD ["npm", "start"]