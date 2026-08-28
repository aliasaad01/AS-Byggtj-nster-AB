import * as React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../../data/companyData";
import { Typography } from "../ui/Typography";

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-10 text-left">
      <div>
        <Typography variant="label" color="gold" className="mb-4 block">
          Kontaktuppgifter
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 font-display"
        >
          Låt oss prata om ditt projekt
        </Typography>
        <Typography
          variant="body"
          className="text-muted-dark leading-relaxed font-light text-sm md:text-base"
        >
          Vi besvarar förfrågningar normalt inom 24 timmar på vardagar. Du kan
          även kontakta oss direkt via telefon eller e-post för snabbare
          hantering.
        </Typography>
      </div>

      {/* Direct Contact Cards */}
      <div className="space-y-5">
        {/* Phone */}
        <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-black/5 group hover:border-gold/30 hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <Typography
              variant="label"
              className="text-[10px] text-primary/40 tracking-wider mb-1 block"
            >
              Ring oss direkt
            </Typography>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, "")}`}
              className="font-display text-base md:text-lg font-bold text-primary hover:text-gold transition-colors duration-300"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-black/5 group hover:border-gold/30 hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
            <Mail className="h-5 w-5" />
          </div>
          <div>
            <Typography
              variant="label"
              className="text-[10px] text-primary/40 tracking-wider mb-1 block"
            >
              Skicka e-post
            </Typography>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="font-display text-base md:text-lg font-bold text-primary hover:text-gold transition-colors duration-300"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center gap-5 p-5 bg-white rounded-2xl shadow-sm border border-black/5 group hover:border-gold/30 hover:shadow-md transition-all duration-300">
          <div className="w-12 h-12 rounded-xl bg-gold/5 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <Typography
              variant="label"
              className="text-[10px] text-primary/40 tracking-wider mb-1 block"
            >
              Huvudkontor
            </Typography>
            <Typography
              variant="body"
              className="font-display text-base font-bold text-primary"
            >
              {COMPANY_INFO.address}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
