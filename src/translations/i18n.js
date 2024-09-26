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
            contact: "Contact",
            booking: "Booking",
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
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Very nice and precise work, friendly environment, with excellent professionals... Do you need more??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs//helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Thank you very much, professionalism, patience and kindness. I will definitely come back again.",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs//zoltan.png"),
                link: "https://maps.app.goo.gl/3LACABKHo24kEb6v5",
                review: "He works very well. I can only recommend!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs//edina.png"),
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
          booking18: {
            heading: "BookingEng",
            content:
              "Contact Eng language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          formsubmit18: {
            formheader: "Send us a quick message!",
            nameplaceholder: "name",
            emailplaceholder: "email",
            messageplaceholder: "message",
            sendbtn: "Send",
            nameerror:
              "Name must be at least 3 characters long and only contain letters and spaces.",
            emailerror:
              "Invalid email address. Please enter a valid email address.",
            messageerror: "Message must be at least 20 characters long.",
            feedbackmodal18: {
              successmsgpart1: "Thank you for your message ",
              successmsgpart2: ", I will get back to you shortly!",
              successent: "This has been successfully sent!",
              errorsent: "Failed to send.",
            },
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
                "Search and install 'Progressive Web Apps for Firefox' extension.",
              install: "Press the 'Install' icon in the address bar.",
            },
            safaridesktop18: {
              description:
                "This site has app functionality. Add it to your Dock for extensive experience and easy access.",
              share: "Press the 'Share' button on in the address bar.",
              add: "In the dropdown menu, choose 'Add to Dock'.",
            },
            safarimobile18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              share: "Press the 'Share' button on the menu bar below.",
              add: "Press 'Add to Home Screen'.",
            },
            firefoxoperamobile18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              settings: "Press the 'Setting' button on the top bar above.",
              add: "Press 'Add to Home Screen'.",
            },
            notsupported18: {
              description:
                "Your browiser is currently supporting installation of PWAs (Progressive Web Applications).",
              try: " Please try to open the App via a Chromium based browiser such as Chrome or Edge.",
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
            contact: "Kapcsolat",
            booking: "Foglalás",
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
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Nagyon szép es precíz munka, barátságos környezet, kiváló szakemberrel... Kell ennél több??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Hálásan köszönöm, profizmus, türelem és kedvesség. Biztosan visszatérek még.",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/3LACABKHo24kEb6v5",
                review: "Nagyon szépen dolgozik. Csak ajánlani tudom!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs/edina.png"),
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
          booking18: {
            heading: "BookingHUN",
            content:
              "Contact HUN language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          formsubmit18: {
            formheader: "Küldj nekünk üzenetet!",
            nameplaceholder: "név",
            emailplaceholder: "email",
            messageplaceholder: "üzenet",
            sendbtn: "Küldés",
            nameerror:
              "A névnek legalább 3 karakter hosszúnak kell lennie, és csak betűket és szóközöket tartalmazhat.",
            emailerror:
              "Érvénytelen e-mail. Kérjük, adjon meg egy érvényes e-mail címet.",
            messageerror:
              "Az üzenetnek legalább 20 karakter hosszúnak kell lennie.",
            feedbackmodal18: {
              successmsgpart1: "Köszönjük üzenetét ",
              successmsgpart2: ", hamarosan jelentkezünk!",
              successent: "Sikeresen elküldve.",
              errorsent: "Failed to send.",
            },
          },
          settings18: {
            settings: "beállítás",
            theme: "Téma",
            dark: "Sötét",
            light: "Világos",
            lngs: "Nyelv",
            install: "Telepít",
          },
          pwa18: {
            header: "Hozzáadás a kezdőképernyőhöz",
            chromiumsinstallvail18: {
              description:
                "Ez a weblap app-funkciókkal rendelkezik. Telepítse PWA-ként (Progresszív Webalkalmazás).",
              install: "Telepít",
            },
            chromiumsinstalledalreadymobile18: {
              description:
                "Ez a PWA (Progresszív Webalkalmazás) már telepítve van.",
              search: "Kérjük, keresse meg az alkalmazási között.",
            },
            chromiumsinstalledalreadydesktop18: {
              description:
                "Ez a PWA (Progresszív Webalkalmazás) már telepítve van.",
              open: "A megnyitáshoz kattintson a 'Megnyitás' ikonra a címsorban.",
            },

            safaridesktop18: {
              description:
                "Ez a webhely app funkciókkal rendelkezik. Adja hozzá a dokkhoz a teljes körű élmény és az egyszerű hozzáférés érdekében.",
              share: "Kattintson a 'Megosztás' ikonra a címsorban.",
              add: "A legördülő menüben válassza a 'Hozzáadás a dokkhoz' lehetőséget.",
            },
            safarimobile18: {
              description:
                "Ez a webhely app funkciókkal rendelkezik. Adja hozzá a kezdőképernyőhöz a teljes körű élmény és az egyszerű hozzáférés érdekében.",
              share: "Kattintson a 'Megosztás' ikonra az alábbi menüsorban.",
              add: "Válassza ki a 'Hozzáadás a kezdőképernyőhöz' lehetőséget.",
            },
            firefoxdesktop18: {
              description:
                "Ez a webhely app funkciókkal rendelkezik. Adja hozzá a kezdőképernyőhöz a teljes körű élmény és az egyszerű hozzáférés érdekében.",
              extension:
                "Kattintson a 'Bővítmények' ikonra a fenti menüsorban.",
              search:
                "Keresse meg és telepítse a 'Progressive Web Apps for Firefox' bővítményt.",
              install: "Kattintson a 'Telepítés' ikonra a címsorban.",
            },
            firefoxoperamobile18: {
              description:
                "Ez a webhely app-funkciókkal rendelkezik. Adja hozzá a kezdőképernyőhöz a teljes körű élmény és az egyszerű hozzáférés érdekében.",
              settings: "Kattintson a 'Beállítások' ikonra a címsorban.",
              add: "Válassza ki a 'Hozzáadás a kezdőképernyőhöz' lehetőséget.",
            },
            notsupported18: {
              description:
                "A böngészője jelenleg támogatja a PWA-k (Progresszív Webalkalmazások) telepítését.",
              try: "Kérjük, próbálja meg megnyitni az alkalmazást egy Chromium-alapú böngészőben, például Chrome-on vagy Edge-en keresztül.",
            },
          },
        },
      },
      de: {
        translation: {
          nav18: {
            about: "Wir",
            services: "Dienstleistungen",
            gallery: "Galerie",
            testimonials: "Erfahrungsberichte",
            contact: "Kontakt",
            booking: "Buchung",
          },
          about18: {
            heading: "Wir",
            content:
              "About DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          services18: {
            heading: "Dienstleistungen",
            content:
              "Services DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          gallery18: {
            heading: "Galerie",
            content:
              "Gallery DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonials18: {
            heading: "Erfahrungsberichte",
            content:
              "Testimonials DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          testimonial18: {
            slides: [
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs//helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs//zoltan.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs//edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review: "de",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "Kontakt",
            content:
              "Contact DE language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          booking18: {
            heading: "Buchung",
            content:
              "Contact Eng language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          formsubmit18: {
            formheader: "Küldj nekünk üzenetet!",
            nameplaceholder: "Name",
            emailplaceholder: "E-Mail",
            messageplaceholder: "Nachricht",
            sendbtn: "Schicken",
            nameerror:
              "Name must be at least 3 characters long and only contain letters and spaces.",
            emailerror:
              "Invalid email address. Please enter a valid email address.",
            messageerror: "Message must be at least 20 characters long.",
            feedbackmodal18: {
              successmsgpart1: "Thank you for your message ",
              successmsgpart2: ", I will get back to you shortly!",
              successent: "This has been successfully sent!",
              errorsent: "Failed to send.",
            },
          },
          settings18: {
            settings: "Einstellungen",
            theme: "Thema",
            dark: "Dunkel",
            light: "Licht",
            lngs: "Sprachen",
            install: "Installieren",
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
                "Search and install 'Progressive Web Apps for Firefox' extension.",
              install: "Press the 'Install' icon in the address bar.",
            },
            safaridesktop18: {
              description:
                "This site has app functionality. Add it to your Dock for extensive experience and easy access.",
              share: "Press the 'Share' button on in the address bar.",
              add: "In the dropdown menu, choose 'Add to Dock'.",
            },
            safarimobile18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              share: "Press the 'Share' button on the menu bar below.",
              add: "Press 'Add to Home Screen'.",
            },
            firefoxoperamobile18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              settings: "Press the 'Setting' button on the top bar above.",
              add: "Press 'Add to Home Screen'.",
            },
            notsupported18: {
              description:
                "Your browiser is currently supporting installation of PWAs (Progressive Web Applications).",
              try: " Please try to open the App via a Chromium based browiser such as Chrome or Edge.",
            },
          },
        },
      },
    },
  });
