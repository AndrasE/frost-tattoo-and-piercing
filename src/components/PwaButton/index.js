import { useState, useRef, useEffect } from "react";
import logo from "../../images/logoImgs/logo.png";

import PWAInstall from "@khmyznikov/pwa-install/react-legacy";

/*
Sample proj how to import pwa-install component in react <= 18
Installation probably don't work on stackblitz, it's ok.
*/

function App() {
  const [count, setCount] = useState(0);

  const appName = "My PWA";

  const [promptEvent, setPromptEvent] = useState(null);
  const pwaInstallRef = useRef(null);

  // externalPromptEvent is only if your app is big and slow to start
  // check index.html for additional code.
  // https://github.com/khmyznikov/pwa-install?tab=readme-ov-file#async-mode
  useEffect(() => {
    let lastPromptEvent = window.promptEvent;

    const intervalId = setInterval(() => {
      if (window.promptEvent !== lastPromptEvent) {
        lastPromptEvent = window.promptEvent;
        setPromptEvent(window.promptEvent);
      }
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  /* buttons was used here just for sample, not a direct guide
  name and icon props was used just for test, prefer manifest in your app.
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React + pwa-install</p>
        <p>
          <button onClick={() => pwaInstallRef.current?.showDialog(true)}>
            Show
          </button>
          <button onClick={() => pwaInstallRef.current?.hideDialog()}>
            Hide
          </button>
        </p>
      </header>

      <PWAInstall
        ref={pwaInstallRef}
        name={appName}
        icon={logo}
        externalPromptEvent={promptEvent}
        onPwaInstallAvailableEvent={(event) => console.log(event)}></PWAInstall>
    </div>
  );
}

export default App;
