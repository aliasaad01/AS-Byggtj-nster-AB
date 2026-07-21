import * as React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/companyData";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography } from "../components/ui/Typography";

export const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      variant="dark"
      className="relative overflow-hidden"
    >
      {/* Abstract luxury geometric design elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/2 blur-3xl pointer-events-none rounded-full" />

      <Container size="xl" className="relative z-10">
        {/* Responsive Section Title with Dark theme mapping */}
        <SectionTitle
          badge="Referenser"
          title="Vad Våra Kunder Säger Om Oss"
          description="Läs omdömen från villaägare och fastighetsägare som anförtrott sina hem och projekt åt vårt team."
          align="center"
          theme="dark"
        />

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card
                variant="glassDark"
                hoverEffect={true}
                className="p-8 h-full flex flex-col justify-between border-white/6 bg-white/3 hover:bg-white/6 transition-all duration-300 rounded-2xl"
              >
                <div>
                  {/* Rating Stars render */}
                  <div className="flex gap-1 text-gold mb-6">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current text-gold"
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-gold/20 mb-4" />

                  <Typography
                    variant="body"
                    className="font-sans text-sm md:text-base text-white/80 italic leading-relaxed mb-8 font-light"
                  >
                    &quot;{review.content}&quot;
                  </Typography>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <Typography
                    variant="h3"
                    color="white"
                    className="font-display text-base font-bold mb-1"
                  >
                    {review.name}
                  </Typography>
                  <Typography
                    variant="label"
                    color="gold"
                    className="text-[10px] uppercase tracking-widest font-semibold block"
                  >
                    {review.role}, {review.location}
                  </Typography>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
