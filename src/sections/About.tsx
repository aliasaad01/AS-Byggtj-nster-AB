import * as React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Award } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Typography } from "../components/ui/Typography";

export const About: React.FC = () => {
  // const milestones = [
  //   {
  //     year: "2017",
  //     title: "Företaget Grundas",
  //     desc: "Vi startade med en handfull hantverkare specialiserade på platsbyggda kök i Helsingborg.",
  //   },
  //   {
  //     year: "2020",
  //     title: "Våtrumsbehörighet & Totalentreprenad",
  //     desc: "Med GVK-behörighet expanderade vi till exklusiva badrum och kompletta villarenoveringar.",
  //   },
  //   {
  //     year: "2026",
  //     title: "Svensk Trygghet",
  //     desc: "Idag är vi en väletablerad premiumaktör känd för kompromisslös hantverksskicklighet.",
  //   },
  // ];

  return (
    <Section
      id="about"
      variant="white"
      className="relative overflow-hidden border-t border-black/5"
    >
      {/* Background glow visual element */}
      <div className="absolute top-1/2 left-1/4 w-125 h-125 bg-gold/3 blur-3xl rounded-full pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image visual block (left on large screens) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl group border border-black/5"
            >
              <img
                src={COMPANY_INFO.aboutImage}
                alt="AS Byggtjänster AB Hantverksteam"
                className="w-full h-auto aspect-3/4 object-cover transition-transform duration-1000 group-hover:scale-103"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </motion.div>

            {/* Float quality guarantee badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-3 md:p-5 rounded-2xl shadow-xl max-w-70 sm:max-w-xs z-20 border border-black/5 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                  <ShieldCheck className="h-5.5 w-5.5" />
                </div>
                <Typography
                  variant="label"
                  color="primary"
                  className="text-xs font-bold uppercase tracking-wider"
                >
                  Kvalitetsgaranti
                </Typography>
              </div>
              <Typography
                variant="body"
                className="text-muted-dark leading-relaxed text-xs md:text-sm font-light"
              >
                Varje projekt omfattas av gällande ansvarsförsäkringar,
                fullständiga garantier och oberoende slutbesiktning för din
                totala trygghet.
              </Typography>
            </motion.div>
          </div>

          {/* Copy block & timeline (right on large screens) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <SectionTitle
              badge="Vår bakgrund"
              title="Ett byggföretag du kan lita på"
              description={
                "AS Byggtjänster AB är ett byggföretag i Helsingborg som grundades år 2023.\n\nVi hjälper privatpersoner, företag och bostadsrättsföreningar med renoveringar, ombyggnationer och andra byggprojekt i Helsingborg och övriga Skåne.\n\nVi arbetar noggrant, håller vad vi lovar och har en nära kontakt med våra kunder. Vårt mål är att du ska känna dig trygg genom hela projektet från första mötet till det färdiga resultatet.\n\nOavsett om det gäller ett litet jobb eller ett större byggprojekt finns vi här för att hjälpa dig."
              }
              align="left"
            />

            {/* Interactive Timeline */}
            {/* <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-black/10 mt-8 pl-1">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex gap-6 relative"
                >
                  <div className="relative z-10 w-6 h-6 rounded-full bg-white border border-gold flex items-center justify-center shrink-0 shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                  </div>
                  <div>
                    <Typography
                      variant="label"
                      color="gold"
                      className="text-[10px] font-bold tracking-[0.25em] block uppercase"
                    >
                      {milestone.year}
                    </Typography>
                    <Typography
                      variant="h3"
                      color="primary"
                      className="font-display text-base md:text-lg font-bold mt-1"
                    >
                      {milestone.title}
                    </Typography>
                    <Typography
                      variant="body"
                      className="text-muted-dark mt-2 leading-relaxed max-w-xl text-sm font-light"
                    >
                      {milestone.desc}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div> */}
          </div>
        </div>
      </Container>
    </Section>
  );
};
