package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
	"github.com/rs/cors"
)

type EmailRequest struct {
    Subject string `json:"subject"`
    HTML    string `json:"html"`
}

func sendMail(w http.ResponseWriter, r *http.Request) {
    var req EmailRequest
    if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
        http.Error(w, "Invalid request payload", http.StatusBadRequest)
        return
    }

    from := "influxoks@gmail.com"
    pass := os.Getenv("GMAIL_APP_PASSWORD")
    to := "influxoks@gmail.com"
    subject := req.Subject
    body := req.HTML

    msg := "From: " + from + "\n" +
        "To: " + to + "\n" +
        "Subject: " + subject + "\n\n" +
        body

    err := smtp.SendMail("smtp.gmail.com:587",
        smtp.PlainAuth("", from, pass, "smtp.gmail.com"),
        from, []string{to}, []byte(msg))

    if err != nil {
        http.Error(w, "Error sending email", http.StatusInternalServerError)
        return
    }

    w.WriteHeader(http.StatusOK)
    w.Write([]byte(`{"message": "Email sent"}`))
}

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("Error loading .env file")
    }

    mux := http.NewServeMux()
    mux.HandleFunc("/api/mail", sendMail)
    mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("Hello from the backend!"))
    })

    handler := cors.Default().Handler(mux)

    port := "3001"
    fmt.Printf("Server is running on http://localhost:%s\n", port)
    log.Fatal(http.ListenAndServe(":"+port, handler))
}