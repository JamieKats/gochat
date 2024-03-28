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
		log.Fatal("Error loading .env file.", err)
	}
}

func main() {
	port := flag.Int("port", 1234, "Port server listens on.")

	httpserver.StartHttpServer(*port)
}
