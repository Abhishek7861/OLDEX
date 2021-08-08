package com.abhiSpringBoot.spring.security.postgresql.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailClient {
    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleEmail(EmailFormat email) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(email.getFromEmail());
        message.setTo(email.getToEmail());
        message.setText(email.getMessage());
        message.setSubject("OLDEX : PRODUCT ENQUIRY");

        mailSender.send(message);
        System.out.println("Mail Sent");
    }
}
