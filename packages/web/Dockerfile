FROM node:13-alpine

# Working dir (where the application is located inside the container)
WORKDIR /app/web

# Adding `/app/node_modules/.bin` to $PATH
ENV PATH /app/web/node_modules/.bin:$PATH

# Installing dependecies of the application and storing in the cache
COPY package.json /app/web/package.json

RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# Starting the application
CMD ["npm", "start"]