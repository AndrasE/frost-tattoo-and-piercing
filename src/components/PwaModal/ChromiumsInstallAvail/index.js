import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallPwaBtnWrapper,
  InstallPwaBtn,
} from "./ChromiumsInstallAvailElements";

const ChromiumsInstallAvail = ({ deferredPrompt }) => {
  const handleClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };

  return (
    <>
      <Divider />
      <Description>
        This site has app functionality. Install it as PWA (Progressive Web
        Application).
      </Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallPwaBtnWrapper>
          <InstallPwaBtn onClick={handleClick}>Install</InstallPwaBtn>
        </InstallPwaBtnWrapper>
      </InstallStepsWrapper>
    </>
  );
};

export default ChromiumsInstallAvail;
