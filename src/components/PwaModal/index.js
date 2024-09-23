import React from "react";
import {
  MotionModal,
  ModalContainer,
  HeaderContainer,
  HeaderTitleRow,
  HeaderIcon,
  HeaderTitleWrapper,
  HeaderTitle,
  BrowserDetails,
  HeaderAddress,
  HeaderBtn,
  Svg,
  Path,
} from "./PwaModalElements";
import logo from "../../images/logoImgs/logo.png";
import ChromiumsInstallAvail from "./ChromiumsInstallAvail";
import ChromiumsInstalledAlreadyMobile from "./ChromiumsInstalledAlreadyMobile";
import ChromiumsInstalledAlreadyDesktop from "./ChromiumsInstalledAlreadyDesktop";
import SafariMobile from "./SafariMobile";
import SafariDesktop from "./SafariDesktop";
import FirefoxOperaMobile from "./FirefoxOperaMobile";
import FirefoxDesktop from "./FirefoxDesktop";
import NotSupported from "./NotSupported";

const PwaModal = ({
  $pwaModalOpen,
  togglePwaModal,
  browserSettings,
  deferredPrompt,
  pwa,
}) => {
  // Conditional rendering according to browser and OS
  const renderPwaModal = () => {
    const { name, os } = browserSettings;

    // Logic for Edge and Chrome
    if ((name === "Chrome" || name === "Microsoft Edge") && deferredPrompt) {
      return (
        <ChromiumsInstallAvail
          deferredPrompt={deferredPrompt}
          i18n={pwa.chromiumsinstallvail18}
        />
      );
    } else if (name === "Chrome" || name === "Microsoft Edge") {
      if (os === "Android") {
        return (
          <ChromiumsInstalledAlreadyMobile
            i18n={pwa.chromiumsinstalledalreadymobile18}
          />
        );
      } else if (os === "Windows") {
        return (
          <ChromiumsInstalledAlreadyDesktop
            i18n={pwa.chromiumsinstalledalreadydesktop18}
          />
        );
      }
    }

    // Logic for Safari
    if (name === "Safari" && os === "macOS") {
      return <SafariDesktop i18n={pwa.safaridesktop18} />;
    } else if (name === "Safari" && os === "iOS") {
      return <SafariMobile i18n={pwa.safarimobile18} />;
    }

    // Logic for Firefox
    if (name === "Firefox" && os === "Windows") {
      return <FirefoxDesktop i18n={pwa.firefoxdesktop18} />;
    } else if ((name === "Firefox" || name === "Opera") && os === "Android") {
      return <FirefoxOperaMobile i18n={pwa.firefoxoperamobile18} />;
    }

    // Fallback for unsupported browsers/OS
    return <NotSupported i18n={pwa.notsupported18} />;
  };

  return (
    <MotionModal
      $sidebarOpen={$pwaModalOpen}
      onClick={togglePwaModal}
      initial={{
        bottom: "-100%", // Set initial position
      }}
      animate={{
        bottom: $pwaModalOpen ? "0" : "-100%",
        opacity: $pwaModalOpen ? 1 : 0.3,
      }}
      transition={{ duration: 0.3 }}>
      <ModalContainer>
        <HeaderContainer>
          <HeaderTitleRow>
            <HeaderIcon src={logo} alt="logo-icon"></HeaderIcon>
            <HeaderTitleWrapper>
              <HeaderTitle>{pwa.header}</HeaderTitle>
              <HeaderAddress>{window.location.href}</HeaderAddress>
              <BrowserDetails>
                {browserSettings.name} via {browserSettings.os}
              </BrowserDetails>
            </HeaderTitleWrapper>
          </HeaderTitleRow>
          <HeaderBtn onClick={togglePwaModal}>
            <Svg>
              <Path d="M 3 16.5 L 17 2.5"></Path>
              <Path d="M 3 2.5 L 17 16.346"></Path>
            </Svg>
          </HeaderBtn>
        </HeaderContainer>
        {/* Conditionally render the appropriate content */}
        {renderPwaModal()}
        {/* <ChromiumsInstallAvail
          deferredPrompt={deferredPrompt}
          i18n={pwa.chromiumsinstallvail18}
        />
        <ChromiumsInstalledAlreadyMobile
          i18n={pwa.chromiumsinstalledalreadymobile18}
        />
        <ChromiumsInstalledAlreadyDesktop
          i18n={pwa.chromiumsinstalledalreadydesktop18}
        />
        <SafariDesktop i18n={pwa.safaridesktop18} />
        <SafariMobile i18n={pwa.safarimobile18} />
        <FirefoxDesktop i18n={pwa.firefoxdesktop18} />
        <FirefoxOperaMobile i18n={pwa.firefoxoperamobile18} /> */}
        {/* <NotSupported i18n={pwa.notsupported18} />; */}
      </ModalContainer>
    </MotionModal>
  );
};

export default PwaModal;
