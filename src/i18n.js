import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          about18: {
            heading: "About",
            content: "About eng language",
          },
          services18: {
            heading: "Services",
            content: "Services eng language",
          },
          gallery18: {
            heading: "Gallery",
            content: "Gallery eng language",
          },
          testimonials18: {
            heading: "Testimonials",
            content: "Testimonials eng language",
          },
          contact18: {
            heading: "Contact",
            content: "Contact eng language",
          },
        },
      },
    },
  });
