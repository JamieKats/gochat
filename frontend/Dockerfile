# Use a Node.js image
# FROM node:20.12-bookworm
FROM mcr.microsoft.com/devcontainers/javascript-node:20-bookworm

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# USER node

# Install dependencies
RUN npm install

# Copy everything to the container
COPY . .

# Expose port
EXPOSE 3000

# CMD [ "node", "./app/App.js" ]