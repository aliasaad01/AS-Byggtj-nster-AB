import * as React from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO } from "../data/companyData";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Typography } from "../components/ui/Typography";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key to dismiss mobile navigation drawer
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Hem", href: "#hero" },
    { name: "Tjänster", href: "#services" },
    { name: "Om Oss", href: "#about" },
    { name: "Projekt", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center ${
          isScrolled
            ? "h-16 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-xl"
            : "h-20 bg-transparent border-b border-transparent"
        }`}
      >
        <Container size="xl" className="flex justify-between items-center">
          {/* Logo & Brand Name */}
          <a
            href="#hero"
            className={`flex items-center gap-3.5 group rounded-lg overflow-hidden transition-all duration-300 px-2
              ${isScrolled ? "bg-primary rounded-lg hover:bg-gold" : ""}
            `}
          >
            <img
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              className={`h-8 md:h-10 w-13 md:w-16 object-contain transition-all duration-500 `}
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
                  isScrolled
                    ? "text-primary hover:text-gold"
                    : "text-white/85 hover:text-white"
                } after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-3/4`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA / Mobile Action Button */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:block">
              <Button
                variant={isScrolled ? "primary" : "outline"}
                size="sm"
                className={`text-xs ${
                  !isScrolled
                    ? "text-white border-white/20 hover:bg-white hover:text-primary hover:border-white shadow-none"
                    : "shadow-sm"
                }`}
              >
                Begär Offert
              </Button>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Öppna meny"
              className={`md:hidden p-2.5 rounded-lg transition-colors cursor-pointer duration-300 ${
                isScrolled
                  ? "text-primary hover:bg-light-gray"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Menu className="h-5.5 w-5.5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigeringsmeny"
            className="fixed inset-0 z-50 bg-primary/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex justify-between items-center px-6 h-20 border-b border-white/5">
              <div className="flex items-center gap-3">
                <img
                  src={COMPANY_INFO.logo}
                  alt={COMPANY_INFO.name}
                  className="h-8 w-auto object-contain brightness-0 invert"
                  loading="eager"
                />
                <Typography
                  variant="h3"
                  color="white"
                  className="font-bold tracking-tight text-sm uppercase"
                >
                  AS Byggtjänster
                </Typography>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Stäng meny"
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col justify-between h-[calc(100svh-80px)] px-6 py-12">
              <nav className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-2xl font-bold text-white hover:text-gold transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="space-y-6">
                <div className="h-px bg-white/10" />
                <div className="space-y-3 font-sans text-sm">
                  <p className="flex items-center gap-3 text-white/70">
                    <Phone className="h-4 w-4 text-gold" />
                    {COMPANY_INFO.phone}
                  </p>
                  <p className="flex items-center gap-3 text-white/70">
                    <span className="text-gold font-bold">@</span>
                    {COMPANY_INFO.email}
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full"
                >
                  <Button variant="accent" className="w-full text-xs py-3.5">
                    Begär Gratis Offert
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
