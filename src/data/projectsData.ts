import { Project, GalleryProject } from "../types";

/**
 * 📸 EASY-REPLACE IMAGE CONFIGURATION
 *
 * To update the portfolio with your real project photos:
 * 1. Upload your photos to your server or a cloud storage provider.
 * 2. Replace the URLs below with your custom image URLs or local relative paths (e.g., "/images/projects/kök-1.jpg").
 * 3. Each project can have a primary image AND multiple secondary slide images for the premium carousel lightbox!
 */
export const PROJECT_IMAGES = {
  // --- KÖK (Kitchens) ---
  kitchenSaltsjobadenMain: "/images/kök/1/4.webp",
  kitchenSaltsjobadenSlide1: "/images/kök/1/1.webp",
  kitchenSaltsjobadenSlide2: "/images/kök/1/2.webp",
  kitchenSaltsjobadenSlide3: "/images/kök/1/3.webp",

  kitchenDanderydMain: "/images/kök/2/5.webp",
  kitchenDanderydSlide1: "/images/kök/2/1.webp",
  kitchenDanderydSlide2: "/images/kök/2/2.webp",
  kitchenDanderydSlide3: "/images/kök/2/3.webp",
  kitchenDanderydSlide4: "/images/kök/2/6.webp",

  kitchenModernMain: "/images/kök/3/4.webp",
  kitchenModernSlide1: "/images/kök/3/1.webp",
  kitchenModernSlide2: "/images/kök/3/2.webp",
  kitchenModernSlide3: "/images/kök/3/3.webp",
  kitchenModernSlide4: "/images/kök/3/5.webp",

  kitchenUteMain: "/images/kök/4/6.webp",
  kitchenUteSlide1: "/images/kök/4/1.webp",
  kitchenUteSlide2: "/images/kök/4/2.webp",
  kitchenUteSlide3: "/images/kök/4/3.webp",
  kitchenUteSlide4: "/images/kök/4/4.webp",
  kitchenUteSlide5: "/images/kök/4/5.webp",

  // --- TERRASS & UTEMILJÖ (Terrace & Decking) ---
  terraceSjostadMain: "/images/terassarbete/1.webp",
  terraceSjostadSlide1: "/images/terassarbete/2.webp",
  terraceSjostadSlide2: "/images/terassarbete/3.webp",

  // --- BADRUM (Bathrooms) ---
  bathroomVasastanMain: "/images/badrumsrenovering/1/4.webp",
  bathroomVasastanSlide1: "/images/badrumsrenovering/1/1.webp",
  bathroomVasastanSlide2: "/images/badrumsrenovering/1/2.webp",
  bathroomVasastanSlide3: "/images/badrumsrenovering/1/3.webp",

  bathroomModernMain: "/images/badrumsrenovering/2/5.webp",
  bathroomModernSlide1: "/images/badrumsrenovering/2/1.webp",
  bathroomModernSlide2: "/images/badrumsrenovering/2/2.webp",
  bathroomModernSlide3: "/images/badrumsrenovering/2/3.webp",
  bathroomModernSlide4: "/images/badrumsrenovering/2/4.webp",
  bathroomModernSlide5: "/images/badrumsrenovering/2/6.webp",

  // --- STAKET & GRINDAR (Fences & Gates) ---
  fenceDjursholmMain: "/images/staket/2.webp",
  fenceDjursholmSlide1: "/images/staket/1.webp",
  fenceDjursholmSlide2: "/images/staket/3.webp",
  fenceDjursholmSlide3: "/images/staket/4.webp",

  // --- Elementskydd ---
  elementskyddMain: "/images/elementskydd/3.webp",
  elementskyddMainSlide1: "/images/elementskydd/2.webp",
  elementskyddMainSlide2: "/images/elementskydd/1.webp",

  // --- Trädgårdsarbete ---
  trädgårdsarbeteMain: "/images/trädgårdsarbete/5.webp",
  trädgårdsarbeteSlide1: "/images/trädgårdsarbete/1.webp",
  trädgårdsarbeteSlide2: "/images/trädgårdsarbete/2.webp",
  trädgårdsarbeteSlide3: "/images/trädgårdsarbete/3.webp",
  trädgårdsarbeteSlide4: "/images/trädgårdsarbete/4.webp",

  // --- Fönsterbyte ---
  fönsterbyteMain: "/images/fönsterbyte/3.webp",
  fönsterbyteSlide1: "/images/fönsterbyte/1.webp",
  fönsterbyteSlide2: "/images/fönsterbyte/2.webp",
  fönsterbyteSlide3: "/images/fönsterbyte/4.webp",
  fönsterbyteSlide4: "/images/fönsterbyte/5.webp",
  fönsterbyteSlide5: "/images/fönsterbyte/6.webp",

  // --- Uterum ---
  uterumMain: "/images/uterum/7.webp",
  uterumMainSlide1: "/images/uterum/1.webp",
  uterumMainSlide2: "/images/uterum/2.webp",
  uterumMainSlide3: "/images/uterum/3.webp",
  uterumMainSlide4: "/images/uterum/4.webp",
  uterumMainSlide5: "/images/uterum/5.webp",
  uterumMainSlide6: "/images/uterum/6.webp",

  // --- Tillbyggnad sovrum och vardagsrum ---
  tillbyggnadMain: "/images/tillbyggnad/8.webp",
  tillbyggnadSlide1: "/images/tillbyggnad/1.webp",
  tillbyggnadSlide2: "/images/tillbyggnad/2.webp",
  tillbyggnadSlide3: "/images/tillbyggnad/3.webp",
  tillbyggnadSlide4: "/images/tillbyggnad/4.webp",
  tillbyggnadSlide5: "/images/tillbyggnad/5.webp",
  tillbyggnadSlide6: "/images/tillbyggnad/6.webp",
  tillbyggnadSlide7: "/images/tillbyggnad/7.webp",
};

