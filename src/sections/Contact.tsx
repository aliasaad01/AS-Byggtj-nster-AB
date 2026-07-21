import * as React from "react";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";

export const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      variant="light"
      className="relative border-t border-black/5"
    >
      {/* Abstract elegant background element */}
      <div className="absolute right-0 bottom-0 w-150 h-150 bg-gold/2 blur-3xl rounded-full pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Block: Company contacts */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Block: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
