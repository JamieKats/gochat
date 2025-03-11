# Use a Node.js image
# FROM node:20.12-bookworm
FROM mcr.microsoft.com/devcontainers/python:1-3.12-bullseye

# Set the working directory
WORKDIR /app

# USER node

# Copy everything to the container
COPY . .

# Install dependencies
RUN pip3 install -r requirements.txt

# Expose port
EXPOSE 5555

# CMD [ "python3", "main.py" ]