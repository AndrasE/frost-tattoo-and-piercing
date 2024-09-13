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
            heading: "AboutENG",
            content: "About ENG language",
          },
          services18: {
            heading: "ServicesENG",
            content: "Services ENG language",
          },
          gallery18: {
            heading: "GalleryENG",
            content: "Gallery ENG language",
          },
          testimonials18: {
            heading: "TestimonialsENG",
            content: "Testimonials ENG language",
          },
          contact18: {
            heading: "ContactENG",
            content: "Contact ENG language",
          },
        },
        hu: {
          translation: {
            about18: {
              heading: "AboutHUN",
              content: "About HUN language",
            },
            services18: {
              heading: "ServicesHUN",
              content: "Services HUN language",
            },
            gallery18: {
              heading: "GalleryHUN",
              content: "Gallery HUN language",
            },
            testimonials18: {
              heading: "TestimonialsHUN",
              content: "Testimonials HUN language",
            },
            contact18: {
              heading: "ContactHUN",
              content: "Contact HUN language",
            },
          },
        },
        de: {
          translation: {
            about18: {
              heading: "AboutDE",
              content: "About DE language",
            },
            services18: {
              heading: "ServicesDE",
              content: "Services DE language",
            },
            gallery18: {
              heading: "GalleryDE",
              content: "Gallery DE language",
            },
            testimonials18: {
              heading: "TestimonialsDE",
              content: "Testimonials DE language",
            },
            contact18: {
              heading: "ContactDE",
              content: "Contact DE language",
            },
          },
        },
      },
    },
  });
