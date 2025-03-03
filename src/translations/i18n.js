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
            tattooandpiercing: "Tattoo and Piercing",
            welcome: "Welcome to our offical website!",
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
              "In our studio, we offer a variety of services for those interested in tattoo and body modification. Whether you`re looking for a custom tattoo design or ready to get tattooed, I`ll work with you personally to bring your vision to life. Alongside tattoos, I specialize in professional piercings and microdermal implants, ensuring every step is safe and precise. We provide a clean, welcoming environment where you can feel comfortable throughout the process.",
          },
          gallery18: {
            heading: "Gallery",
            content:
              "Through our work, I`ve completed a variety of projects, and you can find many examples in the gallery section. Feel free to browse through some of the tattoos, piercings, and microdermals I`ve done. The gallery offers a sliding view, making it easy to explore the pieces. I regularly update the photos, so be sure to check back for fresh content and recent projects.",
          },
          testimonials18: {
            heading: "Testimonials",
            content:
              "We are happy to share the positive experiences of our customers. Every feedback highlights the care and expertise we put into every tattoo and piercing. Scroll through some of our satisfied customer reviews on Facebook and Google to see what they have to say about us. Click on the header to read more detailed reviews and find out why so many people choose us to decorate their bodies!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/15bENQjYdv/",
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
              "Ready to book your piercing or a free tattoo consultation? Just click the button below to secure your appointment on our Salonic page. You'll find time slots for both piercings and tattoo consultations. For tattoos, we offer free consultations to discuss ideas, review designs, and plan everything ahead. Piercing appointments can be booked directly through Salonic for personalized care. Have questions? Use the form to send us a quick message, and we’ll respond soon!",
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
            tattooandpiercing: "Tetoválás és Piercing",
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
              "Stúdiónkban széleskörű szolgáltatásokat kínálunk a tetoválás és testmódosítás iránt érdeklődők számára. Legyen szó egyedi tetoválás tervezéséről vagy maga a tetoválás elkészítéséről, mi segítünk megvalósítani az elképzeléseidet. A tetoválások mellett profi piercing és microdermal beültetéseket is végzünk, biztosítva a biztonságos és precíz kivitelezést. Stúdiónk tiszta, barátságos környezetet biztosít, ahol kényelmesen érezheted magad a folyamat során.",
          },
          gallery18: {
            heading: "Galéria",
            content:
              "A munkánk során számos projektet készítettem, és rengeteg példát találhatsz a galéria szekcióban. Nyugodtan böngéssz a tetoválások, piercingek és microdermal munkáim között. A galéria csúsztatható nézetet kínál, így könnyedén felfedezheted az alkotásokat. Rendszeresen frissítem a fotókat, ezért érdemes visszanézni az új tartalmakért és legújabb projektjeimért.",
          },
          testimonials18: {
            heading: "Beszámolók",
            content:
              "Örömmel osztjuk meg ügyfeleink pozitív tapasztalatait. Minden visszajelzés kiemeli azt a gondosságot és szakértelmet, amelyet minden tetoválásba és piercingbe fektetünk. Lapozz végig néhány elégedett ügyfelünk Facebookon és Google-ön található véleményei között, és tudd meg, mit mondanak rólunk. Kattints a fejlécre, hogy részletesebb visszajelzéseket olvashass, és megtudd, miért választanak minket olyan sokan testük díszítésére!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/15bENQjYdv/",
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
            heading: "Kapcsolat",
            content:
              "Kérdések esetén vagy időpontfoglalásra keress minket bátran e-mailben, telefonon, vagy akár Facebookon is. Látogass el hozzánk a stúdióba is, ahol szívesen válaszolunk a kérdéseidre, és személyesen megbeszélhetjük az elképzeléseidet. Stúdiónk a Gyarmati udvarban található, és ha autóval érkezel, a Páva utcában ingyenes parkolási lehetőség van, mindössze egy rövid sétára. Várjuk megkeresésed, és örömmel segítünk a következő tetoválásod vagy piercinged megvalósításában!",
          },
          booking18: {
            heading: "Foglalás",
            content:
              "Készen állsz piercinged vagy ingyenes tetoválás konzultációd lefoglalására? Kattints az alábbi gombra, és biztosítsd az időpontodat a Salonic oldalunkon. Találsz időpontokat mind piercingekre, mind tetoválás konzultációkra. Tetoválások esetén ingyenes konzultációt kínálunk, hogy átbeszéljük az ötleteidet, megvizsgáljuk a terveket, és mindent előre megtervezzünk. Piercing időpontokat közvetlenül a Reservión keresztül foglalhatsz személyre szabott ellátásért. Kérdésed van? Használd az űrlapot, hogy gyors üzenetet küldj nekünk, és hamarosan válaszolunk!",
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
              errorsent: "Küldés sikertelen.",
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
            tattooandpiercing: "Tattoo und Piercing",
            welcome: "Willkommen auf unserer offiziellen Website!",
          },
          nav18: {
            about: "Studio",
            services: "Dienstleistungen",
            gallery: "Galerie",
            testimonials: "Bewertung",
            contact: "Kontakt",
            booking: "Buchung",
          },
          about18: {
            heading: "Studio",
            content:
              "Unser Studio hat 2017 in Cegléd geoeffnet, und seit letztem Jahr sind wir in unserer neuen Adresse taetig: Cegléd, Kossuth Ferenc Straße 8 (im Gyarmati-Hof!). Unsere Gäste werden von einer freundlichen, familiären Atmosphäre und Stimmung empfangen. Im Laufe der Jahre hat sich unser Kundenstamm kontinuierlich erweitert, und dank euch sind wir heute ein großartiges Team und eine Familie geworden!",
          },
          services18: {
            heading: "Dienstleistungen",
            content:
              "In unserem Studio bieten wir ein breites Spektrum an Dienstleistungen für alle an, die sich für Tätowierungen und Körpermodifikationen interessieren. Ob Ready-to-Go Tattoo oder ein einzigartiges, selbst entworfenes Design: Wir helfen euch eure Ideen zu verwirklichen. Neben Tätowierungen führen wir auch professionelle Piercings und Mikrodermalimplantate durch und sorgen für eine sichere und präzise Ausführung. Unser Studio bietet eine saubere, freundliche Umgebung, in der ihr euch während des Prozesses wohl fühlen können.",
          },
          gallery18: {
            heading: "Galerie",
            content:
              "Seit Beginn meiner Taetigkeit habe ich eine Vielzahl von unterschiedlichen Projekten abgeschlossen, und du findest viele Beispiele im Galeriebereich. Stöbere gerne durch einige der Tattoos, Piercings und Microdermals, die ich gemacht habe. Die Galerie bietet eine Slide-Ansicht, sodass du ganz einfach durch die Werke navigieren kannst. Ich aktualisiere die Fotos regelmäßig, also schaue unbedingt regelmaessig für frische Inhalte und aktuelle Projekte hier rein.",
          },
          testimonials18: {
            heading: "Erfahrungsberichte",
            content:
              "Wir freuen uns, so viele positive Erfahrungen unserer Kunden zu teilen. Jedes Feedback zeigt die Sorgfalt und Kompetenz, die wir in jedes Tattoo und Piercing stecken. Lies gerne durch einige unserer zufriedenen Kundenrezensionen auf Facebook und Google, um zu sehen, was sie über uns zu sagen haben. Klicke auf die Überschrift, um detailliertere Bewertungen zu lesen und herauszufinden, warum so viele Menschen uns wählen, um ihren Körper zu verschönern!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/15bENQjYdv/",
                review:
                  "Ich kann es nur empfehlen. Ein guter Tätowierer mit geschickten Händen 🥰🥰😇 ",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review:
                  "Er arbeitet sehr praezise. Ich kann ihn nur empfehlen!",
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
              "Für Anfragen oder Terminvereinbarungen kannst du uns gerne per E-Mail, telefonisch oder über Facebook kontaktieren. Du bist auch herzlich eingeladen, unser Studio zu besuchen, wo wir deine Fragen beantworten und deine Ideen persönlich besprechen können. Unser Studio befindet sich im Gyarmati-Hof. Wenn du mit dem Auto kommst, gibt es kostenlose Parkplätze in der nahegelegenen Páva-Straße, nur einen kurzen Fußweg entfernt. Wir freuen uns darauf, von dir zu hören und dir bei deinem nächsten Tattoo oder Piercing zu helfen!",
          },
          booking18: {
            heading: "Buchung",
            content:
              "Bereit, deinen Piercing oder eine kostenlose Tätowierungsberatung zu buchen? Klicke einfach auf den Button unten, um deinen Termin auf unserer Salonic-Seite zu sichern. Du findest Zeitfenster für Piercings und Tätowierungsberatungen. Für Tätowierungen bieten wir kostenlose Beratungsgespräche an, um deine Ideen zu besprechen, Designs zu überprüfen und alles im Voraus zu planen. Piercing-Termine können direkt über Salonic für eine persönliche Betreuung gebucht werden. Hast du Fragen? Nutze das Formular, um uns eine kurze Nachricht zu senden, und wir melden uns bald bei dir!",
          },
          formsubmit18: {
            formheader: "Schick uns eine Nachricht!",
            nameplaceholder: "Name",
            emailplaceholder: "E-Mail",
            messageplaceholder: "Nachricht",
            sendbtn: "Senden",
            nameerror:
              "Der Name muss mindestens 3 Zeichen lang sein und darf nur Buchstaben und Leerzeichen enthalten.",
            emailerror:
              "Ungültige E-Mail. Bitte gib eine gültige E-Mail-Adresse an.",
            messageerror: "Die Nachricht muss mindestens 20 Zeichen lang sein.",
            feedbackmodal18: {
              successmsgpart1: "Vielen Dank für Deine Nachricht, ",
              successmsgpart2: ". Ich werde mich in Kürze bei Dir melden!",
              successent: "Dies wurde erfolgreich gesendet!",
              errorsent: "Senden fehlgeschlagen.",
            },
          },
          settings18: {
            settings: "settings",
            theme: "Thema",
            dark: "Dunkel",
            light: "Hell",
            lngs: "Sprachen",
            install: "Installieren",
          },
          pages: {
            gallery: "Galerie",
            gallerybtn: "Zurück",
          },

          pwa18: {
            header: "Zum Startbildschirm hinzufügen",
            chromiumsinstallvail18: {
              description:
                "Diese Website verfügt über App-Funktionalität. Installiere die Seite als PWA (Progressive Web Application).",
              install: "Installieren",
            },
            chromiumsinstalledalreadymobile18: {
              description:
                "Diese PWA (Progressive Web Application) wurde bereits installiert.",
              search: "Bitte schau in deiner Bewerbungsliste nach.",
            },
            chromiumsinstalledalreadydesktop18: {
              description:
                "Diese PWA (Progressive Web Application) wurde bereits installiert.",
              open: "Zum Öffnen klick bitte auf das Symbol in der Adressleiste.",
            },
            firefoxdesktop18: {
              description:
                "Diese Seite verfügt über App-Funktionalität. Füge diese in deinem Startbildschirm hinzu, um ein umfassendes Erlebnis und einen einfachen Zugriff zu erhalten.",
              extension:
                "Klick oben in der Menüleiste auf das Symbol „Erweiterung“.",
              search:
                "Suche und installiere die Erweiterung „Progressive Web Apps für Firefox“.",
              install:
                "Klick in der Adressleiste auf das Symbol „Installieren“.",
            },
            safaridesktop18: {
              description:
                "Diese Seite verfügt über App-Funktionalität. Füge diese zu deinem Dock hinzu, um umfassende Erfahrung und einfachen Zugriff zu erhalten.",
              share: "Klick in der Adressleiste auf die Schaltfläche „Teilen“.",
              add: "Wähle im Dropdown-Menü „Zum Dock hinzufügen“.",
            },
            safarimobile18: {
              description:
                "Diese Seite verfügt über App-Funktionalität. Füge diese zu deinem Startbildschirm hinzu, um ein umfassendes Erlebnis und einen einfachen Zugriff zu erhalten.",
              share:
                "Klick in der Menüleiste unten auf die Schaltfläche „Teilen“.",
              add: "Klick auf „Zum Startbildschirm hinzufügen“.",
            },
            firefoxoperamobile18: {
              description:
                "Diese Seite verfügt über App-Funktionalität. Füge diese zu deinem Startbildschirm hinzu, um ein umfassendes Erlebnis und einen einfachen Zugriff zu erhalten.",
              settings:
                "Klick oben in der oberen Leiste auf die Schaltfläche „Einstellungen“.",
              add: "Klick auf „Zum Startbildschirm hinzufügen“.",
            },
            notsupported18: {
              description:
                "Dein Browser unterstützt derzeit die Installation von PWAs (Progressive Web Applications).",
              try: "Bitte versuche die App über einen Chromium-basierten Browser wie Chrome oder Edge zu öffnen.",
            },
          },
        },
      },
    },
  });
