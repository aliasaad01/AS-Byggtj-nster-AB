import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography } from "../components/ui/Typography";

export const CTA: React.FC = () => {
  return (
    <Section
      variant="gold"
      className="relative overflow-hidden border-t border-black/5"
    >
      {/* Abstract luxurious gold geometric grid overlay for high visual rhythm */}
      <div className="absolute inset-0 bg-radial-gradient from-white/40 via-transparent to-transparent opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 blur-3xl rounded-full pointer-events-none" />

      <Container size="md" className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block"
          >
            <Typography
              variant="label"
              color="primary"
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]"
            >
              Hör av dig till oss idag
            </Typography>
          </motion.div>

          <Typography
            variant="display"
            color="primary"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5.5xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Redo att Starta Ditt Nästa Drömprojekt?
          </Typography>

          <Typography
            variant="bodyLarge"
            color="primary"
            as="p"
            className="max-w-2xl mx-auto leading-relaxed text-balance text-primary/80 font-light text-sm sm:text-base md:text-lg"
          >
            Kontakta oss idag för en kostnadsfri konsultation. Vi lyssnar på
            dina önskemål och tar fram ett transparent offertförslag helt utan
            förpliktelser.
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <a href="#contact">
              <Button
                variant="primary"
                size="lg"
                className="group shadow-xl shadow-primary/5 flex items-center justify-center gap-2.5 mx-auto text-xs uppercase tracking-widest font-bold px-10 py-4.5"
              >
                Begär Kostnadsfri Offert
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};
