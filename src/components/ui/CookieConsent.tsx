import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, ShieldCheck, X } from "lucide-react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (
      command: "consent",
      action: "update",
      params: {
        analytics_storage: "granted" | "denied";
        ad_storage: "granted" | "denied";
        ad_user_data: "granted" | "denied";
        ad_personalization: "granted" | "denied";
      },
    ) => void;
  }
}

interface CookieConsentProps {
  onOpenPolicy?: () => void;
}

const updateConsentState = (isAcceptedAll: boolean): void => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    const status = isAcceptedAll ? "granted" : "denied";

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }

    window.dataLayer.push({
      event: isAcceptedAll ? "cookie_consent_all" : "cookie_consent_necessary",
    });
  }
};

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
    } else {
      updateConsentState(consent === "all");
    }
  }, []);

  const handleAcceptAll = (): void => {
    localStorage.setItem("as_bygg_cookie_consent", "all");
    updateConsentState(true);
    setIsVisible(false);
  };

  const handleAcceptNecessary = (): void => {
    localStorage.setItem("as_bygg_cookie_consent", "necessary");
    updateConsentState(false);
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
          className="fixed inset-x-0 bottom-0 z-50 w-full border-t border-black/10 bg-white/95 p-4 text-primary backdrop-blur-md shadow-[0_-10px_30px_rgba(0,0,0,0.1)] sm:p-6 md:px-8"
        >
          <div className="mx-auto flex flex-col gap-4 max-w-7xl lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            {/* المحتوى النصي والشعار */}
            <div className="flex flex-1 items-start gap-3">
              <div className="mt-0.5 rounded-xl bg-gold/10 p-2 text-gold shrink-0">
                <Cookie className="h-5 w-5" />
              </div>

              <div className="space-y-1 text-left">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-primary sm:text-base">
                    Vi värnar om din integritet 🍪
                  </h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2 py-0.5 text-[10px] text-muted-dark">
                    <ShieldCheck className="h-3 w-3 text-emerald-600" />{" "}
                    GDPR-compliant
                  </span>
                </div>
                <p className="max-w-4xl font-light text-xs text-muted-dark leading-relaxed">
                  Vi använder cookies för att förbättra din upplevelse på vår
                  hemsida, analysera trafik och anpassa innehåll. Du kan välja
                  att godkänna alla cookies eller endast de nödvändiga. Läs mer
                  i vår{" "}
                  <button
                    type="button"
                    onClick={onOpenPolicy}
                    className="font-medium underline hover:text-primary transition-colors cursor-pointer"
                  >
                    integritetspolicy
                  </button>
                  .
                </p>
              </div>
            </div>

            {/* الأزرار والإجراءات */}
            <div className="flex flex-col-reverse items-center justify-end gap-2.5 border-t border-black/5 pt-3 shrink-0 sm:flex-row lg:border-t-0 lg:pt-0">
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="flex min-h-[44px] w-full items-center justify-center rounded-xl border border-black/5 bg-black/5 px-4 py-2.5 text-xs font-semibold text-primary outline-none transition-all cursor-pointer hover:bg-black/10 sm:min-h-0 sm:w-auto"
              >
                Endast nödvändiga
              </button>

              <div className="flex w-full items-center gap-2 sm:w-auto">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex min-h-[44px] flex-1 items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white outline-none transition-all cursor-pointer shadow-md shadow-primary/10 shrink-0 hover:bg-primary/90 sm:min-h-0 sm:w-auto sm:flex-none"
                >
                  Godkänn alla
                </button>

                <button
                  type="button"
                  onClick={handleAcceptNecessary}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-muted-dark transition-colors cursor-pointer hover:bg-black/5 hover:text-primary sm:min-h-0 sm:min-w-0"
                  aria-label="Stäng"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
