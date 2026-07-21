import * as React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Send,
  Award,
  FileText,
} from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";
import { Container } from "../components/ui/Container";
import { Typography } from "../components/ui/Typography";

export const Footer: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1200);
  };

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Decorative premium geometric grid overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/1.5 skew-x-12 translate-x-1/2 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand/About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logo}
                alt={COMPANY_INFO.name}
                className="h-8 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
              <Typography
                variant="h3"
                color="white"
                className="font-bold tracking-tight uppercase text-lg md:text-xl"
              >
                AS Byggtjänster
              </Typography>
            </div>
            <Typography
              variant="body"
              className="text-white/65 leading-relaxed max-w-sm font-light"
            >
              Vi utför byggtjänster för privatpersoner, företag och
              bostadsrättsföreningar i Helsingborg och närliggande kommuner.
            </Typography>
            {/* <div className="flex gap-4 pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-sans font-bold uppercase tracking-widest text-gold">
                <Award className="h-3.5 w-3.5" /> Certifierad Våtrumsbehörig
              </span>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <Typography
              variant="label"
              color="gold"
              className="text-xs font-bold uppercase tracking-widest block"
            >
              Snabblänkar
            </Typography>
            <ul className="space-y-3.5">
              {[
                { name: "Hem", href: "#hero" },
                { name: "Tjänster", href: "#services" },
                { name: "Om Oss", href: "#about" },
                { name: "Våra Projekt", href: "#projects" },
                { name: "Kontakta Oss", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold font-sans text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details / Certifications */}
          <div className="space-y-6">
            <Typography
              variant="label"
              color="gold"
              className="text-xs font-bold uppercase tracking-widest block"
            >
              Företagsinformation
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-gold shrink-0 mt-0.5" />
                <Typography
                  variant="body"
                  className="text-white/60 leading-relaxed text-sm"
                >
                  {COMPANY_INFO.address}
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4.5 w-4.5 text-gold shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
                  className="text-white/60 hover:text-gold font-sans text-sm transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4.5 w-4.5 text-gold shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white/60 hover:text-gold font-sans text-sm transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              {/* <li className="flex items-center gap-3 pt-2">
                <FileText className="h-4 w-4 text-white/30 shrink-0" />
                <Typography
                  variant="caption"
                  className="text-white/40 font-mono"
                >
                  Org.nr: 556123-4567
                </Typography>
              </li> */}
            </ul>
          </div>

          {/* Premium Newsletter Block */}
          <div className="space-y-6">
            <Typography
              variant="label"
              color="gold"
              className="text-xs font-bold uppercase tracking-widest block"
            >
              Vårt Nyhetsbrev
            </Typography>
            <Typography
              variant="body"
              className="text-white/60 leading-relaxed text-sm"
            >
              Håll dig uppdaterad med inspiration från våra senaste
              premiumprojekt och trender inom nordisk design.
            </Typography>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Din e-postadress"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-white/5 border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-full py-3.5 px-5 text-sm outline-none text-white placeholder:text-white/30 transition-all pr-12 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="absolute right-1.5 top-1.5 w-9 h-9 bg-gold hover:bg-gold-hover text-white rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 shadow-sm"
                >
                  {status === "loading" ? (
                    <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : status === "success" ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    <Send className="h-3.5 w-3.5 text-white" />
                  )}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-3 text-xs text-green-400 font-medium">
                  Tack! Du prenumererar nu på vårt nyhetsbrev.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-xs text-red-400 font-medium">
                  Ange en giltig e-postadress.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography
            variant="caption"
            className="text-white/30 tracking-widest uppercase text-[10px] text-center md:text-left"
          >
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Alla rättigheter
            reserverade.
          </Typography>
          <div className="flex gap-8 text-white/40 text-xs font-sans">
            <a href="#about" className="hover:text-gold transition-colors">
              Byggtrygghet
            </a>
            <a href="#services" className="hover:text-gold transition-colors">
              Kvalitetsgaranti
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Integritetspolicy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
