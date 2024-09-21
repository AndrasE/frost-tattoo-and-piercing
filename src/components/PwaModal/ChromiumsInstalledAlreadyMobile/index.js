import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  SearchAppIcon,
} from "./ChromiumsInstalledAlreadyMobileElements";

const ChromiumsInstalledAlreadyMobile = () => {
  return (
    <>
      <Divider />
      <Description>
        This PWA (Progressive Web Application) has already been installed.
      </Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <SearchAppIcon />
          Please search for it in your apllication drawer.
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default ChromiumsInstalledAlreadyMobile;
