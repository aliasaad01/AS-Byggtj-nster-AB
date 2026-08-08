import { Service, Project, Testimonial } from "../types";

export const COMPANY_INFO = {
  name: "AS Byggtjänster AB",
  tagline: "Kvalitet i varje detalj",
  logo: "/logo.png",
  phone: "+464258542",
  email: "info@asbyggtjanster.se",
  address: "Verksam i Helsingborg och närliggande kommuner i Skåne",
  aboutImage: "/images/about/about.webp",
  heroBg: "/images/home/home.webp",
};

export const SERVICES: Service[] = [
  {
    id: "nybyggnation",
    title: "Nybyggnation",
    description:
      "Vi hjälper dig hela vägen från idé till färdigt hus. Vi bygger med kvalitet och noggrannhet och ser till att projektet blir som du vill ha det.",
    icon: "Home",
    details: [
      "Vi bygger ditt hus från start till färdigt resultat.",
      "Vi bygger villor och andra hus efter dina önskemål.",
      "Vi hjälper till med projektledning och bygglov.",
      "Vi använder hållbara och energieffektiva byggmaterial.",
    ],
  },
  {
    id: "renovering",
    title: "Renovering",
    description:
      "Högkvalitativa renoveringar av kök, badrum, vardagsrum och sovrum, samt kompletta totalrenoveringar.",
    icon: "Hammer",
    details: [
      "Totalrenovering av lägenheter och villor",
      "Kök- och badrumsrenovering med våtrumsintyg",
      "Ytskiktsrenovering, golvläggning och måleri",
      "Modernisering av äldre fastigheter",
    ],
  },
  {
    id: "tillbyggnad",
    title: "Tillbyggnad",
    description:
      "Behöver du mer plats? Vi bygger ut ditt hus på ett tryggt och hållbart sätt. Vi hjälper dig från planering till färdigt resultat.",
    icon: "Layers",
    details: [
      "Tillbyggnad av hus, garage och attefallshus.",
      "Vi ser till att tillbyggnaden passar ihop med ditt hus.",
      "Vi förbättrar isoleringen och hjälper till att minska energiförbrukningen.",
      "Vi bygger hela tillbyggnaden – från grund till tak.",
    ],
  },
  {
    id: "altan-tradeck",
    title: "Altan & Trädäck",
    description:
      "Vi bygger altaner och trädäck som passar ditt hus och din trädgård. Tillsammans skapar vi en uteplats där du kan trivas året om.",
    icon: "Sun",
    details: [
      "Altaner och trädäck byggda efter dina önskemål.",
      "Möjlighet till belysning och snygga, dolda skruvar.",
      "Byggnation av trappor, räcken, pergolor och insynsskydd.",
      "Markarbete och en stabil grund för ett hållbart resultat.",
    ],
  },
  {
    id: "tak-fasad",
    title: "Tak & Fasad",
    description:
      "Vi hjälper dig med tak och fasad så att ditt hus håller längre och skyddas mot regn, vind och väder. Vi arbetar med kvalitet och noggrannhet.",
    icon: "Shield",
    details: [
      "Byte och renovering av tak.",
      "Renovering, målning och isolering av fasaden.",
      "Byte och renovering av fönster och dörrar.",
      "Montering av hängrännor, stuprör och taksäkerhet.",
    ],
  },
  {
    id: "snickeri",
    title: "Snickeri",
    description:
      "Vi hjälper dig med allt inom snickeri – från innerväggar och golv till lister och andra lösningar. Vi arbetar noggrant och anpassar arbetet efter dina önskemål.",
    icon: "Construction",
    details: [
      "Platsbyggda möbler, garderober och smart förvaring.",
      "Montering av innerväggar, dörrfoder och golvlister.",
      "Läggning av golv och renovering av trappor.",
      "Specialbyggda snickerier efter dina önskemål.",
    ],
  },
];

import { PROJECTS as NEW_PROJECTS } from "./projectsData";

export const PROJECTS: Project[] = NEW_PROJECTS;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Erik Johansson",
    role: "Villaägare",
    location: "Lidingö",
    content:
      "Helt fantastiskt resultat med vår köksrenovering. Teamet var professionella, punktliga och lämnade arbetsplatsen fläckfri varje dag. Kan varmt rekommendera AS Byggtjänster för alla som söker absolut högsta kvalitet.",
    rating: 5,
  },
  {
    id: "2",
    name: "Maria Lindqvist",
    role: "Fastighetsägare",
    location: "Danderyd",
    content:
      "AS Byggtjänster förvandlade vår tråkiga baksida till en arkitektonisk dröm. Deras öga för detaljer, känsla för träkonstruktioner och förståelse för utemiljö är i absolut världsklass.",
    rating: 5,
  },
  {
    id: "3",
    name: "Anders Bergström",
    role: "Fastighetsutvecklare",
    location: "Helsingborg",
    content:
      "Tydlig kommunikation, transparent prissättning och hög teknisk expertis genom hela projektet. Vi kände oss helt trygga från första offerten till slutbesiktningen. Ett skolboksexempel på hur en modern byggfirma ska drivas.",
    rating: 5,
  },
];
