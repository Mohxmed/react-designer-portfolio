import React from "react";
import Container from "../layouts/Container";
import ContactForm from "../components/ui/Contact/ContactForm";
import "../styles/contact-page.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <ContactForm />
      </Container>
    </div>
  );
}
