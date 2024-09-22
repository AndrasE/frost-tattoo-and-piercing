import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallPwaBtnWrapper,
  InstallPwaBtn,
} from "./ChromiumsInstallAvailElements";

const ChromiumsInstallAvail = ({ deferredPrompt, i18n }) => {
  const handleClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
    }
  };

  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallPwaBtnWrapper>
          <InstallPwaBtn onClick={handleClick}>{i18n.install}</InstallPwaBtn>
        </InstallPwaBtnWrapper>
      </InstallStepsWrapper>
    </>
  );
};

export default ChromiumsInstallAvail;
