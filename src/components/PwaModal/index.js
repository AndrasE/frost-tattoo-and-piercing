import React from "react";
import {
  MotionModal,
  ModalContainer,
  HeaderContainer,
  HeaderTitleRow,
  HeaderIcon,
  HeaderTitleWrapper,
  HeaderTitle,
  HeaderAddress,
  HeaderBtn,
  Svg,
  Path,
} from "./PwaModalElements";
import logo from "../../images/logoImgs/logo.png";
import ChromiumsInstallAvail from "./ChromiumsInstallAvail";
import ChromiumsInstalledAlready from "./ChromiumsInstalledAlready";
import SafariMobile from "./SafariMobile";
import SafariDesktop from "./SafariDesktop";
import FirefoxOperaMobile from "./FirefoxOperaMobile";
import FirefoxDesktop from "./FirefoxDesktop";

const PwaModal = ({
  $pwaModalOpen,
  togglePwaModal,
  browserSettings,
  deferredPrompt,
}) => {
  // Conditional rendering according to browiser and OS
  const renderPwaModal = () => {
    const { name, os } = browserSettings;

    // Logic for Edge and Chrome
    if ((name === "chrome" || name === "edge") && deferredPrompt) {
      return <ChromiumsInstallAvail deferredPrompt={deferredPrompt} />;
    } else if (name === "chrome" || name === "edge") {
      return <ChromiumsInstalledAlready />;
    }

    // Logic for Safari
    if (name === "safari" && os === "macOS") {
      return <SafariDesktop />;
    } else if (name === "safari" && os === "iOS") {
      return <SafariMobile />;
    }

    // Logic for Firefox
    if (name === "firefox" && os === "windows") {
      return <FirefoxDesktop />;
    } else if ((name === "firefox" || name === "opera") && os === "android") {
      return <FirefoxOperaMobile />;
    }

    // Fallback for unsupported browsers/OS
    return <h1>Browser or OS not supported</h1>;
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
              <HeaderTitle>Add to Home Screen</HeaderTitle>
              <HeaderAddress>{window.location.href}</HeaderAddress>
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
      </ModalContainer>
    </MotionModal>
  );
};

export default PwaModal;
