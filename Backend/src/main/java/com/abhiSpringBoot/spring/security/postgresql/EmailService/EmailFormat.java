package com.abhiSpringBoot.spring.security.postgresql.EmailService;

import org.springframework.stereotype.Component;

@Component
public class EmailFormat {
    String toEmail;
    String fromEmail;
    String Message;

    public EmailFormat(){}

    public EmailFormat(String toEmail, String fromEmail, String Message) {
        this.toEmail = toEmail;
        this.fromEmail = fromEmail;
        this.Message = Message;
    }

    public String getToEmail() {
        return toEmail;
    }

    public void setToEmail(String toEmail) {
        this.toEmail = toEmail;
    }

    public String getFromEmail() {
        return fromEmail;
    }

    public void setFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
    }

    public String getMessage() {
        return Message;
    }

    public void setMessage(String Message) {
        this.Message = Message;
    }

    @Override
    public String toString() {
        return "EmailFormat{" +
                "toEmail='" + toEmail + '\'' +
                ", fromEmail='" + fromEmail + '\'' +
                ", Message='" + Message + '\'' +
                '}';
    }
}
