package httpserver

import (
	"fmt"
	"io"
	"net/http"
)

func StartHttpServer(port int) {
	http.HandleFunc("/", getRoot)

	fmt.Printf("Listening for http connections on port %d\n", port)
	err := http.ListenAndServe(fmt.Sprintf(":%d", port), nil)

	fmt.Printf("Error opening server: %s", err)
}

func getRoot(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Got request at /")
	io.WriteString(w, "This is root!")
}