export const PROJECTS: GalleryProject[] = [
  {
    id: "saltsjobaden",
    title: "Exklusivt Kök Laröd",
    description:
      "Ett komplett skräddarsytt kök med integrerade vitvaror, carraramarmor och handmålade luckor i tidlös skandinavisk stil.",
    category: "Kök",
    image: PROJECT_IMAGES.kitchenSaltsjobadenMain,
    slides: [
      PROJECT_IMAGES.kitchenSaltsjobadenMain,
      PROJECT_IMAGES.kitchenSaltsjobadenSlide1,
      PROJECT_IMAGES.kitchenSaltsjobadenSlide2,
      PROJECT_IMAGES.kitchenSaltsjobadenSlide3,
    ],
    tags: ["Eksnickerier", "Carraramarmor", "Integrerad LED"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Platsbyggd stommontering & justering av dörrar",
      "Stenmätning och precisionsskärning av Carraramarmor",
      "Elinstallation av integrerade vitvaror & dimmerbelysning",
      "Komplett VVS-installation med dolda rördragningar",
    ],
    specs: [
      { label: "Projekttyp", value: "Premium Kök" },
      { label: "Stil", value: "Skandinavisk Klassisk" },
      { label: "Bänkskiva", value: "Carrara Marmor 30mm" },
      { label: "Entreprenad", value: "Totalentreprenad" },
    ],
    testimonial: {
      text: "Vårt nya kök överträffade alla förväntningar. Kvalitetskänslan i snickerierna och stenhuggeriet är fantastiskt.",
      author: "Lars & Ingrid, Laröd (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "sjostad",
    title: "Terrass & Lounge Rydebäck",
    description:
      "En storslagen terrass i sibirisk lärk med integrerad spabadslösning, infinity-känsla och platsbyggd lounge.",
    category: "Terrass",
    image: PROJECT_IMAGES.terraceSjostadMain,
    slides: [
      PROJECT_IMAGES.terraceSjostadMain,
      PROJECT_IMAGES.terraceSjostadSlide1,
      PROJECT_IMAGES.terraceSjostadSlide2,
    ],
    tags: ["Sibirisk Lärk", "Platsbyggd Lounge", "Spabadsdäck"],
    year: "2024",
    location: "Helsingborg",
    scopeOfWork: [
      "Stabilitetsberäkning & förstärkt bärlina för spabad",
      "Dold skruvning av sibirisk lärk (A-kvalitet)",
      "Konstruktion av platsbyggd hörnlounge med förvaring",
      "Installation av IP-klassad utomhusbelysning med app-styrning",
    ],
    specs: [
      { label: "Material", value: "Sibirisk Lärk" },
      { label: "Yta", value: "78 kvm" },
      { label: "Spabad", value: "Nedsänkt premium-modell" },
      { label: "Byggtid", value: "3 veckor" },
    ],
    testimonial: {
      text: "AS Byggtjänster förvandlade vår tomma terrass till en underbar sommaroas. Extremt nöjda med den dolda skruvningen!",
      author: "Magnus & Sofia, Rydebäck (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "vasastan",
    title: "Limestone Oasis Ramlösa",
    description:
      "Ett master-badrum inspirerat av femstjärniga boutiquehotell med storformatig kalksten och blandare i borstad mässing.",
    category: "Badrum",
    image: PROJECT_IMAGES.bathroomVasastanMain,
    slides: [
      PROJECT_IMAGES.bathroomVasastanMain,
      PROJECT_IMAGES.bathroomVasastanSlide1,
      PROJECT_IMAGES.bathroomVasastanSlide2,
      PROJECT_IMAGES.bathroomVasastanSlide3,
    ],
    tags: ["Kalksten", "Borstad Mässing", "Våtrumsintyg"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Rivning enligt gällande branschregler och fuktsäkring",
      "Applicering av godkänt tätskiktssystem (BKR-våtrumsintyg)",
      "Läggning av storformatig kalksten med minimala fogar",
      "Montering av inbyggda mässingsblandare & nischbelysning",
    ],
    specs: [
      { label: "Sten", value: "Jura kalksten 60x60cm" },
      { label: "Blandare", value: "Inbyggd borstad mässing" },
      { label: "Certifiering", value: "BKR Våtrumscertifikat" },
      { label: "Komfort", value: "Vattenburen golvvärme" },
    ],
    testimonial: {
      text: "Det känns som att gå in på ett lyxhotell varje morgon. Precisionen i plattläggningen är helt enastående.",
      author: "Nils & Charlotte, Ramlösa (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "Modern",
    title: "Modernt Badrum Mariastaden",
    description:
      "Ett lyxigt och stilrent badrum med storformatig keramik i betonglook, infällda nischer med stämningsfull LED-belysning.",
    category: "Badrum",
    image: PROJECT_IMAGES.bathroomModernMain,
    slides: [
      PROJECT_IMAGES.bathroomModernMain,
      PROJECT_IMAGES.bathroomModernSlide1,
      PROJECT_IMAGES.bathroomModernSlide2,
      PROJECT_IMAGES.bathroomModernSlide3,
      PROJECT_IMAGES.bathroomModernSlide4,
      PROJECT_IMAGES.bathroomModernSlide5,
    ],
    tags: ["Granitkeramik", "Mattsvart", "Våtrumsintyg"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Fullständig rivning och fuktsäkring enligt BKR-standard",
      "Gjutning av fall mot designbrunn",
      "Montering av storformatig keramik på både golv och väggar",
      "Installation av dolda LED-profiler och mattsvarta takduschar",
    ],
    specs: [
      { label: "Kakel/Klinker", value: "Granitkeramik 60x60cm" },
      { label: "Armaturer", value: "Inbyggda mattsvarta blandare" },
      { label: "Certifikat", value: "BKR Våtrumsbehörighet" },
      { label: "Golvvärme", value: "Elektrisk komfortgolvvärme" },
    ],
    testimonial: {
      text: "Helt fantastiskt hantverk. De svarta detaljerna och de jämna fogarna ger en otrolig kvalitetskänsla.",
      author: "Anders & Maria, Mariastaden (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "djursholm",
    title: "Staket & Grind Hittarp",
    description:
      "Säkerhetsstaket och motoriserade smidesgrindar som kombinerar maximal integritet med elegant herrgårdskänsla.",
    category: "Staket",
    image: PROJECT_IMAGES.fenceDjursholmMain,
    slides: [
      PROJECT_IMAGES.fenceDjursholmMain,
      PROJECT_IMAGES.fenceDjursholmSlide1,
      PROJECT_IMAGES.fenceDjursholmSlide2,
    ],
    tags: ["Smide", "Automatisering", "Integritet"],
    year: "2024",
    location: "Helsingborg",
    scopeOfWork: [
      "Gjutning av djupgående frostfria betongplintar för grindstolpar",
      "Montering av skräddarsydda smidesgrindar med rostskyddsbehandling",
      "Integration av grindmotorer, kodlås & intercom",
      "Platsbyggt matchande trästaket i sibirisk lärk med täta spjälor",
    ],
    specs: [
      { label: "Grindtyp", value: "Dubbel smidesgrind" },
      { label: "Styrning", value: "Fjärr- & Mobilappstyrd" },
      { label: "Staket", value: "Premium tätsnidat staket" },
      { label: "Stolpar", value: "Beklädda i natursten" },
    ],
    testimonial: {
      text: "Vackert, gediget och oerhört tryggt. Motorsystemet fungerar perfekt och ger oss den avskildhet vi sökte.",
      author: "Henrik, Hittarp (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "danderyd-kitchen",
    title: "Minimalistiskt Kök Hittarp",
    description:
      "Ett stilrent, minimalistiskt kök i mörkbetsad ek kombinerat med slät kompositsten och dolda integrerade handtag.",
    category: "Kök",
    image: PROJECT_IMAGES.kitchenDanderydMain,
    slides: [
      PROJECT_IMAGES.kitchenDanderydMain,
      PROJECT_IMAGES.kitchenDanderydSlide1,
      PROJECT_IMAGES.kitchenDanderydSlide2,
      PROJECT_IMAGES.kitchenDanderydSlide3,
      PROJECT_IMAGES.kitchenDanderydSlide4,
    ],
    tags: ["Mörkbetsad Ek", "Kompositsten", "Minimalism"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Demontering av befintligt kök & återvinning av material",
      "Uträtning av sneda väggar & förberedelse för skåpstommar",
      "Montering av mörkbetsade ekfronter med Push-to-open funktion",
      "Installation av premium integrerade vitvaror från Miele",
    ],
    specs: [
      { label: "Fronter", value: "Mörkbetsad Ekfanér" },
      { label: "Bänkskiva", value: "Silestone Komposit 20mm" },
      { label: "Vitvaror", value: "Miele Generation 7000" },
      { label: "Koncept", value: "Skandinavisk modernism" },
    ],
    testimonial: {
      text: "Vi ville ha ett kök som kändes som en möbel och smälte in i vardagsrummet. De levererade precis detta med kirurgisk precision.",
      author: "Stefan & Elin, Hittarp (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "moden-kitchen",
    title: "Modernt Kök Råå",
    description:
      "Ett elegant, ljust och modernt kök med släta luckor, integrerad belysning och bänkskiva i tålig ljus kompositsten.",
    category: "Kök",
    image: PROJECT_IMAGES.kitchenModernMain,
    slides: [
      PROJECT_IMAGES.kitchenModernMain,
      PROJECT_IMAGES.kitchenModernSlide1,
      PROJECT_IMAGES.kitchenModernSlide2,
      PROJECT_IMAGES.kitchenModernSlide3,
      PROJECT_IMAGES.kitchenModernSlide4,
    ],
    tags: ["Ljus Kompositsten", "Sömlösa Luckor", "LED-belysning"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Planering och fullständig demontering av det äldre köket",
      "Väggförstärkning och finspackling före montage",
      "Installation av skräddarsydda stommar och dämpade luckor",
      "Montering av planlimmad diskho och integrerade ljusprofiler",
    ],
    specs: [
      { label: "Fronter", value: "Lackerad MDF (Sidenmatt)" },
      { label: "Bänkskiva", value: "Dekton Komposit 20mm" },
      { label: "Belysning", value: "Dimbar infälld LED" },
      { label: "Entreprenad", value: "Totalentreprenad" },
    ],
    testimonial: {
      text: "Helt underbart kök med mycket smarta förvaringslösningar. Noggrannheten i alla vinklar är enastående.",
      author: "Johan & Linda, Råå (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "ute-kök",
    title: "Exklusivt Utekök Rydebäck",
    description:
      "Ett robust och platsbyggt utekök i massiv teak och gjuten betong, utrustat med högpresterande integrerad gasolgrill.",
    category: "Kök",
    image: PROJECT_IMAGES.kitchenUteMain,
    slides: [
      PROJECT_IMAGES.kitchenUteMain,
      PROJECT_IMAGES.kitchenUteSlide1,
      PROJECT_IMAGES.kitchenUteSlide2,
      PROJECT_IMAGES.kitchenUteSlide3,
      PROJECT_IMAGES.kitchenUteSlide4,
      PROJECT_IMAGES.kitchenUteSlide5,
    ],
    tags: ["Massiv Teak", "Gjuten Betong", "Utomhusgrill"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Konstruktion av bärande ramverk i väderbeständig teak",
      "Formgjutning och polering av bänkskiva i rå betong",
      "Integration av rostfri gasolgrill samt diskho med blandare",
      "VVS-lösning för enkel avstängning och tömning inför vintern",
    ],
    specs: [
      { label: "Material", value: "Kombination av betong och teak" },
      { label: "Utrustning", value: "Inbyggd Napoleon Gasolgrill" },
      { label: "Vatten", value: "Kallvattenanslutning i rostfritt stål" },
      { label: "Hållbarhet", value: "Byggt för tufft kustklimat" },
    ],
    testimonial: {
      text: "Vårt utekök har blivit sommarens mittpunkt. Hantverket och valet av hållbara material är i absolut toppklass.",
      author: "Mikael, Rydebäck (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "elementskydd ",
    title: "Sekelskiftes Elementskydd Tågaborg",
    description:
      "Skräddarsydda och handtillverkade elementskydd i klassisk design med rottinggaller, anpassade för turn-of-the-century lägenhet.",
    category: "Elementskydd",
    image: PROJECT_IMAGES.elementskyddMain,
    slides: [
      PROJECT_IMAGES.elementskyddMain,
      PROJECT_IMAGES.elementskyddMainSlide1,
      PROJECT_IMAGES.elementskyddMainSlide2,
    ],
    tags: ["Finsnickeri", "Sekelskiftesstil", "Måttbeställt"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Millimeterprecision vid uppmätning under djupa fönsterbrädor",
      "Egen tillverkning av ramar i massiv furu och montering av rotting",
      "Utformning av lufthål för optimal värmecirkulation",
      "Slutmålning och upphängning med dolda magnetfästen",
    ],
    specs: [
      { label: "Material", value: "Massiv furu & Rottinggaller" },
      { label: "Ytbehandling", value: "Handmålad i antikvit kulör" },
      { label: "Stil", value: "Klassisk sekelskiftesdesign" },
      { label: "Installation", value: "Lätt avtagbart för rengöring" },
    ],
    testimonial: {
      text: "De handbyggda elementskydden lyfte hela vardagsrummet. Otroligt vackert snickeriarbete som matchar våra gamla fönsterbrädor.",
      author: "Anna & Peter, Tågaborg (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "trädgårdsarbete",
    title: "Trädgårdsanläggning Maria Park",
    description:
      "En komplett förvandling av trädgården med stilren stensättning av svensk granit, prydliga murar samt rullgräs.",
    category: "Trädgårdsarbete",
    image: PROJECT_IMAGES.trädgårdsarbeteMain,
    slides: [
      PROJECT_IMAGES.trädgårdsarbeteMain,
      PROJECT_IMAGES.trädgårdsarbeteSlide1,
      PROJECT_IMAGES.trädgårdsarbeteSlide2,
      PROJECT_IMAGES.trädgårdsarbeteSlide3,
      PROJECT_IMAGES.trädgårdsarbeteSlide4,
    ],
    tags: ["Granitsten", "Stödmurar", "Rullgräs"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Schaktning, nivellering och förstärkning av bärlager",
      "Stensättning av gångar samt uteplats med kantstöd",
      "Konstruktion av murar för att skapa plana och funktionella ytor",
      "Utläggning av premium rullgräs och plantering av vintergrön häck",
    ],
    specs: [
      { label: "Sten", value: "Grå Flammad Granit" },
      { label: "Yta stensatt", value: "110 kvm" },
      { label: "Murtyp", value: "Betongblock med granitbeklädnad" },
      { label: "Gräs", value: "Etableringsklart villagräs" },
    ],
    testimonial: {
      text: "De förvandlade vår sluttande och svårskötta tomt till en välplanerad, modern och otroligt vacker oas.",
      author: "Karin & Erik, Mariastaden (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "fönsterbyte",
    title: "Energieffektivt Fönsterbyte Stattena",
    description:
      "Ett omfattande byte till moderna, underhållsfria 3-glasfönster med hög isoleringsförmåga för minskade uppvärmningskostnader.",
    category: "Fönsterbyte",
    image: PROJECT_IMAGES.fönsterbyteMain,
    slides: [
      PROJECT_IMAGES.fönsterbyteMain,
      PROJECT_IMAGES.fönsterbyteSlide1,
      PROJECT_IMAGES.fönsterbyteSlide2,
      PROJECT_IMAGES.fönsterbyteSlide3,
      PROJECT_IMAGES.fönsterbyteSlide4,
      PROJECT_IMAGES.fönsterbyteSlide5,
    ],
    tags: ["3-glas isoler", "Aluminiumklätt", "Energisparande"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Fackmannamässig demontering av gamla och dragiga fönster",
      "Inpassning, drevning samt tätning av de nya fönsterkarmarna",
      "Montering av utvändiga plåtar, foder samt snygga fönsterbleck",
      "Justering av beslag och slutbesiktning för maximal täthet",
    ],
    specs: [
      { label: "Fönstertyp", value: "Träfönster med utvändig aluminium" },
      { label: "Glasning", value: "Högpresterande 3-glas fönster" },
      { label: "U-värde", value: "Mindre än 0.8" },
      { label: "Garanti", value: "10 år på både produkt och montage" },
    ],
    testimonial: {
      text: "Fönsterbytet gick oerhört smidigt. Vi märkte omedelbart skillnad på både inomhusklimat och ljudnivån från vägen.",
      author: "Sven-Olof, Stattena (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "uterum",
    title: "Isolerat Uterum Hittarp",
    description:
      "Byggnation av ett modernt, stabilt uterum med gedigen limträstomme och isolerade glaspartier för härlig användning från tidig vår till sen höst.",
    category: "Uterum",
    image: PROJECT_IMAGES.uterumMain,
    slides: [
      PROJECT_IMAGES.uterumMain,
      PROJECT_IMAGES.uterumMainSlide1,
      PROJECT_IMAGES.uterumMainSlide2,
      PROJECT_IMAGES.uterumMainSlide3,
      PROJECT_IMAGES.uterumMainSlide4,
      PROJECT_IMAGES.uterumMainSlide5,
      PROJECT_IMAGES.uterumMainSlide6,
    ],
    tags: ["Limträstomme", "Isolerglas", "Skjutpartier"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Anläggning av gjuten isolerad betonggrund",
      "Resning av rejäl och vitmålad limträstomme",
      "Montering av tåligt och tätt kanalplasttak (isolerat)",
      "Installation av skjutbara glaspartier och slitstarkt golv",
    ],
    specs: [
      { label: "Stomme", value: "Svenskt Limträ (behandlat & målat)" },
      { label: "Glaspartier", value: "Isolerglas (Säsong Vår/Höst)" },
      { label: "Tak", value: "32mm kanalplast med UV-skydd" },
      { label: "Byggtid", value: "Cirka 3-4 veckor" },
    ],
    testimonial: {
      text: "Vi är så glada för vårt nya uterum. Nu kan vi sitta 'ute' och fika oavsett väder. Utmärkt service från start till mål.",
      author: "Marie & Thomas, Hittarp (Helsingborg)",
      rating: 5,
    },
  },
  {
    id: "tillbyggnad",
    title: "Tillbyggnad Sovrum & Vardagsrum",
    description:
      "En väldesignad tillbyggnad på 45 kvm som ger villan ett nytt master bedroom samt ett rymligt och ljust vardagsrum med högt i tak.",
    category: "Tillbyggnad",
    image: PROJECT_IMAGES.tillbyggnadMain,
    slides: [
      PROJECT_IMAGES.tillbyggnadMain,
      PROJECT_IMAGES.tillbyggnadSlide1,
      PROJECT_IMAGES.tillbyggnadSlide2,
      PROJECT_IMAGES.tillbyggnadSlide3,
      PROJECT_IMAGES.tillbyggnadSlide4,
      PROJECT_IMAGES.tillbyggnadSlide5,
      PROJECT_IMAGES.tillbyggnadSlide6,
      PROJECT_IMAGES.tillbyggnadSlide7,
    ],
    tags: ["Husutbyggnad", "Öppet till nock", "Totalentreprenad"],
    year: "2025",
    location: "Helsingborg",
    scopeOfWork: [
      "Schaktning, isolering och gjutning av betongplatta på mark",
      "Resning av trästomme och montering av takstolar",
      "Sömlös hopfogning av tak och fasadbeklädnad med befintligt hus",
      "Montering av gipsskivor, målning och läggning av ekparkett",
    ],
    specs: [
      { label: "Tillbyggnadsyta", value: "45 kvm bruttoarea" },
      { label: "Takhöjd", value: "Öppet till nock (ca 3.8 meter)" },
      { label: "Isolering", value: "Mineralull (enligt gällande energikrav)" },
      { label: "Fasadtyp", value: "Liggande panel, färgmatchad med villan" },
    ],
    testimonial: {
      text: "Projektet flöt på helt enligt tidsplanen. Tillbyggnaden smälter in perfekt och ser ut att ha varit en del av huset sedan det byggdes.",
      author: "Robert & Sofia, Helsingborg",
      rating: 5,
    },
  },
];
