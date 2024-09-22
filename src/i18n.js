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
          hero18: {
            welcome: "Welcome to our offfical website!",
          },
          nav18: {
            about: "About",
            services: "Services",
            gallery: "Gallery",
            testimonials: "Testimonials",
            booking: "Booking",
            contact: "Contact",
          },
          about18: {
            heading: "AboussstENG",
            content:
              "About ENG language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          services18: {
            heading: "ServicesENG",
            content:
              "Services ENG language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          gallery18: {
            heading: "GalleryENG",
            content:
              "Gallery ENG language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonials18: {
            heading: "TestimonialsENG",
            content:
              "Testimonials ENG language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonial18: {
            slides: [
              {
                name: "Dia",
                src: require("./images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Very nice and precise work, friendly environment, with excellent professionals... Do you need more??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("./images/testimonialsImgs//helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Thank you very much, professionalism, patience and kindness. I will definitely come back again.",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("./images/testimonialsImgs//zoltan.png"),
                link: "https://maps.app.goo.gl/3LACABKHo24kEb6v5",
                review: "He works very well. I can only recommend!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("./images/testimonialsImgs//edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "Very nice place! Friendly environment. You are doing a precise job!",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "ContactENG",
            content:
              "Contact ENG language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          settings18: {
            settings: "settings",
            theme: "Theme",
            dark: "Dark",
            light: "Light",
            lngs: "Languages",
            install: "Install",
          },
          pwa18: {
            header: "Add to Home screen",
            chromiumsinstallvail18: {
              description:
                "This site has app functionality. Install it as PWA (Progressive Web Application).",
              install: "Install",
            },
            chromiumsinstalledalreadymobile18: {
              description:
                "This PWA (Progressive Web Application) has already been installed.",
              search: "Please search for it in your apllication drawer.",
            },
            chromiumsinstalledalreadydesktop18: {
              description:
                "This PWA (Progressive Web Application) has already been installed.",
              open: "Please click the icon in the address bar to open.",
            },
            firefoxdesktop18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              extension: "Press the 'Extension' icon on the menu bar above",
              search:
                "Search and install Progressive Web Apps for Firefox extension.",
              install: "Press the 'Install' icon in the address bar.",
            },
          },
        },
      },
      hu: {
        translation: {
          hero18: {
            welcome: "Üdvözöljük hivatalos weboldalunkon!",
          },
          nav18: {
            about: "Rólunk",
            services: "Szolgáltatások",
            gallery: "Galéria",
            testimonials: "Beszámolók",
            booking: "Foglalás",
            contact: "Kapcsolat",
          },
          about18: {
            heading: "AboutHUN",
            content:
              "About HUN language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          services18: {
            heading: "ServicesHUN",
            content:
              "Services HUN language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          gallery18: {
            heading: "GalleryHUN",
            content:
              "Gallery HUN language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonials18: {
            heading: "TestimonialsHUN",
            content:
              "Testimonials HUN language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonial18: {
            slides: [
              {
                name: "Dia",
                src: require("./images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Nagyon szép es precíz munka, barátságos környezet, kiváló szakemberrel... Kell ennél több??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("./images/testimonialsImgs//helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Hálásan köszönöm, profizmus, türelem és kedvesség. Biztosan visszatérek még.",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("./images/testimonialsImgs//zoltan.png"),
                link: "https://maps.app.goo.gl/3LACABKHo24kEb6v5",
                review: "Nagyon szépen dolgozik. Csak ajánlani tudom!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("./images/testimonialsImgs//edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "Nagyon jó kis hely! Barátságos környezet. Szép munkát végez!",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "ContactHUN",
            content:
              "Contact HUN language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          settings18: {
            settings: "beállítás",
            theme: "Téma",
            dark: "Sötét",
            light: "Világos",
            lngs: "Nyelv",
            install: "Telepít",
          },
        },
      },
      de: {
        translation: {
          nav18: {
            about: "de",
            services: "de",
            gallery: "de",
            testimonials: "de",
            booking: "de",
            contact: "de",
          },
          about18: {
            heading: "AboutDE",
            content:
              "About DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          services18: {
            heading: "ServicesDE",
            content:
              "Services DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          gallery18: {
            heading: "GalleryDE",
            content:
              "Gallery DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonials18: {
            heading: "TestimonialsDE",
            content:
              "Testimonials DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonial18: {
            slides: [
              {
                name: "Dia",
                src: require("./images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("./images/testimonialsImgs//helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("./images/testimonialsImgs//zoltan.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("./images/testimonialsImgs//edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "ContactDE",
            content:
              "Contact DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        },
      },
    },
  });
