import * as React from "react";
import { Container } from "../components/ui/Container";
import { Typography } from "../components/ui/Typography";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const Integritetspolicy: React.FC = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen text-primary">
      <Container size="lg">
        {/* زر العودة */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-muted-dark hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Tillbaka till startsidan
        </a>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm space-y-8">
          {/* Header */}
          <div className="border-b border-black/5 pb-6">
            <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-widest mb-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> GDPR &
              Integritet
            </div>
            <Typography
              variant="h2"
              className="text-2xl md:text-4xl font-display font-bold"
            >
              Integritetspolicy
            </Typography>
            <p className="text-xs text-muted-dark mt-2">
              Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-6 text-sm text-muted-dark leading-relaxed font-light">
            <section className="space-y-2">
              <h3 className="text-base font-bold text-primary font-display">
                1. Om denna policy
              </h3>
              <p>
                Vi värnar om din personliga integritet. Denna integritetspolicy
                förklarar hur vi samlar in och använder dina personuppgifter när
                du besöker vår hemsida eller använder våra tjänster i enlighet
                med dataskyddsförordningen (GDPR).
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-bold text-primary font-display">
                2. Vilka personuppgifter samlar vi in?
              </h3>
              <p>
                Vi kan samla in följande information när du fyller i våra
                formulär för offertförfrågan eller kontakt:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Namn och kontaktuppgifter (e-postadress, telefonnummer).
                </li>
                <li>
                  Fastighetsadress eller postnummer för projektets utförande.
                </li>
                <li>
                  Information om ditt planerade bygg- eller renoveringsprojekt.
                </li>
                <li>
                  Teknisk data som IP-adress och cookies för hemsidans
                  funktionalitet.
                </li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-bold text-primary font-display">
                3. Vad använder vi uppgifterna till?
              </h3>
              <p>Dina uppgifter används endast för följande ändamål:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>För att behandla och besvara dina offertförfrågningar.</li>
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

            <section className="space-y-2">
              <h3 className="text-base font-bold text-primary font-display">
                4. Delning av personuppgifter
              </h3>
              <p>
                Vi säljer eller vidarebefordrar aldrig dina personuppgifter till
                tredje part. Uppgifter kan endast delas med myndigheter (t.ex.
                Skatteverket för ROT-avdrag) eller underleverantörer i den
                utsträckning det är nödvändigt för att fullfölja vårt uppdrag.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-bold text-primary font-display">
                5. Dina rättigheter
              </h3>
              <p>
                Du har när som helst rätt att begära ett registerutdrag, få
                felaktiga uppgifter rättade eller begära att dina
                personuppgifter raderas ur våra system.
              </p>
            </section>

            <section className="space-y-2 border-t border-black/5 pt-6">
              <h3 className="text-base font-bold text-primary font-display">
                6. Kontaktinformation
              </h3>
              <p>
                Om du har frågor om hur vi hanterar dina personuppgifter är du
                varmt välkommen att kontakta oss på vår e-post eller via
                telefon.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Integritetspolicy;
