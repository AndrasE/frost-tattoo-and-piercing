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
  Divider,
  Description,
  InstallStepsWrapper,
} from "./PwaModalElements";
import logo from "../../images/logoImgs/logo.png";
// import SafariMobile from "./SafariMobile";
import ChromiumsInstallAvail from "./ChromiumsInstallAvail";

const PwaModal = ({
  $pwaModalOpen,
  togglePwaModal,
  // browserSettings,
  deferredPrompt,
}) => {
  return (
    <MotionModal
      $sidebarOpen={$pwaModalOpen}
      onClick={togglePwaModal}
      initial={{
        bottom: "-100%", // Set initial top position
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
          <HeaderBtn>
            <Svg>
              <Path d="M 3 16.5 L 17 2.5"></Path>
              <Path d="M 3 2.5 L 17 16.346"></Path>
            </Svg>
          </HeaderBtn>
        </HeaderContainer>
        <Divider />
        <Description>
          This site has app functionality. Install it on your device for
          extensive experience and easy access.
        </Description>
        <Divider />
        <InstallStepsWrapper>
          {/* <SafariMobile /> */}
          <ChromiumsInstallAvail deferredPrompt={deferredPrompt} />
        </InstallStepsWrapper>
      </ModalContainer>
    </MotionModal>
  );
};

export default PwaModal;
