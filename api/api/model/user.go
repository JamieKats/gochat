package model

import (
	"time"
)

type User struct {
	ID        uint      `gorm:"primaryKey;auto_increment"`
	Name      string    `gorm:"unique;not null"`
	Email     string    `gorm:"unique;not null"`
	Password  string    `gorm:"size:100;not null"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}

func (u *User) Prepare() {

}
