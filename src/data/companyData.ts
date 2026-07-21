import { Service, Project, Testimonial } from "../types";

export const COMPANY_INFO = {
  name: "AS Byggtjänster AB",
  tagline: "Excellens i varje detalj",
  logo: "/logo.png",
  phone: "+46 (0) 8 123 45 67",
  email: "info@asbyggtjanster.se",
  address: "Verksam i Helsingborg och närliggande kommuner i Skåne",
  aboutImage: "/images/about/about.webp",
  heroBg: "/images/home/home.webp",
};

// export const SERVICES: Service[] = [
//   {
//     id: "kok",
//     title: "Köksrenovering",
//     description: "Vi skapar drömkök med högkvalitativa material och smart funktionalitet anpassad för din vardag.",
//     icon: "Utensils",
//     details: [
//       "Skräddarsydd köksdesign & planering",
//       "Montering av exklusiva kökssnickerier",
//       "Elinstallationer & VVS av certifierade fackmän",
//       "Stenbänkskivor & måttbeställda stänkskydd",
//     ],
//   },
//   {
//     id: "badrum",
//     title: "Badrumsrenovering",
//     description: "Totalentreprenad för badrum med våtrumscertifikat och öga för lyxiga, tidlösa detaljer.",
//     icon: "Bath",
//     details: [
//       "Totalentreprenad med GVK/BKR-våtrumsintyg",
//       "Kakel, klinker & exklusiv natursten",
//       "Golvvärme, dolda rör & belysningsdesign",
//       "Installation av premium sanitetsporslin",
//     ],
//   },
//   {
//     id: "altan",
//     title: "Altan & Terrass",
//     description: "Förläng sommarsäsongen med en arkitektritad uteplats sömlöst anpassad efter din tomt.",
//     icon: "Sun",
//     details: [
//       "Trädäck i sibirisk lärk, komposit eller tryckimpregnerat",
//       "Platsbyggda bänkar, trappor & pergola",
//       "Integrerad LED-belysning",
//       "Räcken i glas, smide eller trä",
//     ],
//   },
//   {
//     id: "tradgard",
//     title: "Trädgård & Markarbete",
//     description: "Markarbete och professionell trädgårdsdesign som lyfter fastighetens totala helhetsintryck.",
//     icon: "Spade",
//     details: [
//       "Stenläggning av gångar, uppfarter & murar",
//       "Markutjämning & dränering",
//       "Platsbyggda planteringslådor & stödmurar",
//       "Gräsanläggning (rullgräs eller sådd)",
//     ],
//   },
//   {
//     id: "staket",
//     title: "Staket & Grindar",
//     description: "Stilrena staket och grindar som skapar integritet och en inbjudande, välkomnande känsla.",
//     icon: "Fence",
//     details: [
//       "Klassiska & moderna trästaket",
//       "Underhållsfria kompositlösningar",
//       "Smidesräcken & måttbeställda grindar",
//       "Installation av automatiserade grindöppnare",
//     ],
//   },
//   {
//     id: "renovering",
//     title: "Måleri & Totalrenovering",
//     description: "Invändigt och utvändigt måleri utfört med extrem precision och marknadens bästa färgval.",
//     icon: "Paintbrush",
//     details: [
//       "Fasadmålning & utvändigt snickeriarbete",
//       "Invändig bredspackling, tapetsering & snickerimålning",
//       "Golvslipning & ytbehandling",
//       "Totalrenoveringar av lägenheter & villor",
//     ],
//   },
// ];
export const SERVICES: Service[] = [
  {
    id: "nybyggnation",
    title: "Nybyggnation",
    description:
      "Vi hjälper dig från idé till färdigt projekt med fokus på kvalitet, hållbarhet och modern svensk design.",
    icon: "Home",
    details: [
      "Totalentreprenad från ritning till färdigt hus",
      "Nyckelfärdiga villor och arkitektritade hem",
      "Projektledning och bygglovshantering",
      "Energieffektiva och miljösmarta byggmaterial",
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
      "Behöver du mer utrymme? Vi bygger ut ditt hem på ett smart, säkert och hållbart sätt.",
    icon: "Layers",
    details: [
      "Utbyggnad av villor, garage och attefallshus",
      "Sömlös integration med befintlig arkitektur",
      "Tilläggsisolering och energieffektivisering",
      "Komplett konstruktion från grund till tak",
    ],
  },
  {
    id: "altan-tradeck",
    title: "Altan & Trädäck",
    description:
      "Skräddarsydda altaner, trädäck och uteplatser som är perfekt anpassade efter ditt hem och din tomt.",
    icon: "Sun",
    details: [
      "Platsbyggda trädäck i premiummaterial (t.ex. lärk, komposit)",
      "Integrerad LED-belysning och dolda skruvmontage",
      "Bygge av trappor, räcken, pergolas och skärmväggar",
      "Markarbete och stabila grundläggningar",
    ],
  },
  {
    id: "tak-fasad",
    title: "Tak & Fasad",
    description:
      "Professionella takbyten, fasadrenoveringar och långsiktigt underhåll som skyddar ditt hus mot väder och vind.",
    icon: "Shield",
    details: [
      "Kompletta takbyten (tegel, betongpanna, bandtäckning)",
      "Fasadrenovering, omfärgning och tilläggsisolering",
      "Byte och renovering av fönster och dörrar",
      "Montering av hängrännor, stuprör och taksäkerhet",
    ],
  },
  {
    id: "snickeri",
    title: "Snickeri",
    description:
      "Specialanpassade lösningar, innerväggar, golv, lister och mycket mer utfört med extrem precision.",
    icon: "Construction",
    details: [
      "Platsbyggda möbler, garderober och förvaringslösningar",
      "Montering av innerväggar, dörrfoder och golvlister",
      "Professionell golvläggning och trapprenovering",
      "Skräddarsydda finsnickerier efter dina unika önskemål",
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
    location: "Stockholm",
    content:
      "Tydlig kommunikation, transparent prissättning och hög teknisk expertis genom hela projektet. Vi kände oss helt trygga från första offerten till slutbesiktningen. Ett skolboksexempel på hur en modern byggfirma ska drivas.",
    rating: 5,
  },
];
