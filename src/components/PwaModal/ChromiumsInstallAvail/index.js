import React from "react";
import {
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
    <InstallPwaBtnWrapper>
      <InstallPwaBtn onClick={handleClick}>Install</InstallPwaBtn>
    </InstallPwaBtnWrapper>
  );
};

export default ChromiumsInstallAvail;
