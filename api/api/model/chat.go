package model

type Chat struct {
	Id        string `json:"id"`
	From      string `json:"from"`
	To        string `json:"width"`
	Msg       string `json:"msg"`
	Timestamp int64  `json:"timestamp"`
}
