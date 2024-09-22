import React from "react";
import {
  Divider,
  Description,
  InstallStepsWrapper,
  InstallStep,
  SearchAppIcon,
} from "./ChromiumsInstalledAlreadyMobileElements";

const ChromiumsInstalledAlreadyMobile = ({ i18n }) => {
  return (
    <>
      <Divider />
      <Description>{i18n.description}</Description>
      <Divider />
      <InstallStepsWrapper>
        <InstallStep>
          <SearchAppIcon />
          {i18n.search}
        </InstallStep>
      </InstallStepsWrapper>
    </>
  );
};

export default ChromiumsInstalledAlreadyMobile;
