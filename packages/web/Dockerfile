FROM node:13-alpine

# Working dir (where the application is located inside the container)
WORKDIR /app

# Adding `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Installing dependecies of the application and storing in the cache
COPY package.json /app/package.json

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# Starting the application
CMD ["npm", "start"]