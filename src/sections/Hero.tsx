import * as React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Typography } from "../components/ui/Typography";

export const Hero: React.FC = () => {
  const stats = [
    { num: "150", suffix: "+", label: "Projekt Slutförda" },
    { num: "10", suffix: "+", label: "Års Erfarenhet" },
    { num: "98", suffix: "%", label: "Nöjda Kunder" },
    { num: "24", suffix: "h", label: "Svarstid Offert" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center pt-8 overflow-hidden bg-primary"
    >
      {/* Immersive high resolution background image with slow zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-primary z-10" />
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${COMPANY_INFO.heroBg})` }}
        />
      </div>

      <Container
        size="xl"
        className="relative z-20 text-center text-white py-18 md:py-24 flex flex-col items-center"
      >
        {/* Small floating premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-sans text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] mb-8"
        >
          <Sparkles className="h-3 w-3 text-gold animate-pulse" />
          <Typography
            variant="label"
            color="gold"
            className="text-[10px] md:text-[11px] font-bold tracking-[0.25em]"
          >
            {COMPANY_INFO.tagline}
          </Typography>
        </motion.div>

        {/* Headline */}
        <Typography
          variant="display"
          color="white"
          as="h1"
          className="max-w-5xl mx-auto mb-6 text-balance text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
        >
          Bygger med kvalitet. <br /> Levererar med stolthet.
        </Typography>

        {/* Subtitle description */}
        <Typography
          variant="bodyLarge"
          color="white"
          as="p"
          className="max-w-2xl mx-auto mb-10 text-white/80 font-light leading-relaxed text-balance text-sm sm:text-base md:text-lg lg:text-xl"
        >
          <span className="font-extrabold">AS Byggtjänster AB</span> erbjuder
          professionella byggtjänster i hela Skåne. <br />
          Vi hjälper privatpersoner, företag och bostadsrättsföreningar med allt
          från mindre renoveringar till större byggprojekt. Med fokus på
          kvalitet, noggrannhet och god kommunikation ser vi till att varje
          projekt utförs med högsta standard.
          <br />
          <span className="font-bold text-gold">
            `Begär en kostnadsfri offert redan idag`
          </span>
        </Typography>

        {/* Call to action actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button
              variant="accent"
              size="lg"
              className="w-full sm:w-auto text-xs px-8 py-4 uppercase tracking-widest font-bold"
            >
              Begär Gratis Offert
            </Button>
          </a>
          <a href="#projects" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-xs px-8 py-4 uppercase tracking-widest font-bold text-white border-white/20 backdrop-blur-md hover:bg-white hover:text-primary hover:border-white transition-all group flex items-center justify-center gap-2.5"
            >
              Se Våra Projekt
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </motion.div>

        {/* Float design Stats cards */}
        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24 w-full max-w-5xl">
          {stats.map((stat, i) => (
            <motion.div
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(197, 160, 89, 0.5)",
              }}
              key={i}
              className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-2xl text-left border border-white/25 hover:-translate-y-1.5 transition-all duration-300 shadow-lg group"
            >
              <Typography
                variant="h2"
                className="text-3xl md:text-4.5xl font-extrabold text-primary mb-1 md:mb-2 block leading-none"
              >
                {stat.num}
                <span className="text-gold font-light">{stat.suffix}</span>
              </Typography>
              <Typography
                variant="label"
                className="text-[10px] md:text-xs text-primary/60 tracking-wider font-bold block uppercase leading-tight group-hover:text-primary transition-colors"
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
