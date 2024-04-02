FROM golang:1.22.1-bookworm

# Working directory
WORKDIR /app

# Copy everything at /app
COPY . /app

# Build the go app
RUN go build -o main .

# Expose port
EXPOSE 8080

# Define the command to run the app
CMD ["./main"]