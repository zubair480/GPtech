FROM node:17-alpine

# Create app directory

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]