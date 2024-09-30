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
            heading: "About",
            content:
              "Our shop has been operating since 2017 in the town of Cegléd. Our current address is: Cegléd, Kossuth Ferenc Street 8. (Our shop is located in the Gyarmati courtyard!). Our guests are welcomed by a friendly, family-like atmosphere and spirit. Over the years, our customer base has steadily grown, and thanks to you, we have become a great team and family!",
          },
          services18: {
            heading: "Services",
            content:
              "In our studio, we offer a variety of services for those interested in tattoo and body modification. Whether you`re looking for a custom tattoo design or ready to get tattooed, I`ll work with you personally to bring your vision to life. Alongside tattoos, I specialize in professional piercings and microdermal implants, ensuring every step is safe and precise. I provide a clean, welcoming environment where you can feel comfortable throughout the process.",
          },
          gallery18: {
            heading: "Gallery",
            content:
              "Over the years, I've completed many works, and you can find a variety of examples in the gallery section. Feel free to browse through some of the tattoos, piercings, and microdermals I've done. The gallery offers a sliding view so you can easily explore the pieces. I regularly update the photos, so make sure to check back for fresh content and recent projects.",
          },
          testimonials18: {
            heading: "Testimonials",
            content:
              "We are proud to share the positive experiences of our clients. Each testimonial highlights the care and craftsmanship we put into every tattoo and piercing. Slide through reviews from some of our satisfied customers on Facebook and Google, and see what they have to say about their time with us. Click the header to explore more detailed feedback and discover why so many choose us for their body art!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/wH2hRXLErfQVHnnE/",
                review:
                  "I can only recommend it. A good tattoo artist with skillful hands 🥰🥰😇 ",
                rating: "⭐⭐⭐⭐⭐",
              },

              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review: "He works very well. I can only recommend!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Very nice and precise work, friendly environment, with excellent professionals... Do you need more??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs/edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "Very nice place! Friendly environment. You are doing a precise job!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Thank you very much, professionalism, patience and kindness. I will definitely come back again.",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "Contact",
            content:
              "For inquiries or to book an appointment, feel free to reach out via email, give us a call, or contact us through Facebook. You can also visit us at our studio, where we're happy to answer any questions and discuss your ideas in person. We`re located at Gyarmati courtyard, and if you're driving, there`s free parking available just a short walk away on Páva Street. We look forward to hearing from you and helping you with your next tattoo or piercing!",
          },
          booking18: {
            heading: "Booking",
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
              successmsgpart1: "Thank you for your message, ",
              successmsgpart2: ". I will get back to you shortly!",
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
          pages: {
            gallery: "Gallery",
            gallerybtn: "Back",
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
            heading: "Rólunk",
            content:
              "Üzletünk 2017 óta üzemel Cegléd városában. Jelenlegi címünk: Cegléd, Kossuth Ferenc utca 8. (A Gyarmati udvarban található üzletünk!). Vendégeinket egy barátságos, családias hangulatú és szellemű üzlet fogadja. Vendégkörünk folyamatosan bővült az évek során, nektek köszönhetően ma már egy nagyszerű csapat és család vagyunk!",
          },
          services18: {
            heading: "Szolgáltatások",
            content:
              "Stúdiónkban széleskörű szolgáltatásokat kínálunk a tetoválás és testmódosítás iránt érdeklődők számára. Legyen szó egyedi tetoválás tervezéséről vagy maga a tetoválás elkészítéséről, tapasztalt művészeink segítenek megvalósítani az elképzeléseidet. A tetoválások mellett profi piercing és microdermal beültetéseket is végzünk, biztosítva a biztonságos és precíz kivitelezést. Stúdiónk tiszta, barátságos környezetet biztosít, ahol kényelmesen érezheted magad a folyamat során. Az évek során hűséges vendégkört építettünk ki, és büszkék vagyunk arra, hogy megbízható részesei lehetünk testművészeti utazásuknak!",
          },
          gallery18: {
            heading: "Galéria",
            content:
              "Az évek során számos munkát készítettem, melyek közül sok példát megtalálhatsz a galéria szekcióban. Böngéssz bátran a tetoválások, piercingek és microdermal munkáim között, amelyeket készítettem. A galériában lapozgathatsz az alkotások között, és időről időre frissítem a képeket, így érdemes visszalátogatni, hogy megnézd a legújabb projektjeimet.",
          },
          testimonials18: {
            heading: "Testimonials",
            content:
              "Büszkék vagyunk arra, hogy megoszthatjuk ügyfeleink pozitív tapasztalatait. Minden egyes visszajelzés kiemeli azt a gondosságot és szakértelmet, amelyet minden tetoválásba és piercingbe fektetünk. Lapozz végig néhány elégedett ügyfelünk Facebookon és Google-ön található véleményei között, és tudd meg, mit mondanak rólunk. Kattints a fejlécen, hogy részletesebb visszajelzéseket olvashass, és megtudd, miért választanak minket olyan sokan testük díszítésére!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/wH2hRXLErfQVHnnE/",
                review:
                  "Csak ajánlani tudom. Jófej tetováló ügyes kezekkel 🥰🥰😇",
                rating: "⭐⭐⭐⭐⭐",
              },

              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review: "Nagyon szépen dolgozik. Csak ajánlani tudom!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Nagyon szép es precíz munka, barátságos környezet, kiváló szakemberrel... Kell ennél több??? 😀",
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
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Hálásan köszönöm, profizmus, türelem és kedvesség. Biztosan visszatérek még.",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "Contact",
            content:
              "Kérdések esetén vagy időpontfoglalásra keress minket bátran e-mailben, telefonon, vagy akár Facebookon is. Látogass el hozzánk a stúdióba is, ahol szívesen válaszolunk a kérdéseidre, és személyesen megbeszélhetjük az elképzeléseidet. Stúdiónk a Gyarmati udvarban található, és ha autóval érkezel, a Páva utcában ingyenes parkolási lehetőség van, mindössze egy rövid sétára. Várjuk megkeresésed, és örömmel segítünk a következő tetoválásod vagy piercinged megvalósításában!",
          },
          booking18: {
            heading: "Booking",
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
              successmsgpart1: "Köszönjük üzenetét, ",
              successmsgpart2: ". Hamarosan jelentkezünk!",
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
          pages: {
            gallery: "Galéria",
            gallerybtn: "Vissza",
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
          hero18: {
            welcome: "Willkommen auf unserer offiziellen Website!",
          },
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
              "Unser Geschäft ist seit 2017 in der Stadt Cegléd tätig. Unsere aktuelle Adresse lautet: Cegléd, Kossuth Ferenc Straße 8. (Unser Geschäft befindet sich im Gyarmati-Hof!). Unsere Gäste werden von einer freundlichen, familiären Atmosphäre und Geist empfangen. Im Laufe der Jahre hat sich unser Kundenstamm kontinuierlich erweitert, und dank euch sind wir heute ein großartiges Team und eine Familie geworden!",
          },
          services18: {
            heading: "Dienstleistungen",
            content:
              "Unser Studio bietet eine Vielzahl an Dienstleistungen für Tätowierungs- und Körpermodifikationsbegeisterte an. Egal, ob du ein individuelles Tattoo-Design möchtest oder bereit bist, dich tätowieren zu lassen - ich arbeite persönlich mit dir zusammen, um deine Vision zu verwirklichen. Neben Tattoos biete ich auch professionelle Piercings und Microdermal-Implantate an und achte darauf, dass jeder Schritt sicher und präzise ist. Ich sorge für eine saubere, einladende Umgebung, in der du dich während des gesamten Prozesses wohlfühlen kannst.",
          },
          gallery18: {
            heading: "Galerie",
            content:
              "Im Laufe der Jahre habe ich viele Arbeiten abgeschlossen, und du findest eine Vielzahl von Beispielen im Galerie-Bereich. Schau dir gerne einige der Tattoos, Piercings und Microdermal-Arbeiten an, die ich gemacht habe. Die Galerie bietet eine durchblätterbare Ansicht, damit du die Werke leicht erkunden kannst. Ich aktualisiere die Bilder regelmäßig, also schau immer mal wieder vorbei, um neue Inhalte und aktuelle Projekte zu sehen.",
          },
          testimonials18: {
            heading: "Erfahrungsberichte",
            content:
              "Wir sind stolz darauf, die positiven Erfahrungen unserer Kunden zu teilen. Jedes Feedback hebt die Sorgfalt und das handwerkliche Können hervor, das wir in jedes Tattoo und Piercing stecken. Blättern Sie durch Bewertungen einiger unserer zufriedenen Kunden auf Facebook und Google und erfahren Sie, was sie über ihre Zeit bei uns sagen. Klicken Sie auf die Überschrift, um ausführlichere Rückmeldungen zu lesen und zu entdecken, warum so viele uns für ihre Körperkunst wählen!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/wH2hRXLErfQVHnnE/",
                review:
                  "Ich kann es nur empfehlen. Ein guter Tätowierer mit geschickten Händen 🥰🥰😇 ",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review: "Er funktioniert sehr gut. Ich kann es nur empfehlen!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Sehr schöne und präzise Arbeit, freundliches Umfeld, mit hervorragenden Fachleuten... Brauchen Sie mehr??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },

              {
                name: "Edina",
                src: require("../images/testimonialsImgs/edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "Sehr schöner Ort! Freundliche Umgebung. Du machst präzise Arbeit!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Vielen Dank, Professionalität, Geduld und Freundlichkeit. Ich werde auf jeden Fall wiederkommen.",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "Kontakt",
            content:
              "Für Anfragen oder Terminvereinbarungen kannst du uns gerne per E-Mail, telefonisch oder über Facebook kontaktieren. Du bist auch herzlich eingeladen, unser Studio zu besuchen, wo wir deine Fragen beantworten und deine Ideen persönlich besprechen können. Unser Studio befindet sich im Gyarmati-Hof, und wenn du mit dem Auto kommst, gibt es kostenlose Parkplätze in der nahegelegenen Páva-Straße, nur einen kurzen Fußweg entfernt. Wir freuen uns darauf, von dir zu hören und dir bei deinem nächsten Tattoo oder Piercing zu helfen!",
          },
          booking18: {
            heading: "Buchung",
            content:
              "Contact Eng language Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
          formsubmit18: {
            formheader: "Schicken Sie uns eine Nachricht!",
            nameplaceholder: "Name",
            emailplaceholder: "E-Mail",
            messageplaceholder: "Nachricht",
            sendbtn: "Schicken",
            nameerror:
              "Der Name muss mindestens 3 Zeichen lang sein und darf nur Buchstaben und Leerzeichen enthalten.",
            emailerror:
              "Ungültige E-Mail. Bitte geben Sie eine gültige E-Mail-Adresse ein.",
            messageerror: "Die Nachricht muss mindestens 20 Zeichen lang sein.",
            feedbackmodal18: {
              successmsgpart1: "Vielen Dank für Ihre Nachricht, ",
              successmsgpart2: ". Ich werde mich in Kürze bei Ihnen melden!",
              successent: "Dies wurde erfolgreich gesendet!",
              errorsent: "Senden fehlgeschlagen.",
            },
          },
          settings18: {
            settings: "Haltung",
            theme: "Thema",
            dark: "Dunkel",
            light: "Licht",
            lngs: "Sprachen",
            install: "Installieren",
          },
          pages: {
            gallery: "Galerie",
            gallerybtn: "Zurück",
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
