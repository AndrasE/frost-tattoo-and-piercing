<h3 align="center">
  <a href="https://frost-tattoo.hu" target="_blank" rel="noopener noreferrer">
  <img src="https://github.com/AndrasE/raw-readme/blob/519799a8692f17a271240c74a8d8681ae577b82a/logo/frost-readme.png" width="120px">
  </a>
  <br/>
PWA-ready React App with animations and custom PWA-installation flow
</h3>

## Hello there 👋

The app is styled with styled-components, animated using React-Scroll, Framer-Motion, React-Swipable and Lottie-React. Automatically detects the user's browser language and preferred theme, loading with those settings by default. Users can adjust these preferences, which are saved for future visits.
It's a PWA-ready (**[Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)**), installable on both mobile and desktop for Chromium-based browsers. I also developed a custom PWA installation flow that adapts to the user's browser and operating system, providing installation instructions even if the browser doesn`t natively support this feature, such as adding the app to the home screen or dock.

The project features a splash screen, hero video, testimonial slider, gallery slider, and a gallery album. Users can easily send emails to the studio via a form with guided prompts. The site is fully responsive and has received high scores on Lighthouse for accessibility, best practices, and SEO.

<div align="center">
<img src="https://github.com/AndrasE/raw-readme/blob/5d590895a0dc665720403591e58b51e42f2cc948/thumbs/frost_1.png" width="220">
<img src="https://github.com/AndrasE/raw-readme/blob/5d590895a0dc665720403591e58b51e42f2cc948/thumbs/frost_2.png" width="220">
<img src="https://github.com/AndrasE/raw-readme/blob/5d590895a0dc665720403591e58b51e42f2cc948/thumbs/frost_3.png" width="220">
</div>

### Key Features

- **Rich Animations** - Uses smooth, declarative animations and swipe gestures for interactive browsing.
- **Internationalization** - Supports multiple languages with automatic browser language detection.
- **Responsive Design** - Fully responsive and optimized for different screen sizes.
- **PWA-Ready & Custom PWA Installation Flow** - Installable on both mobile and desktop for Chromium-based browsers. Adapts to the user's browser and OS, providing alternative installation instructions for not natively supported browsers.
- **Dynamic Sliders** - Includes testimonial and gallery sliders for a seamless user experience.
- **Interactive Gallery Album** - Displays images in a lightbox including a full-screen view.
- **Splash Screen & Hero Video** - Engages users with a polished entry experience.
- **High Lighthouse Scores** - Excellent ratings for accessibility, best practices, and SEO.

### Packages used

- **[styled-components](https://styled-components.com/)** - CSS-in-JS library for styling React components with scoped styles.
- **[framer-motion](https://www.npmjs.com/package/framer-motion)**- Animation library for React, providing simple declarative animations.
- **[react-scroll](https://www.npmjs.com/package/react-scroll)** - Smooth scrolling behavior for React, allowing navigation within the page.
- **[react-swipeable](https://www.npmjs.com/package/react-swipeable)** - Enables swipe gestures on touch devices in React components.
- **[lottie-react](https://www.npmjs.com/package/lottie-react)** - Library to render and control Lottie animations in React.
- **[react-splide](https://splidejs.com/integration/react-splide/)** - Lightweight, customizable slider/carousel for React.
- **[react-photo-album](https://react-photo-album.com/)** - Component for building responsive photo galleries in React. 
- **[yet-another-react-lightbox](https://yet-another-react-lightbox.com/)** - Lightbox component for displaying images in full-screen mode in React.
- **[i18next, i18next-browser-languagedetector, react-i18next](https://www.i18next.com/)** - Internationalization (i18n) framework, with the browser language detector and React bindings for translating apps. 
- **[bowser](https://www.npmjs.com/package/bowser)** - A library to detect browser and device information in JavaScript. 
- **[use-local-storage](https://www.npmjs.com/package/use-local-storage)** - Managing and persisting state in localStorage.
- **[react-dotenv](https://www.npmjs.com/package/react-dotenv)** - Allows the use of .env variables in a React app and keep sensitive information safe.

## Run 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Start with cloning this repo on your local machine via cli or github-desktop:

`
$ git clone https://github.com/AndrasE/frost-tattoo-and-piercing
$ cd PROJECTNAME
`

To install and set up the library, run:

`
$ npm install -S myLib
`

Add your own credentials:

`
edit add own .env
`

Serving the app:

`
$ npm start
`

Running the tests:

`
$ npm test
`

Building a distribution version:

`
$ npm run build
`
