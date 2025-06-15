"use client";
import { useState } from "react";

export default function nextImage() {
  const [count, setCount] = useState(0);

  let mesoImageGallery = [
    { src: "MesoApp/GymAppPage1.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppMobile2.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppMobile3.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppMobile4.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppMobile5.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppMobile6.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppMobile7.png", alt: "Første side av app" },
    { src: "MesoApp/GymAppPage2.png", alt: " side av app" },
    { src: "MesoApp/GymAppPage3.png", alt: " side av app" },
    { src: "MesoApp/GymAppPage4.png", alt: " side av app" },
    { src: "MesoApp/GymAppPage5.png", alt: " side av app" },
    { src: "MesoApp/GymAppPage6.png", alt: " side av app" },
    { src: "MesoApp/GymAppPage7.png", alt: " side av app" },
  ];
}
// Ta inn og display 2 bilder
// V - H Knapper som bytter til eller fra neste bildet - med animasjon
// når på siste bildet i rekke, og man trykker neste Loop tilbake til nr1, vise versa.

//////////////////////
// Start
// Lag en Liste som inneholder bildene
// Lag en index til bildene, så man har oversikt over hvilket bilde i rekkefølgen man er

// Lag en Knapp Høyre, som øker index med 1 når trykket på (aktiverer animasjon)
// Lag en Knapp Venstre, som minsker index med 1 når man trykker på den (aktiverer animasjon)
// Hvist index er større enn ssiste bildet, loop tilbake til start, og motsatt

// 🔧 1. Lag komponenten
// Opprett en ny komponent (f.eks. ImageCarousel.jsx) i components/-mappen.

// Du skal bruke denne til å skrive all logikk og visning for bildegalleriet.

// 🧠 2. Sett opp grunnstrukturen
// Inne i komponenten:

// Lag et array med bildene dine (f.eks. filnavn eller paths)

// Lag en useState-hook som holder styr på hvilket bilde som er aktivt (f.eks. const [index, setIndex] = useState(0))

// 🧼 3. Lag grunnleggende layout med Tailwind
// Bygg en div med:

// Et område for selve bildet (med f.eks. overflow-hidden og relative hvis du skal animere)

// To knapper: én til venstre ("Tilbake") og én til høyre ("Neste")

// Tailwind-klasser for størrelse, plassering, og responsivitet

// 🖼 4. Vis bildet basert på index
// Bruk images[index] til å vise det riktige bildet. Bruk <img src={images[index]} />

// 👉 5. Lag funksjoner for å bytte bilde
// Skriv to funksjoner:

// handleNext() → Øker index med 1, og går tilbake til 0 hvis det er siste bilde

// handlePrev() → Minsker index, og går til siste bilde hvis du er på 0

// ✨ 6. Legg til animasjon
// Bruk Tailwind-klasser som transition-all, duration-500, ease-in-out, og f.eks. translate-x eller opacity for å gjøre bildet smooth når det endres.

// Evt. bruk Framer Motion senere hvis du vil ha mer kontroll.

// 📱 7. Gjør det responsivt
// Bruk Tailwind sine breakpoints (sm:, md:, lg: osv.) for å justere bildestørrelse og knappplassering på forskjellige skjermer.

// ✅ Klar!
// Når du har disse stegene på plass, har du en fungerende, animert og responsiv bildekarusell. Derfra kan du forbedre med f.eks.:

// Auto-play

// Swipe på mobil

// Bildetekster

// Indikatorer for hvilket bilde som er aktivt
