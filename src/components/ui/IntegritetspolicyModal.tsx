import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, X } from "lucide-react";
import { Typography } from "./Typography";

interface IntegritetspolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntegritetspolicyModal: React.FC<IntegritetspolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop (خلفية معتمة) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col z-10 text-primary"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/5 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <Typography
                    variant="h3"
                    className="text-xl font-display font-bold"
                  >
                    Integritetspolicy
                  </Typography>
                  <p className="text-xs text-muted-dark">
                    GDPR & Dataskydd – Uppdaterad {new Date().getFullYear()}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted-dark hover:text-primary hover:bg-black/5 rounded-xl transition-all cursor-pointer"
                aria-label="Stäng"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-xs md:text-sm text-muted-dark leading-relaxed font-light">
              <section className="space-y-1.5">
                <h4 className="text-sm md:text-base font-bold text-primary font-display">
                  1. Om denna policy
                </h4>
                <p>
                  Vi värnar om din personal integritet. Denna integritetspolicy
                  förklarar hur vi samlar in och använder dina personuppgifter
                  när du besöker vår hemsida eller använder våra tjänster i
                  enlighet med dataskyddsförordningen (GDPR).
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm md:text-base font-bold text-primary font-display">
                  2. Vilka personuppgifter samlar vi in?
                </h4>
                <p>
                  Vi kan samla in följande information när du fyller i våra
                  formulär för offertförfrågan eller kontakt:
                </p>
                <ul className="list-disc pl-5 space-y-1 pt-1">
                  <li>
                    Namn och kontaktuppgifter (e-postadress, telefonnummer).
                  </li>
                  <li>
                    Fastighetsadress eller postnummer för projektets utförande.
                  </li>
                  <li>
                    Information om ditt planerade bygg- eller
                    renoveringsprojekt.
                  </li>
                  <li>
                    Teknisk data som IP-adress och cookies för hemsidans
                    funktionalitet.
                  </li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm md:text-base font-bold text-primary font-display">
                  3. Vad använder vi uppgifterna till?
                </h4>
                <p>Dina uppgifter används endast för följande ändamål:</p>
                <ul className="list-disc pl-5 space-y-1 pt-1">
                  <li>
                    För att behandla och besvara dina offertförfrågningar.
                  </li>
                  <li>
                    För att utföra och administrera avtalade bygg- och
                    renoveringstjänster.
                  </li>
                  <li>
                    För att hantera ROT-avdrag gentemot Skatteverket vid
                    beställning.
                  </li>
                  <li>
                    För att förbättra vår hemsida och våra tjänster via
                    analysverktyg.
                  </li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm md:text-base font-bold text-primary font-display">
                  4. Delning av personuppgifter
                </h4>
                <p>
                  Vi säljer eller vidarebefordrar aldrig dina personuppgifter
                  till tredje part. Uppgifter kan endast delas med myndigheter
                  (t.ex. Skatteverket för ROT-avdrag) eller underleverantörer i
                  den utsträckning det är nödvändigt för att fullfölja vårt
                  uppdrag.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm md:text-base font-bold text-primary font-display">
                  5. Dina rättigheter
                </h4>
                <p>
                  Du har när som helst rätt att begära ett registerutdrag, få
                  felaktiga uppgifter rättade eller begära att dina
                  personuppgifter raderas ur våra system.
                </p>
              </section>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 border-t border-black/5 bg-slate-50/50 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
              >
                Jag förstår
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
