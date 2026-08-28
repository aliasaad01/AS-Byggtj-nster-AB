import * as React from "react";
import { AnimatePresence } from "motion/react";
import { SERVICES } from "../data/companyData";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Service } from "../types";
import { ServiceCard } from "../components/services/ServiceCard";
import { ServiceDetailsModal } from "../components/services/ServiceDetailsModal";

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<Service | null>(
    null,
  );

  return (
    <Section id="services" variant="white" className="relative">
      {/* Soft background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-black/5 blur-3xl pointer-events-none rounded-full" />

      <Container size="xl" className="relative z-10">
        {/* Responsive Section Title */}
        <SectionTitle
          badge="Våra Expertområden"
          title="Vi hjälper dig att skapa ditt drömhem"
          description="Från första idé till färdigt projekt hjälper vi dig genom hela processen. Vi tar hand om detaljerna och ser till att arbetet håller hög kvalitet och utförs på ett tryggt och professionellt sätt."
          align="center"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>
      </Container>

      {/* Detail drawer popup modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailsModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Services;
