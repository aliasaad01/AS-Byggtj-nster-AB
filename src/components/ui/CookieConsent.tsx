import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, ShieldCheck, X } from "lucide-react";

interface CookieConsentProps {
  onOpenPolicy?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onOpenPolicy,
}) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("as_bygg_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("as_bygg_cookie_consent", "all");
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("as_bygg_cookie_consent", "necessary");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 220, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 w-full z-40 bg-white/95 backdrop-blur-md border-t border-black/10 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] py-4 px-4 sm:px-6 md:px-8 text-primary"
        >
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
            <div className="flex items-start gap-3.5 flex-1">
              <div className="p-2.5 bg-gold/10 text-gold rounded-2xl shrink-0 mt-0.5">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-bold text-sm md:text-base text-primary">
                    Vi värnar om din integritet 🍪
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-muted-dark border border-black/10 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="h-3 w-3 text-emerald-600" />{" "}
                    GDPR-compliant
                  </span>
                </div>
                <p className="text-xs text-muted-dark font-light leading-relaxed max-w-4xl">
                  Vi använder cookies för att förbättra din upplevelse på vår
                  hemsida, analysera trafik och anpassa innehåll. Du kan välja
                  att godkänna alla cookies eller endast de nödvändiga. Läs mer
                  i vår{" "}
                  <button
                    type="button"
                    onClick={onOpenPolicy}
                    className="underline hover:text-primary transition-colors cursor-pointer font-medium"
                  >
                    integritetspolicy
                  </button>
                  .
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-black/5">
              <button
                onClick={handleAcceptNecessary}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-primary bg-black/5 hover:bg-black/10 border border-black/5 transition-all outline-none cursor-pointer"
              >
                Endast nödvändiga
              </button>

              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary/90 shadow-md shadow-primary/10 transition-all outline-none cursor-pointer shrink-0"
              >
                Godkänn alla
              </button>

              <button
                onClick={handleAcceptNecessary}
                className="p-2 text-muted-dark hover:text-primary transition-colors rounded-lg hover:bg-black/5 ml-1 hidden sm:block cursor-pointer"
                aria-label="Stäng"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
