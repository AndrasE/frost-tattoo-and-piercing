import { usePwaInstall } from "@khmyznikov/pwa-install";

const PWABtn = () => {
  const { prompt, supported } = usePwaInstall();

  return (
    <div>{supported && <button onClick={prompt}>Install PWA</button>}</div>
  );
};

export default PWABtn;
