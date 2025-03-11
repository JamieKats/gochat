package main

import (
	"flag"
	"gochat/pkg/httpserver"
	"log"

	"github.com/joho/godotenv"
)

func init() {
	// Load environment file
	err := godotenv.Load(".env")

	if err != nil {
		my_logger := log.Default()
		my_logger.Println("Error loading .env file.", err)
	}
}

func main() {
	port := flag.Int("port", 8080, "Port server listens on.")

	httpserver.StartHttpServer(*port)
}
