package controllers

import (
	"fmt"
	"gochat/api/model"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Server struct {
	DB     *gorm.DB
	Router *gin.Engine
}

func (server *Server) Initalize(
	DbDriver string,
	// DbUser,
	// DbPassword,
	// DbPort,
	// DbHost,
	// DbName string
) {

	var err error

	// For now just use sqlite
	if DbDriver == "sqlite" {
		server.DB, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})

		if err != nil {
			panic("Failed to connect to database")
		}
	} else {
		panic(fmt.Sprintf("Unknown db driver: %s", DbDriver))
	}

	server.DB.Debug().AutoMigrate(&model.Chat{}, &model.User{})

	server.Router = gin.Default()

}
