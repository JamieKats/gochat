package api

import (
	"gochat/api/controllers"
	"log"

	"github.com/joho/godotenv"
)

var server = controllers.Server{}

func init() {
	// Load .env file here??
	err := godotenv.Load(".env")

	if err != nil {
		my_logger := log.Default()
		my_logger.Println("Error loading .env file.", err)
	}
}

func Run() {
	dbDriver := "sqlite"
	dbUser := "user"
	dbPassword := "password"
	// dbPort := 1234
	server.Initalize()
}
